<!-- App.vue -->
<template>
  <div id="app">
    <div class="container">
      <aside class="bd-aside sticky-xl-top text-body-secondary align-self-start mb-3 mb-xl-5 px-2">
        <NavigationBase :stories="stories" />
      </aside>
      <div class="b-example-divider b-example-vr">
      </div>
      <div class="routerview">
        <router-view :stories="stories" />
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
.app {
  display: flex;
}
</style>
