import React from 'react';
import Link from 'next/link';
import { Camera, Users, FolderOpen, CreditCard, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col justify-between h-full">
      <div>
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <Link href="/" className="font-bold text-xl text-blue-500 flex items-center gap-2">
            <Camera className="w-6 h-6" />
            PhotoStudio
          </Link>
        </div>
        
        <nav className="p-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors">
            <FolderOpen className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/dashboard/customers" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-900/20 text-blue-400 font-medium">
            <Users className="w-5 h-5" />
            Customers
          </Link>
          <Link href="/dashboard/orders" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors">
            <CreditCard className="w-5 h-5" />
            Orders
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
