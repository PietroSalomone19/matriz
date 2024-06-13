/* 8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra. */
console.clear();
var minhaMatriz = [];
var linha = 5;
var coluna = 5;
for (var l = 0; l <= linha; l++) {
    minhaMatriz[l] = [];
    for (var c = 0; c <= coluna; c++) {
        minhaMatriz[l][c] = Math.floor(Math.random() * 21);
    }
}
console.log(minhaMatriz);
var maior = minhaMatriz[0][0];
var posicao = [0, 0];
for (var l = 0; l < linha; l++) {
    for (var c = 0; c < coluna; c++) {
        if (minhaMatriz[l][c] > maior) {
            maior = minhaMatriz[l][c];
            posicao = [l, c];
        }
    }
}
for (var l = 0; l < linha; l++) {
    for (var c = 0; c < coluna; c++) {
        if (minhaMatriz[l][c] > maior) {
            minhaMatriz[l][c] = maior;
            posicao[1] = l;
            posicao[0] = c;
        }
    }
}
console.log("O maior elemento da matriz \u00E9: ".concat(maior, " e se encontra na posi\u00E7\u00E3o [").concat(posicao[0], ", ").concat(posicao[1], "]"));
console.log(minhaMatriz);
