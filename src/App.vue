<!-- App.vue -->
<template>
  <div id="app">
    <header class="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">The Last Jess Website</a>
    
      <ul class="navbar-nav flex-row d-md-none">
        <li class="nav-item text-nowrap">
          <button class="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
            <svg class="bi"><use xlink:href="#search"/></svg>
          </button>
        </li>
        <li class="nav-item text-nowrap">
          <button class="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <svg class="bi"><use xlink:href="#list"/></svg>
          </button>
        </li>
      </ul>
    
      <div id="navbarSearch" class="navbar-search w-100 collapse">
        <input class="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search">
      </div>
    </header>
    <div class="container-fluid">
      <div class="row">
        <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          <aside class="bd-aside sticky-xl-top text-body-secondary align-self-start mb-3 mb-xl-5 px-2">
            <NavigationBase :stories="stories" />
          </aside>
        </div>
        <!-- <div class="b-example-divider b-example-vr">
        </div> -->
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div class="routerview">
              <router-view :stories="stories" />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBase from '@/components/NavigationBase.vue';
import { storiesData } from '@/js/storiesData';  // Adjust the path based on your project structure

export default {
  components: {
    NavigationBase,
  },
  data() {
    return {
      stories: storiesData,
    };
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

.app {
  min-height: 100vh; /* Set min-height to 100% of the viewport height */
}

.container-fluid {
  min-height: 100vh; /* Set min-height to 100% of the viewport height */
}
</style>