/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var i = 0; i <= linha; i++) {
    minhaMatriz[i] = [];
    for (var x = 0; x <= coluna; x++) {
        var numero = parseFloat(teclado("Digite o n\u00FAmero que vai estar no endereco [".concat(i, ", ").concat(x, "] da matriz: ")));
        if (numero >= 0 && numero <= 9) {
            minhaMatriz[i][x] = numero;
        }
        else {
            x--;
        }
    }
}
console.log(minhaMatriz);
