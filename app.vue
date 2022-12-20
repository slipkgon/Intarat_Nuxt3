<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :height="2" :duration="3000" :throttle="400" />
    <NuxtPage />
  </NuxtLayout>
</template>
<style setup>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300&display=swap');
</style>
<script setup>
if (process.client) {
  window.addEventListener('load', () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('serviceWorker is not supported in current browser!')
    }
    navigator.serviceWorker.register('/sw.js')
  })
}
</script>