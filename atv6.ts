/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
*/
console.clear();

let teclado = require (`prompt-sync`)();
let minhaMatriz: number [][] = [];
let linha: number = 2;
let coluna: number = 2; 

for (let i = 0; i<= linha; i++) {  

    minhaMatriz[i] = [];  
    for (let x=0; x <= coluna ; x++) {  
        let numero: number = parseFloat(teclado(`Digite o número que vai estar no endereco [${i}, ${x}] da matriz: `));  
        
        if (numero>=0 && numero<=9){
            minhaMatriz[i] [x] = numero;  
        }
        else{
            x--;
        }
    }  
}
console.log(minhaMatriz); 