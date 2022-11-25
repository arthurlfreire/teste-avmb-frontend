/*
Task #1 - Pares e ímpares:
Deve ser criada uma função javascript que receba um argumento N, que sempre será um
array de números.
A função deve retornar a quantidade de números ímpares dentro do array.
Exemplo:
Argumentos recebidos:
N: [1,2,1,3]
Retorno:
3
*/

function retornarNumeroDeImpares(lista){

    let contador = 0;
    
    lista.forEach(numero => {
        if(numero % 2 !== 0){
            contador++;
        }
    })
    
    return contador; 
}

