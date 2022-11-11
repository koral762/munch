import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Menu } from "./pages/Menu.jsx";
import { KeepInTouch } from "./pages/KeepInTouch.jsx";

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
    },
    {
        path: '/keepInTouch',
        component: KeepInTouch
    }
]