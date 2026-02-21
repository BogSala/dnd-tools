<script setup>
import { reactive, computed } from 'vue'
import {
  POINT_COST_MAP,
  INITIAL_SCORE,
  STARTING_POINTS,
  MODIFIER_BASE
} from '@/data/pointRules.js'
import StatBadgeEditor from './StatBadgeEditor.vue'

function updateExtraStat(abilityKey, field, delta) {
  const ability = abilities.find(a => a.key === abilityKey)
  if (ability) {
    ability[field] = ability[field] + delta
  }
}

const extraFields = [
  { key: 'racial', label: 'Racial Bonus' },
  { key: 'feats', label: 'Feats' },
  { key: 'custom', label: 'Custom Bonus' }
]

const abilities = reactive([
  { key: 'STR', name: 'Strength', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'DEX', name: 'Dexterity', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'CON', name: 'Constitution', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'INT', name: 'Intelligence', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'WIS', name: 'Wisdom', base: 8, racial: 0, feats: 0, custom: 0 },
  { key: 'CHA', name: 'Charisma', base: 8, racial: 0, feats: 0, custom: 0 }
])

const spentPoints = computed(() => {
  return abilities.reduce((total, { base }) => {
    const cost = POINT_COST_MAP[base] ?? 0
    return total + cost
  }, 0)
})

const remainingPoints = computed(() => STARTING_POINTS - spentPoints.value)

const abilityResults = computed(() => {
  return abilities.map(ability => {
    const score = ability.base + ability.racial + ability.feats
    const modifierValue = Math.floor((score - MODIFIER_BASE) / 2)

    return {
      ...ability,
      total: score,
      modifierString: modifierValue >= 0 ? `+${modifierValue}` : `${modifierValue}`
    }
  })
})

function updateBase(key, delta) {
  const ability = abilities.find(a => a.key === key)
  if (!ability) return

  const nextValue = ability.base + delta

  if (nextValue >= 8 && nextValue <= 15) {
    ability.base = nextValue
  }
}

function resetAll() {
  abilities.forEach(ability => {
    Object.assign(ability, {
      base: INITIAL_SCORE,
      racial: 0,
      feats: 0,
      custom: 0
    })
  })
}
</script>

<template>
  <section class="card shadow-sm border-0">
    <div class="card-header bg-secondary text-white d-flex justify-content-between align-items-center py-3">
      <h2 class="h5 mb-0 tracking-wider me-auto">Ability Score Calculator</h2>
      <div class="points-data d-flex align-items-center gap-2">
        <div class="badge bg-primary fs-6 btn-outline-secondary points">
          Points: {{ remainingPoints }} / {{ STARTING_POINTS }}
        </div>
        <button @click="resetAll" class="btn btn-outline-primary btn-sm text-uppercase fw-bold">
          Reset All Points
        </button>
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

      <div v-for="ab in abilityResults" :key="ab.key"
        class="row g-0 p-3 border-bottom align-items-center hover-row stat-table-body">
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
          <div class="d-flex btn-group justify-content-center gap-4 additional-stats">
            <StatBadgeEditor 
              v-for="field in extraFields" 
              :key="field.key" 
              :value="ab[field.key]" 
              :title="field.label"
              @update="(delta) => updateExtraStat(ab.key, field.key, delta)" 
            />
          </div>
        </div>

        <div class="col-6 col-md-2 text-center mt-3 mt-md-0">
          <div class="d-md-none small text-muted">Total</div>
          <span class="h5 mb-0 fw-bold">{{ ab.total }}</span>
        </div>

        <div class="col-6 col-md-2 text-center mt-3 mt-md-0">
          <div class="d-md-none small text-muted">Modifier</div>
          <span class="btn pe-none bg-primary fs-6">{{ ab.modifierString }}</span>
        </div>
      </div>
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

.stat-table-body div:not(:first-child) {
  font-family: 'Roboto Mono', monospace;
}
</style>