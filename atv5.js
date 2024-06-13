console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var i = 0; i <= linha; i++) {
    minhaMatriz[i] = [];
    for (var x = 0; x <= coluna; x++) {
        var resultado = teclado("Digite o n\u00FAmero que vai estar no endereco [".concat(i, ", ").concat(x, "] da matriz: "));
        minhaMatriz[i][x] = resultado;
    }
}
console.log(minhaMatriz);
