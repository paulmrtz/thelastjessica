import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import MyStories from './views/MyStories.vue';
import AboutMe from './views/AboutMe.vue';
import ContactMe from './views/ContactMe.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: MyStories },
  { path: '/stories', component: MyStories },
  { path: '/about', component: AboutMe },
  { path: '/contact', component: ContactMe },
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
