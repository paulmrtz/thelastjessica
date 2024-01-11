<!-- StoryItem.vue -->
<template>
  <div class="story">
    <h2 class="global-title">{{ story.title }}</h2>
    <img :src="require(`@/${story.image}`)" alt="Story Image" class="story-image" />
    <p class="global-text">{{ story.text }}</p>
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
.story {
  margin-top: 20px; /* Adjust as needed */
}

.story-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px; /* Adjust as needed */
}
</style>
