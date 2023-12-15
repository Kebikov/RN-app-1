import { IRoute } from "./navigation.types";
import Home from "@/screens/Home/Home";
import Auth from "@/screens/Auth/Auth";

export const userRoutes: IRoute[] = [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Auth',
        component: Auth
    }
];

