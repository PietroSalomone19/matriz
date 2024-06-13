console.clear();
let minhaMatriz: number [][] = []; 

let linha: number = 2; 
let coluna: number = 2; 
 
for (let l = 0; l <= linha; l++) {  
    minhaMatriz[l] = [];  
    for (let c=0; c <= coluna ; c++) {  
        minhaMatriz[l][c] = Math.floor(Math.random() * 10);  
    }  
}  
console.log(minhaMatriz); 