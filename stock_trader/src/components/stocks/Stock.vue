<template>
 <div class="col-sm-5 col-md-4">
     <div class="card">
       <div class="card-body">
         <h5 class="card-title">{{stock.name}} <small>(Price: {{stock.price | currency}})</small></h5>
         <div class="card-text">
           <div class="pull-left">
             <input class="form-control" type="number" placeholder="Quantity" v-model="quantity"/>
           </div>
           <div class="pull-right">
             <button class="btn btn-primary" @click="buyStock" :disabled="insufficientFunds || quantity <= 0">{{ insufficientFunds ? 'Insufficient Funds' : 'BUY'}}</button>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0,
      funds: this.$store.getters.funds
    }
  },
  computed: {
    insufficientFunds () {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStocks', order)
      this.quantity = 0
    }
  }
}
</script>
