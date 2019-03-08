<template>
  <div class="container">{{getUserById(Number($route.params.id))}}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("users", ["getUserById"])
  }
};
</script>