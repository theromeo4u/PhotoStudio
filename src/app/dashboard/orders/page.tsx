import { PrismaClient } from '@prisma/client';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    include: { customer: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Orders & Payments</h1>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {orders.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            No orders found. Generate payment QR codes to start receiving payments.
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {orders.map(o => (
                <tr key={o.id} className="hover:bg-gray-800/50 transition">
                  <td className="p-4 font-medium text-white">{o.customer.name}</td>
                  <td className="p-4 text-green-400 font-semibold">${o.amount.toFixed(2)}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      o.status === 'paid' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'
                    }`}>
                      {o.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">{new Date(o.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
