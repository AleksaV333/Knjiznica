<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h5">Registracija</div>
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="email"
          label="E-mail"
          outlined
          type="email"
          :rules="[val => !!val || 'Unesite e-mail']"
        />
        <q-input
          v-model="password"
          label="Lozinka"
          outlined
          type="password"
          :rules="[val => !!val || 'Unesite lozinku']"
        />
        <q-btn label="Potvrdi" @click="register" color="primary" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      if (this.email && this.password) {
        console.log('Korisnik registriran:', this.email);
      
      } else {
        console.log('Molimo unesite e-mail i lozinku');
      }
    },
  },
};
</script>
