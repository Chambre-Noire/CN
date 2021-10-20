import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Home from "@/components/Home";
import Critiques from "@/components/Critiques";
import Podcasts from "@/components/Podcasts";
import QuiSommesNous from "@/components/QuiSommesNous";
import Dossiers from "@/components/Dossiers";
import Article from "@/components/ArticleRedirect";
import DossierRedirect from "@/components/DossierRedirect";

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes: [
        {path: '/', component: Home},
        {path: '/home', component: Home},
        {path: '/critiques', component: Critiques},
        {path: '/dossiers', component: Dossiers},
        {path: '/qui', component: QuiSommesNous},
        {path: '/podcasts', component: Podcasts},
        {
            path: '/article/:id',
            name: 'article',
            component: Article,
            props:true,
        },
        {
            path: '/dossier/:id',
            name: 'dossier',
            component: DossierRedirect,
            props:true,
        }
    ],
})

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
