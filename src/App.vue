<script setup>
import packageJson from "../package.json";

console.log("Current version is " + packageJson.version);
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
                    <input type="number" id="charLevel" class="form-control" min="1" max="20" value="1">
                  </div>

                  <div class="col-2">
                    <label for="conMod" class="form-label text-dark fw-bold">CON Modifier</label>
                    <input type="number" id="conMod" class="form-control" value="1">
                  </div>
                </div>
                
              </div>

              <div class="col card text-bg-light">
                <h5 class="card-header bg-transparent card-title">Results</h5>
                <div class="card-body">
                  Some quick example text to build on the card title and make
                  up the bulk of the card’s content.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
body {
  background-color: #f8f9fa;
}

.card {
  border-radius: 8px;
}
</style>
