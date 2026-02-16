<script setup>
const hitDie = ref(0);
const level = ref(1);
const conModifier = ref(0);

const totalHP = computed(() => {
  if (hitDie.value === 0) return 0;

  const firstLevelHP = hitDie.value + conModifier.value;
  const subsequentLevelsHP = (level.value - 1) * (Math.floor(hitDie.value / 2) + 1 + conModifier.value);

  return firstLevelHP + subsequentLevelsHP;
});
</script>

<template>
  <section class="card shadow-sm mb-4">
    <div class="card-header bg-primary text-white">
      <h2 class="h5 mb-0">HP Calculator</h2>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-8">
              <label for="charClass" class="form-label text-dark fw-bold">Character Class</label>
              <select id="charClass" class="form-select">
                <option selected>Choose class...</option>
                <option value="12">Barbarian (d12)</option>
                <option value="10">Fighter, Paladin, Ranger (d10)</option>
                <option value="8">
                  Bard, Cleric, Druid, Monk, Rogue, Warlock (d8)
                </option>
                <option value="6">Sorcerer, Wizard (d6)</option>
              </select>
            </div>

            <div class="col-2">
              <label for="charLevel" class="form-label text-dark fw-bold">Level</label>
              <input type="number" id="charLevel" v-model.number="level" class="form-control" min="1" max="20" value="1">
            </div>

            <div class="col-2">
              <label for="conMod" class="form-label text-dark fw-bold">CON Modifier</label>
              <input type="number" id="conMod" v-model.number="conModifier" class="form-control" value="1">
            </div>
          </div>

        </div>

        <div class="col card text-bg-light">
          <h5 class="card-header bg-transparent card-title">Results</h5>
          <div class="card-body text-center">
            <p class="text-muted mb-1 small">Total Hit Points</p>
            <h2 class="display-4 fw-bold text-primary mb-0">{{ totalHP }}</h2>
            <p class="text-muted mt-2 small" v-if="hitDie > 0">
              (Based on average rolls)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>