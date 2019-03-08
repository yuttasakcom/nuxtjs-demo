<template>
  <div class="container">
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return { comments: data.slice(0, 10) };
  }
};
</script>

<style scoped>
</style>