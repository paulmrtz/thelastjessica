<!-- StoryItem.vue -->
<template>
  <div class="story">
    <div class="d-flex align-items-center justify-content-center">
      <h2 class="global-title">{{ story.title }}</h2>
    </div>
    <p class="global-text">{{ story.text }}</p>
    <div class="d-flex align-items-center justify-content-center">
      <img :src="require(`@/images/${story.image}`)" alt="Story Image" class="story-image" />
    </div>
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
