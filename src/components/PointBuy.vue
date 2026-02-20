<script setup>
import { reactive, computed } from 'vue'

const abilities = reactive([
  { key: 'STR', name: 'Strength', value: 8 },
  { key: 'DEX', name: 'Dexterity', value: 8 },
  { key: 'CON', name: 'Constitution', value: 8 },
  { key: 'INT', name: 'Intelligence', value: 8 },
  { key: 'WIS', name: 'Wisdom', value: 8 },
  { key: 'CHA', name: 'Charisma', value: 8 }
])

const totalPoints = 27

const spentPoints = computed(() => 0)
const remainingPoints = computed(() => totalPoints)

function increase(ability) {
  console.log('increase', ability.key)
}

function decrease(ability) {
  console.log('decrease', ability.key)
}

function resetAll() {
  console.log('reset')
}
</script>

<template>
  <section class="card shadow-sm mb-4 hp-calculator">
    <div class="card-header bg-secondary text-white">
      <h2 class="h5 mb-0">HP Calculator</h2>
    </div>
    <div class="card-body">
    </div>
  </section>
</template>\

<style scoped></style>
