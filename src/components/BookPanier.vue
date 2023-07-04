<template>
    <div class="container">
        <div class="row">
            <div class="card">
                <div class="card-header">
                    Votre panier
                </div>
                <ul class="list-unstyled">
                    <li class="mb-3" v-for="cartItem in cart" :key="cartItem.id" >
                        <PanierItem
                          :cartItem="cartItem"
                          @delete = "deleteCartItem($event)"
                        ></PanierItem>
                    </li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header">
                    Récapitulatif de votre panier
                </div>
                <div class="card-body">
                    <p>Sous-total {} : {}</p>
                </div>
                <div class="card-footer">
                    <button>Passer la commande</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PanierItem from '../components/PanierItem.vue'
    export default{
        components: {PanierItem},
        data() {
            return {
                prices: [], 
            }
        },
        methods:{
            sumPrices(){
                let totalCart = 0
                this.cart.forEach(book => {
                  this.prices.push(
                      book.price
                  )
                  for(let i = 0; i<this.prices.length; i++){
                      totalCart += this.prices[i];
                  }
                  return totalCart;
              });
            }
        },
        computed:{
            nbArticles(){},
            totalPrice(){}
        }
    }
</script>

<style scoped>

</style>
