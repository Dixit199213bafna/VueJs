<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Stock Trade</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/" active-class="nav-item active"><a class="nav-link">Home</a></router-link>
        <router-link tag="li" to="/portfolio" active-class="nav-item active"><a class="nav-link">Portfolio</a></router-link>
        <router-link tag="li" to="/stocks" active-class="nav-item active"><a class="nav-link">Stocks</a></router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds | currency}}</strong>
      <form class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" @click="endDay">End Day</a>
          </li>
          <li class="nav-item dropdown pointer">
            <a class="nav-link dropdown-toggle" @click="isDropDownOpen = !isDropDownOpen" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Save & load
            </a>
            <ul class="dropdown-menu" :class="{displayblock : isDropDownOpen}">
              <li><a class="dropdown-item" @click="saveData">Save Data</a></li>
              <li><a class="dropdown-item" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </form>
    </div>
  </nav>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      isDropDownOpen: false
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay () {
      this.randomizeStocks()
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortFolio: this.$store.getters.stockPortFolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data)
    },
    loadData () {
      this.fetchData()
    }
  }
}
</script>
<style>
  .pointer {
    cursor: pointer;
  }
  .displayblock {
    cursor: pointer;
    display: block;
  }
</style>
