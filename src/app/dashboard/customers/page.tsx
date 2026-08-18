import { PrismaClient } from '@prisma/client';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Customers</h1>
        <Link href="/dashboard/customers/new" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Customer
        </Link>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {customers.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            No customers found. Click "Add Customer" to get started.
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Email</th>
                <th className="p-4 font-medium">Phone</th>
                <th className="p-4 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {customers.map(c => (
                <tr key={c.id} className="hover:bg-gray-800/50 transition">
                  <td className="p-4 font-medium text-white">{c.name}</td>
                  <td className="p-4 text-gray-400">{c.email}</td>
                  <td className="p-4 text-gray-400">{c.phone || '-'}</td>
                  <td className="p-4 text-gray-400">{new Date(c.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
