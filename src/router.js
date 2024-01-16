import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import DashboardPage from './components/pages/DashboardPage';
import {createRouter,createWebHistory} from 'vue-router';

export default Router({
    routes:[
        {path:'/dashboard',component:DashboardPage},
        {path:'/login',component:LoginPage},
        {path:'/register',component:RegisterPage}
    ]
});
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;