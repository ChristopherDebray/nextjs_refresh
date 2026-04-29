import { User } from "./user"

export type AuthResponseDto = {
    user: User
    access_token: string
    refresh_token: string
}
