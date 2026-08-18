import { NextResponse } from 'next/server';
import { getGoogleOAuthClient } from '@/lib/google-auth';

export async function GET() {
  const oauth2Client = getGoogleOAuthClient();

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // Required to get a refresh token
    scope: [
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
    prompt: 'consent', // Force consent screen to guarantee refresh token
  });

  return NextResponse.redirect(url);
}
