<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'stocks'
    ])
  },
  components: {
    appStock: Stock
  }
}
</script>
