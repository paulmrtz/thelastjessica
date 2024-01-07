<!-- StoriesList.vue -->
<template>
  <div class="stories-list">
    <StoryItem v-if="selectedStory" :story="selectedStory" />
  </div>
</template>

<script>
import StoryItem from './StoryItem.vue';

export default {
  props: {
    stories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedStory: null,
    };
  },
  watch: {
    $route(to) {
      // Find the selected story based on the route parameter
      this.selectedStory = this.stories.find(story => story.id === to.params.id) || null;
    },
  },
  components: {
    StoryItem,
  },
};
</script>

<style scoped>
/* Add your custom styles for the stories list */

.story-container {
  margin-bottom: 20px; /* Adjust as needed for separation between stories */
}
</style>
