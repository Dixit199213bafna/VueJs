<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
  </div>
</template>

<script>
import Stock from './PortFolio_Stock'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortFolio'
    })
  },
  components: {
    appStock: Stock
  }
}
</script>
