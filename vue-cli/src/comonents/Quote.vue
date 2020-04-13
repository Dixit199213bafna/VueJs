<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel pane-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
  .panel-body{
    font-size: 24px;
    color: red;
  }
  .quote {
    cursor: pointer;
  }
  .quote:hover {
    background: blue;
  }

</style>
