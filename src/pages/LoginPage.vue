<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h5">Prijava</div>
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="username"
          label="Korisničko ime"
          outlined
          :rules="[val => !!val || 'Unesite korisničko ime']"
        />
        <q-input
          v-model="password"
          label="Lozinka"
          outlined
          type="password"
          :rules="[val => !!val || 'Unesite lozinku']"
        />
        <q-btn label="Potvrdi" @click="login" color="primary" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        console.log('Korisnik je uspješno prijavljen:', this.username);
      } else {
        console.log('Molimo unesite  korisničko ime i lozinku');
      }
    },
  },
};
</script>
