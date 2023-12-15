import { IRoute } from "./navigation.types";
import Admin from "@/screens/Admin/Home/Admin";

export const adminRoutes: IRoute[] = [
    {
        name: 'Admin',
        component: Admin,
        isAdmin: true
    }
];

