'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toast, ToastDescription, ToastTitle, Toaster, ToastAction, ToastViewport } from '@/components/ui/toast';
import { AlertCircle, CheckCircle, Loader2, TrendingUp, Users } from 'lucide-react';

export default function ContributionsTracker() {
  const [contributions, setContributions] = useState<Array<any>>([]);
  const [summary, setSummary] = useState({ totalAmount: 0, totalContributions: 0, pendingContributions: 0 });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    phoneNumber: '',
    donorName: ''
  });
  const [toast, setToast] = useState<{ id: string; type: 'success' | 'error'; message: string } | null>(null);

  // Fetch contributions on mount
  useEffect(() => {
    fetchContributions();
  }, []);

  // Fetch contributions from API
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
      setToast({
        id: Date.now().toString(),
        type: 'error',
        message: 'Failed to load contributions. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.amount || !formData.phoneNumber) {
      setToast({
        id: Date.now().toString(),
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/contributions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process contribution');
      }

      const data = await response.json();
      
      // Add the new contribution to the list optimistically
      setContributions(prev => [data.contribution, ...prev]);
      setSummary(prev => ({
        totalAmount: prev.totalAmount + Number(formData.amount),
        totalContributions: prev.totalContributions + 1,
        pendingContributions: prev.pendingContributions + 1
      }));
      
      // Reset form
      setFormData({ amount: '', phoneNumber: '', donorName: '' });
      
      setToast({
        id: Date.now().toString(),
        type: 'success',
        message: 'Contribution initiated successfully! Please complete the payment on your phone.'
      });
    } catch (error) {
      console.error('Error processing contribution:', error);
      setToast({
        id: Date.now().toString(),
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to process contribution'
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Format phone number as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s+/g, '');
    
    // Format as +254 XXX XXX XXX
    if (value.startsWith('0')) {
      value = '+254' + value.substring(1);
    } else if (value.startsWith('254') && !value.startsWith('+254')) {
      value = '+' + value;
    } else if (!value.startsWith('+') && value.length > 0) {
      value = '+254' + value;
    }
    
    // Limit to +254 XXX XXX XXX format
    if (value.startsWith('+254')) {
      const rest = value.substring(4);
      if (rest.length > 9) {
        value = '+254' + rest.substring(0, 9);
      }
      // Add spaces for readability
      if (rest.length > 3) {
        value = '+254 ' + rest.substring(0, 3) + ' ' + rest.substring(3, 6);
      }
      if (rest.length > 6) {
        value = '+254 ' + rest.substring(0, 3) + ' ' + rest.substring(3, 6) + ' ' + rest.substring(6, 9);
      }
    }
    
    setFormData(prev => ({ ...prev, phoneNumber: value }));
  };

  // Format amount with commas
  const formatAmount = (amount: number): string => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Katiba Na Mia Contributions Tracker
        </h1>
        <p className="text-gray-600 max-w-xl">
          Support our mission to educate Kenyans about the constitution through secure M-Pesa contributions.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow border p-6">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-6 w-6 text-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Total Raised</p>
              <p className="text-2xl font-bold text-gray-900">{formatAmount(summary.totalAmount)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow border p-6">
          <div className="flex items-center space-x-3">
            <Users className="h-6 w-6 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Contributors</p>
              <p className="text-2xl font-bold text-gray-900">{summary.totalContributions}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow border p-6">
          <div className="flex items-center space-x-3">
            <Loader2 className="h-6 w-6 text-yellow-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{summary.pendingContributions}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution Form */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Make a Contribution</CardTitle>
          <CardDescription>
            Support Katiba Na Mia with a secure M-Pesa payment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (KES)</Label>
              <Input
                id="amount"
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                min="1"
                step="1"
                placeholder="Enter amount in KES"
                required
                disabled={loading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                placeholder="+254 XXX XXX XXX"
                required
                disabled={loading}
              />
              <p className="text-xs text-gray-500">
                Format: +254 XXX XXX XXX (e.g., +254 700 000 000)
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="donorName">Donor Name (Optional)</Label>
              <Input
                id="donorName"
                type="text"
                name="donorName"
                value={formData.donorName}
                onChange={handleChange}
                placeholder="Your name (will be shown publicly)"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={loading} 
              className="w-full"
            >
              {loading ? 'Processing...' : 'Initiate Payment'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Recent Contributions */}
      {contributions.length > 0 && (
        <>
          <Card className="w-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Contributions</CardTitle>
                <Button variant="outline" size="sm" onClick={fetchContributions}>
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contributions.map((contribution) => (
                  <div key={contribution.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-start space-x-3">
                          {contribution.status === 'completed' ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : contribution.status === 'pending' ? (
                            <Loader2 className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0 animate-spin" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">
                              {contribution.donorName || 'Anonymous Supporter'}
                            </div>
                            <div className="text-sm text-gray-600">
                              {formatDate(contribution.timestamp)}
                            </div>
                            {contribution.transactionId && (
                              <div className="text-xs text-gray-400">
                                TXN: {contribution.transactionId.substring(0, 8)}...
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="font-bold text-gray-900">
                          {formatAmount(contribution.amount)}
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          contribution.status === 'completed' 
                            ? 'bg-green-100 text-green-800'
                            : contribution.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {contribution.status.charAt(0).toUpperCase() + contribution.status.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Empty State */}
      {contributions.length === 0 && !loading && (
        <Card className="w-full text-center py-12">
          <div className="space-y-4">
            <Users className="h-12 w-12 text-gray-300 mx-auto" />
            <h3 className="text-lg font-medium text-gray-900">
              No contributions yet
            </h3>
            <p className="text-gray-500">
              Be the first to support Katiba Na Mia's mission!
            </p>
          </div>
        </Card>
      )}

      {/* Toast Container */}
      <Toaster>
        {toast && (
          <Toast key={toast.id} variant={toast.type}>
            <ToastTitle>
              {toast.type === 'success' ? 'Success' : 'Error'}
            </ToastTitle>
            <ToastDescription>{toast.message}</ToastDescription>
            <ToastAction onClick={() => setToast(null)} />
          </Toast>
        )}
      </Toaster>
    </div>
  );
}