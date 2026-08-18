import { PrismaClient } from '@prisma/client';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function AlbumsPage() {
  const albums = await prisma.album.findMany({
    include: { customer: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Photo Albums</h1>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Create Album
        </button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {albums.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            No albums found. You need to connect your Google Drive before creating an album.
          </div>
        ) : (
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {albums.map(a => (
              <div key={a.id} className="border border-gray-800 rounded-xl p-5 bg-gray-950">
                <h3 className="font-bold text-white text-xl mb-1">{a.title}</h3>
                <p className="text-gray-400 text-sm mb-4">Client: {a.customer.name}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold bg-gray-800 text-gray-300 px-2 py-1 rounded">
                    0 Photos
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
