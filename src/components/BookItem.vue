<template>
    <div class="card" style="width: 18rem;">
        <img :src="book.picture" class="card-img-top" alt="livre VueJS">
        <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{book.price}} euros</p>
        </div>
        <!-- <button class="btn btn-primary" @click="$emit('edit',book.id)">Edit</button>
        <button class="btn btn-danger" @click="$emit('delete')">Delete</button> -->
        <div class="card-footer d-flex justify-content-between p-2">
            <button class="btn btn-primary" id="btn-detail" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" @click="$emit('detail', book)">Detail</button>
            <button class="btn btn-primary" @click="$emit('addCart', book)">Ajouter au panier</button>
        </div>
    </div>
</template>

<script>
export default {
    props:['book'],
    emits: ['delete','edit','detail', 'addCart'],
}
</script>

<style scoped>
    #btn-detail{
        margin-left:0;
    }
</style>
    