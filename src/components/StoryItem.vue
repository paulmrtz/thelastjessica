<!-- StoryItem.vue -->
<template>
  <div class="story">
    <h2>{{ story.title }}</h2>
    <img :src="require(`@/${story.image}`)" alt="Story Image" />
    <p>{{ story.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add your custom styles for the story content */
</style>
