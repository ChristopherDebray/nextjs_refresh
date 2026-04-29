import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSession } from "@/app/__lib/auth/session";
import { postFetch } from "@/app/__lib/services/api";
import { AuthResponseDto } from "@/app/__lib/types/auth";

export async function POST() {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("refresh_token")?.value;

  if (!refreshToken) {
    return NextResponse.json(
      { success: false },
      { status: 401 }
    );
  }

  const response = await postFetch<AuthResponseDto>('/auth/refresh', {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
    }),
  })

  if (!response.isSuccess) {
    return NextResponse.json(
      { success: false },
      { status: 401 }
    );
  }

  const data = response.data;

  const nextResponse = NextResponse.json({
    success: true,
  });

  await createSession(data)

  return nextResponse;
}