/*
Task #2 - Palíndromo:
Deve ser criada uma função javascript que receba um argumento A, que sempre será uma
String.
A função deve verificar se o argumento A é um palíndromo, retornando TRUE, caso seja.
Se não for, deve retornar FALSE.
"Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para
frente.”
Exemplo:
Argumentos recebidos:
A: “arara”
Retorno:
TRUE
*/

function ePalindromo(string){
    const stringReversa = string.split('').reverse().join('');

    return string === stringReversa ? true : false;
};