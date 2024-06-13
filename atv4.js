console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
for (var x = 0; x < 3; x++) {
    minhaMatriz[x] = new Array(3);
    for (var y = 0; y < 4; y++) {
        var nome = teclado("Digite os numeros no [".concat(x, ", ").concat(y, "]"));
        minhaMatriz[x][y] = nome;
    }
}
console.log(minhaMatriz);
