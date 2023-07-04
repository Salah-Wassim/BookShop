<template>
  <h2>Formulaire {{formTitle}} </h2>
  <div class="row justify-content-start">
    	<form class="col-5 m-3" @submit.prevent="submitBook">
        <div class="mb-3">
          <label for="title" class="form-label">{{titleLabel}}</label>
          <input type="text" class="form-control" v-model="bookTitle"><br>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">{{priceLabel}}</label>
          <input type="text" class="form-control" v-model="bookPrice"><br>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">{{descriptionLabel}}</label>
          <input type="text" class="form-control" v-model="bookDescription"><br>
        </div>
        <button type="submit">{{btnLabel}}</button><br>
        <span v-html="msgError"></span>
    </form>
  </div>

</template>

<script>
export default {
    props: ['books'],
    data(){
  	    return{
            nextBookId: 4,
  	        bookTitle: "",
            bookPrice: "",
            bookDescription: "",
            msgError: "",
            createMode: true,
            idSelected: "",
  	    }
	},
    methods: {
  	    hydrateForm(bookId) {
  	        this.createMode = false;
            const book = this.books.find(book => book.id === bookId);
            if (!book) {
                this.msgError = "Livre introuvable";
            } else {
                this.idSelected = bookId;
  	            this.bookTitle = book.title;
                this.bookPrice = book.price;
                this.bookDescription = book.description
            }
  	    },
        submitBook(){
        if(this.vField()){
            if(this.createMode){ 
            this.createMode = true;
            this.books.push({
                id: this.nextBookId++,
                title: this.bookTitle,
                price: this.bookPrice,
                description: this.bookDescription,
            });
            this.bookTitle = "";
            this.bookPrice = "";
            this.bookDescription = "";
            return false;
            }
            else if(!this.createMode){
                if(this.bookTitle !== undefined){
                    this.books.splice(this.idSelected, 1, this.bookTitle)
                    this.bookTitle = "";
                    this.bookPrice = "";
                    this.bookDescription = "";
                    this.idSelected = "";
                    this.createMode = true;
                    return false;
                }
                return false;
            }
            return this.msgError = "Oups une erreur c'est produite";
        }
        return false;
        },
        vField() {
            //Contrôle valeurs obligatoires
            if(this.bookTitle == "" || this.bookPrice == "" || this.bookDescription == ""){
                this.msgError = "Veuillez remplir tous les champs s'il vous plait";
                return false;
            }
            //Contrôle doublon livre
            const duplicatedBook = this.books.find(book => book.title === this.bookTitle && (!this.idSelected || book.id !== this.idSelected));
            if (duplicatedBook) {
                console.log(this.idSelected)
                this.msgError = "Ce titre de livre existe déjà dans la liste";
                return false;
            }
            this.msgError = "";
            return true;
	    }
    },
    computed: {
        btnLabel() {
            if (this.createMode) {
              return "ajouter"
            } else {
              return "editer"
            }
        },
        formTitle() {
            if(this.createMode){
              return " d'ajout";
            }else{
              return "d'édition";
            }
        },
        titleLabel(){
            if(this.createMode){
              return "Ajoutez un titre de livre "
            }else{
              return "Editez un titre de livre "
            }
        },
        priceLabel(){
            if(this.createMode){
              return "Ajoutez un prix "
            }else{
              return "Editez un prix "
            }
        },
        descriptionLabel(){
            if(this.createMode){
              return "Ajoutez une description "
            }else{
              return "Editez une description "
            }
        },
    }
}
</script>