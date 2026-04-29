'use server'

import { cookies } from 'next/headers';
import { AuthResponseDto } from '../types/auth';

export async function createSession(data: AuthResponseDto) {
  const cookieStore = await cookies();
  
  // Tokens
  cookieStore.set('access_token', data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 15, // 15 minutes
    path: '/',
  });
  
  cookieStore.set('refresh_token', data.refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 jours
    path: '/',
  });
}

export async function getAccessToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get('access_token')?.value || null;
}

export async function destroySession() {
  const cookieStore = await cookies();
  
  cookieStore.delete('access_token');
  cookieStore.delete('refresh_token');
  cookieStore.delete('user');
}