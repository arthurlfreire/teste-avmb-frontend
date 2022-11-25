/*
Task #4 - Consumo de API:
Deve ser criada uma conta no site https://developer.marvel.com/ para a utilização da API
pública de heróis.
Deve ser criada uma função que consuma a API, realizando a autenticação conforme a
conta criada, seguindo o manual disponibilizado pelo site, listando todos os heróis a partir
do endpoint “v1/public/characters”.
*/

import fetch from "node-fetch";
import md5 from "md5";
import "dotenv/config";

export default async function buscarPersonagens(){

    const timestamp = Math.floor(Date.now() / 1000);
    const hash = md5(timestamp.toString() + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY);
    const marvelUrl = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&hash=${hash}&apikey=${process.env.MARVEL_PUBLIC_KEY}`;

    try{
        const dadosBrutosPersonagens = await fetch(marvelUrl);
        const personagensEmJson = await dadosBrutosPersonagens.json();
        const personagensTratados = await personagensEmJson.data.results;
        return personagensTratados;
    }
    catch(err){
        throw new Error(err);
    }

};
