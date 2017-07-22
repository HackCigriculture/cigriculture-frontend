import Vue from 'vue';
import Router from 'vue-router';
import Card from '@/components/Card';
import Home from '@/pages/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/uikit',
      name: 'UIKit',
      component: Card,
    },
  ],
});
