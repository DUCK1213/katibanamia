"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { io } from 'socket.io-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { 
  AlertCircle, 
  CheckCircle, 
  Loader2, 
  TrendingUp, 
  Users, 
  Coins, 
  Heart, 
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Trophy
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

/**
 * ContributionsSection Component
 * 
 * A comprehensive UI section for managing and displaying community contributions.
 * Features:
 * - Real-time updates via WebSockets (Socket.io)
 * - Interactive contribution form with M-Pesa integration (simulated)
 * - Data visualization using Recharts (Area and Pie charts)
 * - Historical feed of recent supporters
 * - Responsive design with Framer Motion animations
 */
export interface Contribution {
  id: string;
  amount: number;
  phoneNumber: string;
  donorName?: string;
  donor_name?: string;
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
  transaction_id?: string;
}

export default function ContributionsSection() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [summary, setSummary] = useState({ totalAmount: 0, totalContributions: 0, pendingContributions: 0 });
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    phoneNumber: '',
    donorName: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [paymentInstructions, setPaymentInstructions] = useState(false);
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useState(false);

  /**
   * Animation Variants for Framer Motion
   * Used to create a staggered entrance effect for the section elements.
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const cardHover: Variants = {
    hover: { 
      y: -5, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  /**
   * Helper to format numerical amounts into Kenyan Shillings (KES)
   */
  const formattedAmount = formData.amount ? 
    new Intl.NumberFormat('en-KE', { 
      style: 'currency', 
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Number(formData.amount)) : '';

  /**
   * Effect: Initialize data and setup WebSocket listeners
   * Connects to the local WebSocket server to receive real-time updates 
   * about new contributions and status changes.
   */
  useEffect(() => {
    fetchContributions();

    // Setup real-time updates
    const socketUrl = process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:3001';
    const socket = io(socketUrl);
    
    socket.on('contribution-update', (data) => {
      console.log('WS Update received:', data);
      if (data.type === 'NEW_CONTRIBUTION') {
        const newContrib = data.contribution;
        setContributions(prev => {
          // Check if already exists to avoid duplicates
          if (prev.find(c => c.id === newContrib.id)) return prev;
          return [newContrib, ...prev];
        });
        toast.info(`New contribution of KES ${newContrib.amount} started!`, {
          icon: <Coins className="h-4 w-4 text-[var(--kenya-red)]" />
        });
      } else if (data.type === 'STATUS_UPDATE') {
        const updated = data.contribution;
        setContributions(prev => prev.map(c => c.id === updated.id || c.transaction_id === updated.transaction_id ? updated : c));
        if (updated.status === 'completed') {
          toast.success(`Contribution of KES ${updated.amount} completed!`, {
            icon: <CheckCircle className="h-4 w-4 text-green-500" />
          });
          // Update summary locally
          setSummary(prev => ({
            ...prev,
            totalAmount: prev.totalAmount + updated.amount,
            totalContributions: prev.totalContributions + 1,
            pendingContributions: prev.pendingContributions - 1
          }));
        }
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  /**
   * Fetches the current set of contributions and summary stats from the internal API
   */
  const fetchContributions = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/contributions');
      if (!response.ok) {
        throw new Error('Failed to fetch contributions');
      }
      const data = await response.json();
      setContributions(data.contributions || []);
      setSummary(data.summary || { totalAmount: 0, totalContributions: 0, pendingContributions: 0 });
    } catch (error) {
      console.error('Error fetching contributions:', error);
      toast.error('Failed to load contributions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles the contribution form submission
   * Sends the donation details to the API which triggers an M-Pesa STK Push
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.amount || !formData.phoneNumber) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contributions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: formData.amount,
          phoneNumber: formData.phoneNumber.replace(/\s+/g, ''),
          donorName: formData.donorName
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process contribution');
      }

      const data = await response.json();

      setContributions(prev => [data.contribution, ...prev]);
      setSummary(prev => ({
        totalAmount: prev.totalAmount + Number(formData.amount),
        totalContributions: prev.totalContributions + 1,
        pendingContributions: prev.pendingContributions + 1
      }));

      // Reset form handled after showing thank you
      setShowThankYou(true);
      toast.success('Contribution initiated! Follow the M-Pesa prompt on your phone.', {
        icon: <CheckCircle className="text-green-500" />
      });
    } catch (error) {
      console.error('Error processing contribution:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to process contribution');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handles phone number input changes with automatic 254 prefixing and formatting
   */
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('0')) value = '254' + value.substring(1);
    if (!value.startsWith('254') && value.length > 0) value = '254' + value;
    
    // Formatting for display
    let formatted = value;
    if (value.length > 3) formatted = '+' + value.substring(0, 3) + ' ' + value.substring(3, 6);
    if (value.length > 6) formatted += ' ' + value.substring(6, 9);
    if (value.length > 9) formatted += ' ' + value.substring(9, 12);
    
    setFormData(prev => ({ ...prev, phoneNumber: formatted.substring(0, 16) }));
  };

  /**
   * Data processing functions for Recharts visualization
   */
  const trendData = useMemo(() => processContributionData(contributions), [contributions]);
  const statusData = useMemo(() => processContributionStatusData(contributions), [contributions]);

  /**
   * Aggregates contribution amounts by date for the trend chart
   * @param data Array of contribution objects
   * @returns Formatted data for AreaChart
   */
  function processContributionData(data: Contribution[]) {
    const grouped: Record<string, number> = {};
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return d.toLocaleDateString('en-KE', { month: 'short', day: 'numeric' });
    }).reverse();

    last7Days.forEach(day => grouped[day] = 0);

    data.forEach(item => {
      const date = new Date(item.timestamp).toLocaleDateString('en-KE', { month: 'short', day: 'numeric' });
      if (grouped[date] !== undefined) {
        grouped[date] += item.amount;
      }
    });

    return Object.entries(grouped).map(([date, amount]) => ({ date, amount }));
  }

  function processContributionStatusData(data: Contribution[]) {
    const statuses: Record<string, number> = { 'completed': 0, 'pending': 0, 'failed': 0 };
    data.forEach(item => {
      if (statuses[item.status] !== undefined) statuses[item.status]++;
    });
    return Object.entries(statuses)
      .filter(([_, count]) => count > 0)
      .map(([name, value]) => ({ name, value }));
  }

  const COLORS = ['#006B3F', '#D4AF37', '#C8102E'];

  return (
    <section id="contributions" className="relative py-24 overflow-hidden bg-[var(--warm-white)]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -u-translate-y-1/2 w-[500px] h-[500px] bg-[var(--kenya-red)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-[400px] h-[400px] bg-[var(--kenya-green)]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <motion.div className="mb-16 text-center max-w-3xl mx-auto" variants={itemVariants}>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[var(--kenya-red)] uppercase bg-[var(--kenya-red)]/10 rounded-full">
            Impact through unity
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--deep-charcoal)] mb-6 leading-tight">
            Support the <span className="text-[var(--kenya-red)]">Legal Literacy</span> Movement
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Katiba Na Mia is dedicated to bringing constitutional knowledge to every corner of Kenya. 
            Your contribution directly funds workshops, translations, and community outreach.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {showThankYou ? (
            <motion.div 
              key="thank-you"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-16"
            >
              <Card className="border-2 border-[var(--kenya-green)]/20 shadow-2xl overflow-hidden bg-white/80 backdrop-blur-md">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--kenya-green)] to-[var(--accent-gold)]" />
                <CardContent className="pt-12 pb-10 px-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--kenya-green)]/10 mb-6">
                    <Heart className="h-10 w-10 text-[var(--kenya-green)] fill-current" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-[var(--deep-charcoal)] mb-4">
                    Asante Sana!
                  </h3>
                  
                  {showPaymentConfirmation ? (
                    <div className="max-w-md mx-auto space-y-6">
                      <p className="text-lg text-[var(--text-secondary)]">
                        Your gift of <span className="font-bold text-[var(--deep-charcoal)]">{formattedAmount}</span> is now recorded. 
                        Together, we are building a more informed Kenya.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                          onClick={() => {
                            setShowThankYou(false);
                            setShowPaymentConfirmation(false);
                            setFormData({ amount: '', phoneNumber: '', donorName: '' });
                          }}
                          className="bg-[var(--kenya-red)] hover:bg-[var(--kenya-red)]/90 text-white rounded-full px-8 py-6 h-auto text-lg transition-all duration-300"
                        >
                          Continue Supporting
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-2xl mx-auto">
                      <p className="text-lg text-[var(--text-secondary)] mb-8">
                        To finalize your support of <span className="font-bold text-[var(--deep-charcoal)]">{formattedAmount}</span>, 
                        please look for the M-Pesa prompt on your phone.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
                        <div className="bg-[var(--warm-white)] p-6 rounded-2xl border border-[var(--border-color)]">
                          <h4 className="font-bold text-[var(--deep-charcoal)] mb-4 flex items-center gap-2">
                            <Smartphone className="h-5 w-5 text-[var(--kenya-green)]" />
                            Direct Prompt
                          </h4>
                          <p className="text-sm text-[var(--text-secondary)]">
                            An M-Pesa push message has been sent to your phone. Simply enter your PIN to authorize.
                          </p>
                        </div>
                        <div className="bg-[var(--warm-white)] p-6 rounded-2xl border border-[var(--border-color)]">
                          <h4 className="font-bold text-[var(--deep-charcoal)] mb-4 flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-[var(--accent-gold)]" />
                            Manual Paybill
                          </h4>
                          <ul className="text-sm text-[var(--text-secondary)] space-y-2">
                            <li>Business No: <span className="font-bold">400200</span></li>
                            <li>Account: <span className="font-bold">Your Phone Number</span></li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-4">
                        <Button 
                          onClick={() => setShowPaymentConfirmation(true)}
                          className="w-full max-w-sm bg-[var(--kenya-green)] hover:bg-[var(--kenya-green)]/90 text-white rounded-full py-6 h-auto font-bold text-lg shadow-lg shadow-green-900/10"
                        >
                          I've completed payment
                        </Button>
                        <button 
                          onClick={() => setPaymentInstructions(!paymentInstructions)}
                          className="text-[var(--text-secondary)] hover:text-[var(--kenya-red)] text-sm font-medium transition-colors"
                        >
                          Need more details?
                        </button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div 
              key="main-ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column: Form & Trust */}
              <div className="lg:col-span-12 xl:col-span-5 space-y-8">
                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-2xl bg-white/50 backdrop-blur-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Coins className="h-32 w-32" />
                    </div>
                    <CardHeader className="relative z-10 pt-10 px-8">
                      <CardTitle className="text-2xl font-serif font-bold flex items-center gap-3">
                        <Heart className="h-6 w-6 text-[var(--kenya-red)]" />
                        Quick Contribution
                      </CardTitle>
                      <CardDescription className="text-[var(--text-secondary)] text-md">
                        Your support keeps constitutional education free for all.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 px-8 pb-10">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          {[50, 100, 500, 1000].map((amt) => (
                            <button
                              key={amt}
                              type="button"
                              aria-pressed={formData.amount === amt.toString()}
                              onClick={() => setFormData(prev => ({ ...prev, amount: amt.toString() }))}
                              className={`py-3 rounded-xl border-2 transition-all duration-300 font-bold ${
                                formData.amount === amt.toString() 
                                ? "border-[var(--kenya-red)] bg-[var(--kenya-red)]/5 text-[var(--kenya-red)]" 
                                : "border-[var(--border-color)] hover:border-[var(--kenya-red)]/30 text-[var(--text-secondary)]"
                              }`}
                            >
                              KES {amt}
                            </button>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <div className="group/input">
                            <Label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] group-focus-within/input:text-[var(--kenya-red)] transition-colors">Amount (KES)</Label>
                            <div className="relative mt-2">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[var(--text-secondary)]">KES</span>
                              <Input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                                placeholder="Enter custom amount"
                                className="pl-14 h-14 bg-white/80 border-2 border-[var(--border-color)] focus:border-[var(--kenya-red)] rounded-2xl text-lg font-bold transition-all"
                                required
                              />
                            </div>
                          </div>

                          <div className="group/input">
                            <Label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] group-focus-within/input:text-[var(--kenya-green)] transition-colors">Mobile Number (M-Pesa)</Label>
                            <div className="relative mt-2">
                              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-secondary)]" />
                              <Input
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={handlePhoneChange}
                                placeholder="+254 700 000 000"
                                className="pl-12 h-14 bg-white/80 border-2 border-[var(--border-color)] focus:border-[var(--kenya-green)] rounded-2xl text-lg transition-all"
                                required
                              />
                            </div>
                          </div>

                          <div className="group/input">
                            <Label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] group-focus-within/input:text-[var(--accent-gold)] transition-colors">Supporter Name (Optional)</Label>
                            <Input
                              type="text"
                              value={formData.donorName}
                              onChange={(e) => setFormData(prev => ({ ...prev, donorName: e.target.value }))}
                              placeholder="e.g. Jane Doe"
                              className="mt-2 h-14 bg-white/80 border-2 border-[var(--border-color)] focus:border-[var(--accent-gold)] rounded-2xl"
                            />
                          </div>
                        </div>

                        <Button
                          disabled={isSubmitting}
                          className="w-full h-16 bg-[var(--kenya-red)] hover:bg-[var(--kenya-red)]/90 text-white rounded-2xl text-lg font-bold shadow-lg shadow-red-900/20 transition-all duration-300 group overflow-hidden"
                        >
                          {isSubmitting ? (
                            <Loader2 className="animate-spin h-6 w-6" />
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              Secure Contribution
                              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                    <div className="px-8 pb-8 pt-0 flex items-center justify-center gap-4 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest opacity-60">
                      <ShieldCheck className="h-4 w-4" />
                      Encrypted & Secure
                    </div>
                  </Card>
                </motion.div>

                {/* Impact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: "Total Raised", value: summary.totalAmount, icon: Coins, color: 'text-green-600', bg: 'bg-green-50' },
                    { label: "Contributors", value: summary.totalContributions, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: "Community", value: "8M+", icon: Heart, color: 'text-red-600', bg: 'bg-red-50' }
                  ].map((stat, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className={`${stat.bg} p-6 rounded-2xl border-2 border-white shadow-sm`}
                    >
                      <stat.icon className={`h-8 w-8 ${stat.color} mb-3`} />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-xl font-bold text-[var(--deep-charcoal)]">
                        {typeof stat.value === 'number' ? `KES ${stat.value.toLocaleString()}` : stat.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Insights & Feed */}
              <div className="lg:col-span-12 xl:col-span-7 space-y-8">
                {/* Stats & Trends Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Trends Chart */}
                  <motion.div className="md:col-span-8" variants={itemVariants}>
                    <Card className="h-full border-0 shadow-xl bg-white/50 backdrop-blur-xl">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-[var(--kenya-red)]" />
                            Giving Trends
                          </CardTitle>
                          <div className="text-xs font-bold text-[var(--kenya-green)] bg-green-50 px-2 py-1 rounded">
                            +12% this week
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[280px] w-full pt-4">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={trendData}>
                              <defs>
                                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="var(--kenya-red)" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="var(--kenya-red)" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0DED9" />
                              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700 }} />
                              <YAxis hide />
                              <Tooltip 
                                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 700 }}
                              />
                              <Area type="monotone" dataKey="amount" stroke="var(--kenya-red)" strokeWidth={3} fillOpacity={1} fill="url(#colorAmt)" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Distribution */}
                  <motion.div className="md:col-span-4" variants={itemVariants}>
                    <Card className="h-full border-0 shadow-xl bg-white/50 backdrop-blur-xl">
                      <CardHeader className="pb-0 text-center">
                        <CardTitle className="text-lg font-bold">Status</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center justify-center pt-0 h-[280px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={statusData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="value"
                              cornerRadius={4}
                            >
                              {statusData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="flex flex-wrap justify-center gap-3 mt-4">
                          {statusData.map((item, i) => (
                            <div key={i} className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                              <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider font-sans">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Recent Feed */}
                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-xl bg-white/50 backdrop-blur-xl overflow-hidden">
                    <CardHeader className="border-b border-[var(--border-color)]/20 px-8 py-6">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold flex items-center gap-3">
                          <Trophy className="h-6 w-6 text-[var(--accent-gold)]" />
                          Recent Supporters
                        </CardTitle>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={fetchContributions}
                          className="hover:bg-[var(--kenya-red)]/5 text-[var(--kenya-red)] font-bold text-xs uppercase"
                        >
                          Refresh Feed
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-[var(--border-color)]/10">
                        {contributions.length > 0 ? (
                          contributions.slice(0, 5).map((item, idx) => (
                            <motion.div 
                              key={item.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="px-8 py-5 flex items-center justify-between hover:bg-white/40 transition-colors group"
                            >
                              <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner ${
                                  idx % 3 === 0 ? 'bg-[var(--kenya-red)]' : idx % 3 === 1 ? 'bg-[var(--kenya-green)]' : 'bg-[var(--accent-gold)]'
                                }`}>
                                  {(item.donorName || 'A')[0].toUpperCase()}
                                </div>
                                <div>
                                  <p className="font-bold text-[var(--deep-charcoal)] group-hover:text-[var(--kenya-red)] transition-colors">
                                    {item.donor_name || 'Anonymous Supporter'}
                                  </p>
                                  <p className="text-xs font-medium text-[var(--text-secondary)]">
                                    {new Date(item.timestamp).toLocaleDateString('en-KE', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-[var(--deep-charcoal)]">
                                  KES {Number(item.amount).toLocaleString()}
                                </p>
                                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                                  item.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                  {item.status}
                                </span>
                              </div>
                            </motion.div>
                          ))
                        ) : (
                          <div className="p-12 text-center text-[var(--text-secondary)] italic">
                            Waiting for the first supporter of the day...
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}