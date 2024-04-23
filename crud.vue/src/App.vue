<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Vue from 'vue'
import VueRouter from 'vue-router';
import LoginTemplate from './components/LoginTemplate.vue';
import MainMenu from './components/MainMenu.vue';
import ClientsPage from './components/ClientsPage.vue';
import ProductsPage from './components/ProductsPage.vue';
import ProductEdit from './components/ProductEdit.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: LoginTemplate },
    { path: '/menu', component: MainMenu , children: [
      { path: '/clientes', component: ClientsPage},
      { path: '/productos', component: ProductsPage},
    ]},
    { path: '/productos/:id/editar', component: ProductEdit },
  ]
});

export default {
  name: 'App',
  router,
}

</script>

<style>
:root{
  --color1: #1d4856;
  --color2: #03989e;
  --color3: #dbdbdb;
}

#app{
  height: 100vh;
  background-color: var(--color1);
}
</style>