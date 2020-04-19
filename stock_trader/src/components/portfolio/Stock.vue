<template>
  <div class="col-sm-5 col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{stock.name}} <small>(Price: {{stock.price | currency}} | Quantity: {{ stock.quantity }})</small></h5>
        <div class="card-text">
          <div class="pull-left">
            <input class="form-control" type="number" placeholder="Quantity" v-model="quantity"/>
          </div>
          <div class="pull-right">
            <button class="btn btn-primary" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0">{{ insufficientQuantity ? 'Not Enough Stocks' : 'Sell'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
  data () {
    return {
      quantity: this.stock.quantity
    }
  },
  computed: {
    insufficientQuantity () {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSellOrder(order)
      this.quantity = 0
    }
  }
}
</script>
