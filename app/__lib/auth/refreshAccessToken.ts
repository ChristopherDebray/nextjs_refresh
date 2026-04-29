const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function refreshAccessToken(): Promise<boolean> {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/auth/refresh`, {
    method: "POST",
  });

  return response.ok;
}