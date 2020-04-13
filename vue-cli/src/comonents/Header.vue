<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="10"
        :style="{ width: (quoteCount / maxQuotes) * 100+'%'}">{{quoteCount}}/{{maxQuotes}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['quoteCount', 'maxQuotes']
  }
</script>
