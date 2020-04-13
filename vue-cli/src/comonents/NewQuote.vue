<template>
  <div class="row">
    <form>
      <div class="col-lg-8 col-sm-offset-2 form-group">
        <label>Quote</label>
        <textarea class="form-control" v-model="quote"></textarea>
      </div>
      <div class="col-lg-8 col-sm-offset-2 form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Create New</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        quote: '',
      }
    },
    methods: {
      createNew() {
        this.$emit('createNew', this.quote);
      }
    }
  }
</script>
<style></style>
