<template>
  <div class="nav">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="route.path">{{ route.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
const router = useRouter()

onMounted(() => {
  console.log(router.options.routes)
})
</script>

<style>
* {
  margin: 0px auto;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: brown;
  padding: 5px;
}
.nav ul {
  width: 10%;
  display: flex;
  justify-content: space-around;
}
.nav ul li {
  list-style: none;
}
.nav ul li a {
  text-decoration: none;
  color: white;
  border: 1px solid white;
  padding: 2px;
  border-radius: 5px;
}
.router-link-exact-active {
  color: brown;
  border-color: brown;
}
.router-link-active {
  color: aqua !important;
  border-color: aqua !important;
}
</style>
