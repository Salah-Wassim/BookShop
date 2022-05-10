<template>
  <p>published books : {{nbPublishBook}}</p>
  <div class="books-list">
    <h2>Liste des livres publiés</h2>
    <ul>
      <BookItem v-for="(book, index) in books" 
        :key="book.id" 
        :book = book
        @delete = "books.splice(index, 1)"
        @edit="editBook($event)"
        @detail="showBookDetail($event)"
      ></BookItem>
    </ul>
  </div>
  <!-- mettre un style sur la div -->
  <div v-if="selectedBook" class="detail-window">
    <h3>Detail du livre : {{selectedBook.title}}</h3>
    <p><b>Prix</b>: {{selectedBook.price}} euros</p>
    <p><b>Description</b>: {{selectedBook.description}}</p>
  </div>
  <!-- <BookDetail></BookDetail> -->
  <BookForm ref="BookForm" :books="books"></BookForm>
</template>

<script>
import BookItem from './components/BookItem.vue';
import BookForm from './components/BookForm.vue';
// import BookDetail from './components/BookDetail.vue'
  
export default{
  components: {BookItem, BookForm},
  data(){
    return {
      author: {name:'John Doe'},
      selectedBook: null,
      books: [
      	{
          id: 1,
          title: 'Vue1 - Advanced guide',
          price: 20,
          description : 'Guide pour VueJS version 1'
        },
      	{
          id: 2,
        	title: 'Vue2 - Basic Guide',
          price: 30,
          description : 'Guide pour VueJS version 2'
        },
      	{
          id: 3,
          title: 'Vue3 - The mystery',
          price: 15,
          description : 'Guide pour VueJS version 3'
        },
      ],
    }
  },
  methods: {
    editBook(bookId) {
      this.$refs['BookForm'].hydrateForm(bookId);
    },
    showBookDetail(book) {
      if(this.selectedBook && book.id === this.selectedBook.id){
        this.selectedBook = null;
      }
      else{
        this.selectedBook = book;
      }
    }
  },
  computed: {
    publishBook() {
      return this.books.length > 0 ? 'Yes' : 'No';
    },
    nbPublishBook(){
      const arr = this.books.length;
      if(this.publishBook){
        return arr;
      }
      return false;
    }
  }
};
</script>

<style>
.detail-window{
  border: "solid 1px #000"
}
</style>