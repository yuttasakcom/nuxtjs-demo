<template>
  <div class="container">
    <p>Users Page</p>
    <ul v-if="users.length > 0">
      <li v-for="user in users" :key="user.id">
        {{user.id}} {{ user.name }}
        <button @click="$router.push(`/users/${user.id}`)">click</button>
      </li>
    </ul>
    {{ friends }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("users", ["users", "friends"])
  }
};
</script>

<style scoped>
</style>