<template>
  <div id="app">
    <CalculadoraAritmetica />
  </div>
</template>

<script>
import CalculadoraAritmetica from "./components/CalculadoraAritmetica.vue";

export default {
  components: {
    CalculadoraAritmetica,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>