/* 8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra. */

console.clear();

let minhaMatriz: number [][] = []; 

let linha: number = 5; 
let coluna: number = 5; 
 
for (let l = 0; l <= linha; l++) {  
    minhaMatriz[l] = [];  
    for (let c=0; c <= coluna ; c++) {  
        minhaMatriz[l][c] = Math.floor(Math.random() * 21);  
    }  
}  

console.log(minhaMatriz);

let maior: number = minhaMatriz[0][0];
let posicao: number[] = [0, 0];

for (let l = 0; l < linha; l++) {
  for (let c = 0; c < coluna; c++) {
    if (minhaMatriz[l][c] > maior) {
      maior = minhaMatriz[l][c];
      posicao = [l, c];
    }
  }
}

for (let l = 0; l < linha; l++) {
  for (let c = 0; c < coluna; c++) {
    if (minhaMatriz[l][c] > maior) {
      minhaMatriz[l][c] = maior;
      posicao[1] = l;
      posicao[0] = c;
    }
  }
}
console.log(`O maior elemento da matriz é: ${maior} e se encontra na posição [${posicao[0]}, ${posicao[1]}]`);
console.log(minhaMatriz);