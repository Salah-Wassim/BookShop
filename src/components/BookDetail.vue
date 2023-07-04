<template>
    <div class="card">
        <div class="card-header">
            Detail
        </div>
        <div class="card-body" >
            <h3>Titre du livre : {{title}}</h3>
            <p><b>Prix</b>: {{price}} euros</p>
            <p><b>Description</b>: {{description}}</p>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            title: {
                required: true,
                type: String,
            },
            price: {
                required: true,
                type: Number,
            },
            description: {
                required: false,
                type: String
            }
        },
    }
</script>