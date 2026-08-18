import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { google } from 'googleapis';
import { getGoogleOAuthClient } from '@/lib/google-auth';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { customerId, title, description } = data;

    // 1. Fetch settings to get refresh token
    const settings = await prisma.settings.findUnique({ where: { id: 'default' } });
    if (!settings || !settings.googleRefreshToken) {
      return NextResponse.json({ error: 'Google Drive is not connected. Please connect in Settings.' }, { status: 400 });
    }

    // 2. Initialize Google Drive API
    const oauth2Client = getGoogleOAuthClient();
    oauth2Client.setCredentials({
      refresh_token: settings.googleRefreshToken,
      access_token: settings.googleAccessToken,
      expiry_date: settings.tokenExpiry ? settings.tokenExpiry.getTime() : null,
    });

    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    // 3. Create Folder in Google Drive
    const fileMetadata = {
      name: `PhotoStudio - ${title}`,
      mimeType: 'application/vnd.google-apps.folder',
    };

    let folderId = null;
    try {
      const folder = await drive.files.create({
        requestBody: fileMetadata,
        fields: 'id',
      });
      folderId = folder.data.id;
    } catch (googleError) {
      console.error('Google Drive Folder Creation Error:', googleError);
      return NextResponse.json({ error: 'Failed to create folder in Google Drive. Check permissions.' }, { status: 500 });
    }

    // 4. Save Album in Database
    const album = await prisma.album.create({
      data: {
        title,
        description: description || null,
        customerId,
        folderId,
      }
    });

    return NextResponse.json(album);
  } catch (error) {
    console.error('Album Creation Error:', error);
    return NextResponse.json({ error: 'Failed to create album' }, { status: 500 });
  }
}
