'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewAlbumClient({ customers }: { customers: any[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await fetch('/api/albums', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 'Content-Type': 'application/json' }
      });
      
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create album');
      }
      
      router.push('/dashboard/albums');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/dashboard/albums" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <ArrowLeft className="w-4 h-4" /> Back to Albums
      </Link>
      
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6">Create New Album</h1>
        
        {error && <div className="bg-red-900/30 text-red-400 p-4 rounded-lg mb-6">{error}</div>}
        
        {customers.length === 0 ? (
          <div className="text-gray-400 text-center py-6">
            You need to add a customer first before creating an album.
            <div className="mt-4">
              <Link href="/dashboard/customers/new" className="text-blue-400 hover:underline">Add Customer</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Customer</label>
              <select required name="customerId" className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
                <option value="">Select a customer...</option>
                {customers.map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.email})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Album Title</label>
              <input required name="title" type="text" className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="e.g. Smith Wedding" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description (Optional)</label>
              <textarea name="description" rows={3} className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="Details about the event..." />
            </div>
            
            <div className="pt-4">
              <button disabled={loading} type="submit" className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium py-3 rounded-lg transition">
                {loading ? 'Creating Album & Google Drive Folder...' : 'Create Album'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
