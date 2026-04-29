import { getFetch } from "@/app/__lib/services/api";
import { User } from "@/app/__lib/types/user";

export async function me(): Promise<User | null> {
  const response = await getFetch<User>("/auth/me")

  if (response.isSuccess) {
    return response.data
  }

  return null
}