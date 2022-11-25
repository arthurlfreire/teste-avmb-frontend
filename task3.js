/*
Task #3 - Chaves e Valores:
Deve ser criada uma função javascript que receba dois argumentos, C (String) e V.
A função deve retornar um objeto em formato JSON com esses argumentos, a variável C
será a chave e a variável V será o valor desta chave.
Exemplo:
Argumentos recebidos:
C: “age”
V: 28
Retorno: { “age”: 28 }
*/

function retornarChaveEValor(chave, valor){
    const objeto = {};
    objeto[chave] = valor;

    return objeto;
};
