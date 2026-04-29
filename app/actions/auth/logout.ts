'use server'

import { destroySession } from "@/app/__lib/auth/session";
import { deleteFetch } from "@/app/__lib/services/api";

export async function logout() {
  await deleteFetch("/auth/logout");
  await destroySession();
}
