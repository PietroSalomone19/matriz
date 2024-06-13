console.clear();
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var l = 0; l <= linha; l++) {
    minhaMatriz[l] = [];
    for (var c = 0; c <= coluna; c++) {
        minhaMatriz[l][c] = Math.floor(Math.random() * 10);
    }
}
console.log(minhaMatriz);
