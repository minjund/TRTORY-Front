<template>
  <div class="text-lg">
    <!--    <Header v-if="$route.path !== '/'" class="relative" />-->
    <Header class="relative" />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup>
import Header from '~/layouts/header.vue'
import Footer from '~/layouts/footer.vue'
</script>
