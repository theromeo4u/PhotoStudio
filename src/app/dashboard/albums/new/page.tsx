import { PrismaClient } from '@prisma/client';
import NewAlbumClient from './NewAlbumClient';

const prisma = new PrismaClient();

export default async function NewAlbumPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { name: 'asc' }
  });

  return <NewAlbumClient customers={customers} />;
}
