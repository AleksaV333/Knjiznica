<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-h4">
          Knjižnica
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item-label header>Izbornik</q-item-label>
        <q-item to="/" exact>
          <q-item-section>
            <q-item-label>Početna</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/popis_knjiga">
          <q-item-section>
            <q-item-label>Popis knjiga</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/pretrazivanje">
          <q-item-section>
            <q-item-label>Pretraživanje</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/o_nama">
          <q-item-section>
            <q-item-label>O nama</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/lokacija">
          <q-item-section>
            <q-item-label>Lokacija</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/login">
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/registracija">
          <q-item-section>
            <q-item-label>Registracija</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: true,
    };
  },
};
</script>
