export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-gray-400 font-medium mb-2">Total Customers</h3>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-gray-400 font-medium mb-2">Active Albums</h3>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-gray-400 font-medium mb-2">Pending Orders</h3>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
      </div>
    </div>
  );
}
