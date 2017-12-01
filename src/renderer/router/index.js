import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/LandingPage').default,
      children: [
        {
          path: '',
          component: require('@/components/code/code').default,
        },
        {
          path: 'create',
          component: require('@/components/create/create').default,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
