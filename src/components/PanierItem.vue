<template>
    <div class="">
        <div class="card-body col">
            <img :src="cartItem.picture">
        </div>
        <div class="card-body col">
            <div class="card-right">
                <h5>{{cartItem.title}}</h5>
                <p>{{cartItem.price}}</p>
            </div>
            <div class="card-right">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Quantité</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button class="btn btn-danger" @click="$emit('delete', cartItem.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['cartItem']
    }
</script>

<style>
    .btn{
        margin-top:5px;
        margin-left:5px;
    }
    .form-select {
        
    }
</style>
