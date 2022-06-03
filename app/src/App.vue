<script>
import CatGenerator from './components/CatGenerator.vue';
export default {
  components: {
    CatGenerator
  }
}

</script>

<template>
  <CatGenerator />
</template>

<style>
/* b9c535 */
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
      max-height: 100vh;
    min-height: 100vh;
    box-sizing: border-box;
}
.btn-primary {
  background-color: #5d8f00;
  border-color: #4a720079;
}
.btn-primary:hover {
  background-color: #679f00;
  border-color: #4a720079;
}
.btn-primary:focus {
  background-color: #679f00;
  border-color: #4a720079;
  box-shadow: 0 0 0 0.25rem rgba(161, 253, 49, 0.5) !important;
}
</style>
