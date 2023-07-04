<template class="container">
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/"><b>E-Shop</b></a>
        <div class="navbar">
            <li class="nav-item dropdown d-flex">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Categories</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Livre</a></li>
                  <li><a class="dropdown-item" href="#">Vélo</a></li>
                  <li><a class="dropdown-item" href="#">High Tech</a></li>
                </ul>
            </li>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        <ul class="nav justify-content-end align-items-center">
            <li class="nav-item cart-bg">
                <span class="badge bg-danger">{{nbProductCart}}</span>
                <a class="nav-link" id="cart-link" href="/panier">Panier</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/connection">Se connecter</a>
            </li>
        </ul>
    </div>
  </nav>

  <div class="card">
    <div class="card-header">
      Votre panier
    </div>
    <ul class="list-unstyled">
      <li class="mb-3" v-for="cartItem in cart" 
        :key="cartItem.id" >
    <PanierItem
      :cartItem="cartItem"
      @delete = "deleteCartItem($event)"
    ></PanierItem>
      </li>
      </ul>
  </div>

  <!-- <BookPanier></BookPanier> -->

  <div class="books-list p-3">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"><b>Filtres</b></a>
        <li class="nav-item dropdown d-flex">
          <select v-model="priceFiltred" @change = "filterPrice($event)" class="form-select form-select-sm">
            <option selected :value="null">Tous les prix</option>
            <option :value="15">15 EUR</option>
            <option :value="20">20 EUR</option>
            <option :value="30">30 EUR</option>
          </select>
        </li>
      </div>
    </nav>
    <h2 class="mb-4">Résultats : {{nbPublishBook}} livres</h2>
    <ul class="list-unstyled">
      <li class="mb-3" v-for="(book, index) in books" 
        :key="book.id" >
          <BookItem 
            :book = book
            @delete = "books.splice(index, 1)"
            @edit="editBook($event)"
            @detail="showBookDetail($event)"
            @addCart="addCart($event)"
          ></BookItem>
        </li>
    </ul>
  </div>

  <BookDetail v-if="selectedBook"
    :title="selectedBook.title"
    :price="selectedBook.price"
    :description="selectedBook.description"
  ></BookDetail>

  <!-- <BookForm ref="BookForm" :books="books"></BookForm> -->
  <Footer></Footer>
</template>

<script>
import Panier from './components/BookPanier.vue';
import BookItem from './components/BookItem.vue';
import BookForm from './components/BookForm.vue';
import BookDetail from './components/BookDetail.vue'
import PanierItem from './components/PanierItem.vue';
import BookPanier from './components/BookPanier.vue';
import Footer from './components/Footer.vue'

const routes = {
  '/panier': Panier
}

const dataBooks = [
      	{
          id: 1,
          title: 'Vue1 - Advanced guide',
          price: 20,
          description : 'Guide pour VueJS version 1',
          picture: 'https://m.media-amazon.com/images/I/71cAxHvrWBS._AC_UY218_.jpg',
        },
      	{
          id: 2,
        	title: 'Vue2 - Basic Guide',
          price: 30,
          description : 'Guide pour VueJS version 2',
          picture: 'https://m.media-amazon.com/images/I/71cAxHvrWBS._AC_UY218_.jpg',
        },
      	{
          id: 3,
          title: 'Vue3 - The mystery',
          price: 15,
          description : 'Guide pour VueJS version 3',
          picture: 'https://m.media-amazon.com/images/I/71cAxHvrWBS._AC_UY218_.jpg',
        },
      ];

export default{
  components: {BookItem, BookForm, BookDetail, PanierItem, BookPanier, Footer},
  data(){
    return {
      author: {name:'John Doe'},
      selectedBook: null,
      cart: [],
      price: [],
      priceFiltred: null,
      books: [...dataBooks] 
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
    },
    addCart(book){
      if(book){
        this.cart.push(
          book
        )
      }
      else{
        throw new Error('Oups une erreur c\'est produite');
      }
    },
    deleteCartItem(bookId) {
      this.cart = this.cart.filter(cartItem => cartItem.id !== bookId);
    },
    filterPrice(){
      if(this.priceFiltred && this.priceFiltred !== null){
        this.books = dataBooks.filter(book => book.price == this.priceFiltred);
      }
      else{
        this.books = dataBooks;
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
    },
    nbProductCart(){
      return this.cart && Array.isArray(this.cart) ? this.cart.length : 0;
    },
  },
};
</script>

<style>
.cart-bg{
  display:flex;
  flex-direction: row-reverse;
  align-items: center;
}
#cart-link{
  padding-right:6px;
}
.nav-item > .nav-link{
  color: #FFF;
}
.fa-basket-shopping{
  color: #FFF;
}
.fa-regular{
  background-color: #FFF;
}
.fa-basket-shopping{
  width:50px
}

</style>