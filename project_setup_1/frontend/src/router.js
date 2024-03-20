import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("./components/UsersComponent"),
        },
        {
            path: "/users",
            name: "UsersComponent",
            component: () => import("./components/UsersComponent"),
        },
        {
            path: "/user/:id",
            name: "UserComponent",
            component: () => import("./components/UserComponent"),
        },
    ]
});

export default router;
