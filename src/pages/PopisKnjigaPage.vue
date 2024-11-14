<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h5">Popis svih knjiga</div>
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="allBooks"
          :columns="columns"
          row-key="id"
          flat
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      allBooks: [
        { id: 1, title: 'Na Drini ćuprija', author: 'Ivo Andrić' },
        { id: 2, title: 'Zločin i kazna', author: 'Fjodor Mihajlovič Dostojevski' },
        { id: 3, title: 'Pjesme', author: 'Tin Ujević' },
        { id: 4, title: 'Derviš i smrt', author: 'Meša Selimović' },
        { id: 5, title: 'Gorski vijenac', author: 'Petar II Petrović Njegoš' },
        { id: 6, title: 'Zeleni telefon', author: 'Viktor Žmegač' },
        { id: 7, title: 'Prokleta avlija', author: 'Ivo Andrić' },
      ],
      columns: [
        { name: 'id', label: 'ID', required: true, align: 'left' },
        { name: 'title', label: 'Naslov', required: true, align: 'left' },
        { name: 'author', label: 'Autor', required: true, align: 'left' },
      ],
    };
  },
};
</script>
