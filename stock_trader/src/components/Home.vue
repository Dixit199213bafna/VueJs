<template>
  <div class="hello">
    <h1>Tarde or view your portfolio</h1>
    <h6>You may save and load your Data</h6>
    <h6>Click on Day End to begin new day</h6>
    <hr/>
    <p>Your funds {{ funds }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      funds: this.$store.getters.funds
    }
  }
}
</script>
