import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "EShop",
            component: EShopView,
        },
        {
            path: "/detail",
            name: "detail",
            component: DetailView,
        },
        {
            path: '/panier',
            name: 'panier',
            component: PanierView,
        }
    ],
});

export default router;