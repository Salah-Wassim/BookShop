<template>
    <div v-bind:style="hiddenDetail">
        <p>{{selectedBook.title}}</p>
    </div>
    <div v-if="selectedBook" v-bind:style="displayDetail">
        <p>{{selectedBook.title}}</p>
        <p>{{selectedBook.price}}</p>
        <p>{{selectedBook.description}}</p>
    </div>
</template>

<script>
    export default{
        props:['book'],
        data(){
            return{
                selectedBook: null,
                hiddenDetail: {
                  display: "none"
                },
                displayDetail: {
                  border: "solid 1px #000"
                },
            }
        }
    }
</script>