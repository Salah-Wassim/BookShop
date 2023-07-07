<template>
    <div class="card">
        <div class="card-body" >
            <div class="card-header">
                <div class="detail-title">Detail</div> 
                <button @click="$emit('close')" class="close-button">Fermer</button>
            </div>
            <p><b>Titre du livre</b> : {{book.title}}</p>
            <p><b>Prix</b>: {{book.price}} euros</p>
            <p><b>Description</b>: {{book.description}}</p>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            book: {
                required: true,
            },
        },
    }
</script>

<style scoped>
    .card {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-body {
        background-color: white;
        padding: 20px;
        width: 60%;
        border-radius: 15px;
        margin: 20%;
        margin-right: -13%;
    }
    .card-header{
        display: flex;
        justify-content:space-between
    }
    .detail-title{
        padding-left: 40%;
        font-weight: bold;
        font-size:20px
    }
    .close-button{
        background-color: red;
        color: white;
        border: none;
    }
</style>