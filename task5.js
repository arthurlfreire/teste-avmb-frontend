/*
Task #5 - Arquivos:
Deve ser criada uma função que, através do retorno da task #4, crie uma pasta, na raíz do
projeto, chamada “Characters”.
Dentro dessa pasta, a função deve criar um arquivo para cada herói encontrado,
contendo os detalhes retornados pela API, como nome, id, descrição e data de modificação.
O arquivo deve ser criado em formato JSON.
*/
import buscarPersonagens from "./task4.js";
import fs from "fs";
import path from "path";

async function criarPastaPersonagens(){
    try{
        const personagens = await buscarPersonagens();
        fs.mkdirSync(path.join(process.cwd(), 'Characters'));
        console.log(personagens.length)
        personagens.forEach(personagem => {
            const conteudoArquivo = JSON.stringify({
                id: personagem.id,
                nome: personagem.name,
                descricao: personagem.description,
                modificado: personagem.modified
            });

            fs.writeFileSync(path.join(process.cwd(), '/Characters', `${personagem.name}.json`), conteudoArquivo)
        });
    }
    catch(err){
        throw new Error(err);
    }
};
