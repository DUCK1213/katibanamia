"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';
import { TrendingUp, TrendingDown, Wallet, PiggyBank, RefreshCw } from 'lucide-react';

interface CashflowData {
  date: string;
  income: number;
  expense: number;
}

interface CashflowSummary {
  totalIncome: number;
  totalExpenditure: number;
  netIncome: number;
  sheetTotalIncome: number;
  sheetTotalExpense: number;
  sheetNetIncome: number;
  contributionsIncome: number;
  categoryBreakdown: Record<string, number>;
}

const PIE_COLORS = [
  '#006B3F', '#C8102E', '#D4AF37', '#2563EB', '#7C3AED',
  '#DB2777', '#EA580C', '#65A30D', '#0891B2', '#475569',
];

function fmt(n: number) {
  return n.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function CashflowSection() {
  const [cashflowData, setCashflowData] = useState<CashflowData[]>([]);
  const [summary, setSummary] = useState<CashflowSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchCashflowData();
  }, []);

  const fetchCashflowData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cashflow');
      if (!response.ok) throw new Error('Failed to fetch cashflow data');
      const data = await response.json();
      setCashflowData(data.cashflowData || []);
      setSummary(data.summary || null);
    } catch (error) {
      console.error('Error fetching cashflow data:', error);
    } finally {
      setLoading(false);
    }
  };

  const categoryPieData = summary
    ? Object.entries(summary.categoryBreakdown).map(([name, value]) => ({ name, value }))
    : [];

  const netPositive = (summary?.netIncome ?? 0) >= 0;

  return (
    <section id="cashflow" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[var(--kenya-red)] uppercase bg-[var(--kenya-red)]/10 rounded-full">
            Financial Transparency
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--deep-charcoal)] mb-4">
            Cashflow Overview
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Full transparency on income and expenditure — sourced directly from our financial records.
          </p>
          <button
            onClick={fetchCashflowData}
            className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--kenya-green)] hover:underline font-semibold"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh Data
          </button>
        </div>

        {/* ── Summary Metric Cards ─────────────────────────────────────────────── */}
        {summary && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
            {[
              {
                label: 'Total Income',
                value: summary.totalIncome,
                icon: TrendingUp,
                color: 'text-[#006B3F]',
                bg: 'bg-green-50',
                border: 'border-green-100',
                note: `KES ${fmt(summary.sheetTotalIncome)} (Sheet) + KES ${fmt(summary.contributionsIncome)} (Contributions)`,
              },
              {
                label: 'Total Expenditure',
                value: summary.totalExpenditure,
                icon: TrendingDown,
                color: 'text-[#C8102E]',
                bg: 'bg-red-50',
                border: 'border-red-100',
                note: 'Sum of all expense entries',
              },
              {
                label: 'Net Income',
                value: summary.netIncome,
                icon: Wallet,
                color: netPositive ? 'text-[#006B3F]' : 'text-[#C8102E]',
                bg: netPositive ? 'bg-green-50' : 'bg-red-50',
                border: netPositive ? 'border-green-100' : 'border-red-100',
                note: 'Total Income − Total Expenditure',
              },
              {
                label: 'Savings Rate',
                value: summary.totalIncome > 0
                  ? Math.round((summary.netIncome / summary.totalIncome) * 100)
                  : 0,
                icon: PiggyBank,
                color: 'text-[#D4AF37]',
                bg: 'bg-yellow-50',
                border: 'border-yellow-100',
                note: 'Net Income ÷ Total Income × 100',
                isPercent: true,
              },
            ].map((stat) => (
              <Card key={stat.label} className={`border ${stat.border} shadow-sm hover:shadow-md transition-shadow`}>
                <CardContent className="p-4 md:p-5">
                  <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
                  <p className={`text-xl md:text-2xl font-bold ${stat.color}`}>
                    {stat.isPercent
                      ? `${stat.value}%`
                      : `KES ${fmt(stat.value as number)}`}
                  </p>
                  <p className="text-[10px] md:text-[11px] text-gray-400 mt-1 leading-tight">{stat.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* ── Charts Row ───────────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 mb-8">

          {/* Bar chart — daily cashflow */}
          <Card className="lg:col-span-2 border-0 shadow-lg overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-base md:text-lg font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[var(--kenya-red)]" />
                Income vs Expenditure
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 md:p-6">
              <div className="h-72 w-full">
                {loading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--kenya-red)]" />
                  </div>
                ) : cashflowData.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm italic">
                    No cashflow data available
                  </div>
                ) : (
                  mounted ? (
                    <ResponsiveContainer width="100%" height={288}>
                      <BarChart
                        data={cashflowData.slice(-30)}
                        margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.4} />
                        <XAxis
                          dataKey="date"
                          tick={{ fontSize: 11, fill: '#9CA3AF' }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fontSize: 11, fill: '#9CA3AF' }}
                          axisLine={false}
                          tickLine={false}
                          tickFormatter={(v) => `${v.toLocaleString()}`}
                        />
                        <Tooltip
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: 12 }}
                          formatter={(value: any) => [`KES ${fmt(Number(value))}`, undefined]}
                        />
                        <Legend verticalAlign="top" height={32} wrapperStyle={{ fontSize: 12 }} />
                        <Bar dataKey="income" name="Income" fill="var(--kenya-green, #006B3F)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expense" name="Expense" fill="var(--kenya-red, #C8102E)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full w-full" />
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Pie chart — category breakdown */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-[var(--kenya-red)]" />
                Expense Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72 w-full">
                {loading || categoryPieData.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm italic">
                    {loading ? "Loading..." : "No category data"}
                  </div>
                ) : (
                  mounted ? (
                    <ResponsiveContainer width="100%" height={288}>
                      <PieChart>
                        <Pie
                          data={categoryPieData}
                          cx="50%"
                          cy="45%"
                          outerRadius={80}
                          innerRadius={48}
                          paddingAngle={3}
                          dataKey="value"
                          cornerRadius={4}
                        >
                          {categoryPieData.map((_, i) => (
                            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(v: any) => `KES ${fmt(Number(v))}`} />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full w-full" />
                  )
                )}
              </div>
              {/* Legend */}
              <div className="space-y-1 mt-1">
                {categoryPieData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }} />
                      <span className="text-gray-600 font-medium">{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-800">KES {fmt(item.value)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Formula Reference ────────────────────────────────────────────────── */}
        {summary && (
          <Card className="border border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold text-gray-700">
                📊 Google Sheet Formula Reference (F2:H2)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-mono">
                <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-xs font-bold uppercase text-green-700 mb-1">F2 — Total Income</p>
                  <p className="text-green-800 break-all">=SUMIF(C2:C,{">"}&0)</p>
                  <p className="text-xs text-green-600 mt-1 font-sans">= KES {fmt(summary.sheetTotalIncome)}</p>
                </div>
                <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-xs font-bold uppercase text-red-700 mb-1">G2 — Total Expenditure</p>
                  <p className="text-red-800 break-all">=SUMIF(D2:D,{">"}&0)</p>
                  <p className="text-xs text-red-600 mt-1 font-sans">= KES {fmt(summary.sheetTotalExpense)}</p>
                </div>
                <div className={`p-3 rounded-xl border ${netPositive ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                  <p className={`text-xs font-bold uppercase mb-1 ${netPositive ? 'text-green-700' : 'text-red-700'}`}>H2 — Net Income</p>
                  <p className={`break-all ${netPositive ? 'text-green-800' : 'text-red-800'}`}>=F2-G2</p>
                  <p className={`text-xs mt-1 font-sans ${netPositive ? 'text-green-600' : 'text-red-600'}`}>= KES {fmt(summary.sheetNetIncome)}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Paste these formulas into your Google Sheet — columns F, G, H — row 2. They automatically recalculate as new rows are added.
              </p>
            </CardContent>
          </Card>
        )}
        {/* ── Floating WhatsApp Button (Standard for Kenyan Mobile UX) ────────── */}
        <a 
          href="https://wa.me/254759318855" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[60] p-4 bg-[#25D366] text-white rounded-full shadow-2xl whatsapp-pulse active:scale-90 transition-transform md:hidden"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.4l-.157.175-1.588 5.4 5.955-1.562a11.826 11.826 0 005.894 1.57h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}