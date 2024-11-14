<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h5">Pretraživanje knjiga</div>
      </q-card-section>
      <q-card-section>
        <!-- Pretraživanje -->
        <q-input
          v-model="searchQuery"
          label="Pretraži po naslovu ili autoru"
          outlined
          debounce="300"
        />
        <div>
          <q-checkbox
            v-model="searchByAuthor"
            label="Pretraži po autoru"
          />
          <q-checkbox
            v-model="searchByTitle"
            label="Pretraži po naslovu"
          />
        </div>
        <q-btn label="Traži" @click="searchBooks" color="primary" />
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="filteredBooks"
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
      searchQuery: '',
      searchByAuthor: false,
      searchByTitle: true,
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
  computed: {
    filteredBooks() {
      return this.allBooks.filter(book => {
        if (this.searchByAuthor && this.searchByTitle) {
          return (
            book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        } else if (this.searchByAuthor) {
          return book.author.toLowerCase().includes(this.searchQuery.toLowerCase());
        } else if (this.searchByTitle) {
          return book.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        }
        return false;
      });
    },
  },
  methods: {
    searchBooks() {
      console.log('Pretraženi podaci:', this.searchQuery);
    },
  },
};
</script>

