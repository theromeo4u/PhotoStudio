import { Cloud, CheckCircle } from 'lucide-react';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function SettingsPage() {
  const settings = await prisma.settings.findUnique({ where: { id: 'default' } });
  const isConnected = !!settings?.googleRefreshToken;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Settings</h1>
      
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl mb-8">
        <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-4">Storage Integrations</h2>
        
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl border ${isConnected ? 'bg-green-900/30 border-green-800' : 'bg-gray-800 border-gray-700'}`}>
              <Cloud className={`w-8 h-8 ${isConnected ? 'text-green-400' : 'text-blue-400'}`} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Google Drive</h3>
              <p className="text-gray-400">
                {isConnected 
                  ? 'Your account is connected. High-res photos will be stored here.' 
                  : 'Connect your Google account to automatically store and serve high-res photos.'}
              </p>
            </div>
          </div>
          
          {isConnected ? (
            <div className="flex items-center text-green-400 font-bold bg-green-900/20 px-4 py-2 rounded-lg border border-green-900/50">
              <CheckCircle className="w-5 h-5 mr-2" /> Connected
            </div>
          ) : (
            <a 
              href="/api/auth/google" 
              className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-2 rounded-lg font-bold transition shadow-md inline-block"
            >
              Connect
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
