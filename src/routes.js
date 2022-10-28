import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Menu } from "./pages/Menu.jsx";

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '/about',
        component: About
    }
]