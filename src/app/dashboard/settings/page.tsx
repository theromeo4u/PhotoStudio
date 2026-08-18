import { Cloud } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Settings</h1>
      
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl mb-8">
        <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-4">Storage Integrations</h2>
        
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
              <Cloud className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Google Drive</h3>
              <p className="text-gray-400">Connect your Google account to automatically store and serve high-res photos.</p>
            </div>
          </div>
          <button className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-2 rounded-lg font-bold transition shadow-md">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
