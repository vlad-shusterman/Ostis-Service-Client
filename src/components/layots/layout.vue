<template>
    <div class="layout">
      <slot/>
    </div>
</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style scoped>
.layout {
  padding-top: 60px;
  height: 100vh;
  background-color: #effffc;
}
</style>
