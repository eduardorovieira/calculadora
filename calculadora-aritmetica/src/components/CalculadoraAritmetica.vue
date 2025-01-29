<template>
  <div class="calculadora-aritmetica">
    <h1>Calculadora Aritmética</h1>
    <div class="inputs">
      <input type="number" v-model="numero1" placeholder="Número 1" />
      <select v-model="operacao">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" v-model="numero2" placeholder="Número 2" />
    </div>
    <div class="resultado">
      <h2>Resultado: {{ resultado }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculadoraAritmetica", // Nome do componente seguindo a convenção multi-palavra
  data() {
    return {
      numero1: 0,
      numero2: 0,
      operacao: "+",
    };
  },
  computed: {
    resultado() {
      const num1 = parseFloat(this.numero1);
      const num2 = parseFloat(this.numero2);

      switch (this.operacao) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
        default:
          return 0;
      }
    },
  },
};
</script>

<style scoped>
.calculadora-aritmetica {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.inputs {
  margin-bottom: 20px;
}

input,
select {
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.resultado {
  font-size: 20px;
  color: #333;
}
</style>