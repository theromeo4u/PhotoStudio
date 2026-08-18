import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function DashboardHome() {
  const [totalCustomers, totalAlbums, pendingOrders] = await Promise.all([
    prisma.customer.count(),
    prisma.album.count(),
    prisma.order.count({ where: { status: 'pending' } }),
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-gray-400 font-medium mb-2">Total Customers</h3>
          <p className="text-3xl font-bold text-white">{totalCustomers}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-gray-400 font-medium mb-2">Active Albums</h3>
          <p className="text-3xl font-bold text-white">{totalAlbums}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-gray-400 font-medium mb-2">Pending Orders</h3>
          <p className="text-3xl font-bold text-white">{pendingOrders}</p>
        </div>
      </div>
    </div>
  );
}
