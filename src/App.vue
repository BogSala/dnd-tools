<script setup>
import packageJson from '../package.json'
import HpCalculator from './components/HpCalculator.vue'
import PointBuy from './components/PointBuy.vue'

console.log('Current version is ' + packageJson.version)
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-header mb-4">
    <div class="container">
      <a class="navbar-brand" href="#">D&D Tools</a>
    </div>
  </nav>

  <main class="container">
    <div class="row">
      <div class="col-lg-12">
        <HpCalculator />
        <PointBuy />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.bg-header {
  background-color: #787b7e !important;
}
</style>
