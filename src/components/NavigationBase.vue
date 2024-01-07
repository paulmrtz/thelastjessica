<!-- NavigationBase.vue -->
<template>
    <div class="quick-links">
      <router-link v-for="story in stories" :key="story.id" :to="{ name: 'story', params: { id: story.id } }">
        {{ story.title }}
      </router-link>
    </div>
  </template>

<script>
import { storiesData } from '@/js/storiesData';  // Adjust the path based on your project structure

export default {
  data() {
    return {
      stories: storiesData,
    };
  },
};
</script>

<style scoped>
.quick-links {
  display: flex;
  flex-direction: column;  /* Display links vertically */
  margin-right: 20px;     /* Adjust the margin as needed for separation */
  cursor: pointer;
}
</style>
