console.clear();

let teclado = require (`prompt-sync`)();
let minhaMatriz: number [][] = [];

for (let x =0; x < 3; x++ ){
    minhaMatriz[x] = new Array(3);
    for(let y = 0; y < 4; y++){
        let nome: number = teclado(`Digite os numeros no [${x}, ${y}]`);
        minhaMatriz[x][y] = nome;
    }
}
console.log(minhaMatriz);