const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  rules: {
    'vue/multi-word-component-names': 'off', // Desabilita a regra
  },
};