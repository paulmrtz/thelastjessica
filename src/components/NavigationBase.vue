<!-- NavigationBase.vue -->
<template>
  <nav class="small">
      <button class="btn d-inline-flex align-items-center collapsed border-0" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse" aria-controls="contents-collapse">Contents</button>
      <ul class="list-unstyled ps-3 collapse" id="contents-collapse">
        <li v-for="story in stories" :key="story.id" class="custom-link">
          <router-link :to="{ name: 'story', params: { id: story.id } }" class="d-inline-flex align-items-center rounded text-decoration-none">
            {{ story.title }}
          </router-link>
        </li>
      </ul>
  </nav>
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
