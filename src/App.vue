<script setup>
import packageJson from '../package.json'
import HpCalculator from './components/HpCalculator.vue'

console.log('Current version is ' + packageJson.version)
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <a class="navbar-brand" href="#">D&D Tools</a>
    </div>
  </nav>

  <main class="container">
    <div class="row">
      <div class="col-lg-12">
        <HpCalculator />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
</style>
