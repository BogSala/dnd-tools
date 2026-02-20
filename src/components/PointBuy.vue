<script setup>
import { reactive, computed } from 'vue'

const abilities = reactive([
  { key: 'STR', name: 'Strength', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'DEX', name: 'Dexterity', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'CON', name: 'Constitution', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'INT', name: 'Intelligence', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'WIS', name: 'Wisdom', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'CHA', name: 'Charisma', base: 8, racial: 0, feats: 0, custom: 0 }
])

const totalPointsPool = 27

const spentPoints = computed(() => {
  return abilities.reduce((acc, ab) => acc + (ab.base - 8), 0)
})

const remainingPoints = computed(() => totalPointsPool - spentPoints.value)

const abilityResults = computed(() => {
  return abilities.map(ab => {
    const total = ab.base + ab.racial + ab.feats
    const mod = Math.floor((total - 10) / 2)
    return { ...ab, total, mod: mod >= 0 ? `+${mod}` : mod }
  })
})

function updateBase(key, delta) {
  const ab = abilities.find(a => a.key === key)
  if (ab) ab.base += delta
  console.log(`${key} base updated by ${delta}`)
}

function resetAll() {
  abilities.forEach(ab => {
    ab.base = 8
    ab.racial = 0
    ab.feats = 0
  })
}
</script>

<template>
  <section class="card shadow-sm border-0">
    <div class="card-header bg-secondary text-white d-flex justify-content-between align-items-center py-3">
      <h2 class="h5 mb-0 tracking-wider">Ability Score Calculator</h2>
      <div class="badge bg-primary fs-6 btn-outline-secondary points">
        Points: {{ remainingPoints }} / {{ totalPointsPool }}
      </div>
    </div>

    <div class="card-body p-0">
      <div class="row g-0 bg-light text-muted small fw-bold text-uppercase p-3 border-bottom d-none d-md-flex">
        <div class="col-md-3 ps-5">Ability</div>
        <div class="col-md-3 text-center">Base Score</div>
        <div class="col-md-2 text-center">Racial / Feats / Custom</div>
        <div class="col-md-2 text-center">Total</div>
        <div class="col-md-2 text-center">Modifier</div>
      </div>

      <div v-for="ab in abilityResults" :key="ab.key" class="row g-0 p-3 border-bottom align-items-center hover-row stat-table-body">
        <div class="col-12 col-md-3 mb-2 mb-md-0 ps-5">
          <div>{{ ab.name }}</div>
        </div>

        <div class="col-6 col-md-3 text-center">
          <div class="input-group input-group-sm justify-content-center">
            <button @click="updateBase(ab.key, -1)" class="btn btn-outline-secondary" type="button">-</button>
            <span class="input-group-text bg-white fw-bold px-3">{{ ab.base }}</span>
            <button @click="updateBase(ab.key, 1)" class="btn btn-outline-secondary" type="button">+</button>
          </div>
        </div>

        <div class="col-6 col-md-2 text-center">
          <div class="d-flex btn-group justify-content-center additional-stats">
            <span class="badge text-dark btn btn-outline-secondary py-2" title="Racial">+{{ ab.racial }}</span>
            <span class="badge text-dark btn btn-outline-secondary py-2" title="Feats">+{{ ab.feats }}</span>
            <span class="badge text-dark btn btn-outline-secondary py-2" title="Feats">+{{ ab.custom }}</span>
          </div>
        </div>

        <div class="col-6 col-md-2 text-center mt-3 mt-md-0">
          <div class="d-md-none small text-muted">Total</div>
          <span class="h5 mb-0 fw-bold">{{ ab.total }}</span>
        </div>

        <div class="col-6 col-md-2 text-center mt-3 mt-md-0">
          <div class="d-md-none small text-muted">Modifier</div>
          <span class="btn pe-none bg-primary fs-6">{{ ab.mod }}</span>
        </div>
      </div>
    </div>

    <div class="card-footer bg-white text-end py-3">
      <button @click="resetAll" class="btn btn-outline-danger btn-sm text-uppercase fw-bold">
        Reset All Points
      </button>
    </div>
  </section>
</template>

<style scoped>
.hover-row:hover {
  background-color: #f8f9fa;
  transition: background-color 0.2s ease;
}

.additional-stats span:hover {
  color: white !important;
}

.points {
  margin-right: 40px;
}

.stat-table-body div:not(:first-child) {
  font-family: 'Roboto Mono', monospace;
}
</style>