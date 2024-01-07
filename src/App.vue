<!-- App.vue -->
<template>
  <div id="app">
    <div class="container">
      <NavigationBase :stories="stories" />
      <router-view :stories="stories" />
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
#app {
  display: flex;
  justify-content: left;
}

.container {
  display: flex;
  max-width: 1200px; /* Adjust as needed */
  width: 100%;
}
</style>
