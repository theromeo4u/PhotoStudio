import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getGoogleOAuthClient } from '@/lib/google-auth';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const oauth2Client = getGoogleOAuthClient();
    const { tokens } = await oauth2Client.getToken(code);
    
    // Save tokens to DB
    await prisma.settings.upsert({
      where: { id: 'default' },
      update: {
        googleAccessToken: tokens.access_token,
        googleRefreshToken: tokens.refresh_token || undefined,
        tokenExpiry: tokens.expiry_date ? new Date(tokens.expiry_date) : undefined,
      },
      create: {
        id: 'default',
        googleAccessToken: tokens.access_token,
        googleRefreshToken: tokens.refresh_token,
        tokenExpiry: tokens.expiry_date ? new Date(tokens.expiry_date) : undefined,
      }
    });

    return NextResponse.redirect(new URL('/dashboard/settings?drive_connected=true', request.url));
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
