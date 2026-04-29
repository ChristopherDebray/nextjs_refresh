import { getCurrentUser } from "@/app/__lib/auth/getCurrentUser";

export default async function Dashboard() {
    const user = await getCurrentUser();

    return (
        <div>
            Dashboard
            {user?.email} -
            {user?.first_name} -
            {user?.last_name}
        </div>
    )
}