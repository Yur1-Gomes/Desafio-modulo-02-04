function helloWorld(){
    console.log("Olá mundo!");
}
helloWorld()

function exibirNome(nome){
    console.log(`Meu nome é ${nome}.`);
}
exibirNome(`Yuri`);

function dados(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e gosto de ${estiloMusical}.`);
}
dados(`Yuri`, `29`, `música eletrônica`);

function preferencias(filmeFavorito, musicaFavorita){
    console.log(`Meu filme favorito é ${filmeFavorito} e minha música favorita é ${musicaFavorita}.`);
}
preferencias(`De volta para o futuro`, `Luv(sic)`);

function triplo(n){
    return n*3;
}
console.log(triplo(3));