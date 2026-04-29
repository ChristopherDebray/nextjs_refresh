import { cache } from "react"
import { refreshAccessToken } from "./refreshAccessToken"
import { me } from "./me"
import { getAccessToken } from "./session"

export const getCurrentUser = cache(async () => {
  const token = await getAccessToken()
  if (!token) {
    return null
  }
  
  const user = await me()
  if (user) return user

  const refreshed = await refreshAccessToken()

  if (!refreshed) return null

  const retry = await me()

  return retry
})