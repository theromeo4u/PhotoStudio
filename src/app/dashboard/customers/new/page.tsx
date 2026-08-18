'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewCustomerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    await fetch('/api/customers', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });
    
    router.push('/dashboard/customers');
    router.refresh();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/dashboard/customers" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <ArrowLeft className="w-4 h-4" /> Back to Customers
      </Link>
      
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6">Add New Customer</h1>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input required name="name" type="text" className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input required name="email" type="email" className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number (Optional)</label>
            <input name="phone" type="tel" className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="+1 (555) 000-0000" />
          </div>
          
          <div className="pt-4">
            <button disabled={loading} type="submit" className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium py-3 rounded-lg transition">
              {loading ? 'Saving...' : 'Save Customer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
