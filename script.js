//Map de chaves de criptografia
chaves = new Map([
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]);

//função criptografar texto (recebe como parâmetros o texto para criptografar, e o Map de chaves de criptografia)
function criptografarTexto(texto, listaChaves) {
    textoSplitado = texto.split("");
    return textoSplitado.map((letra) => {
        //console.log(listaChaves.keys());
        for(let l of listaChaves.keys()){
            if(letra === l){
                return listaChaves.get(l);
            }
        }
        return letra;
    }).join("");
}

cript = criptografarTexto("teste um dois tres", chaves);
console.log(cript); // TESTE

//função descriptografar texto (recebe como parâmetros o texto para descriptografar, e o Map de chaves de criptografia)
function descriptografarTexto(texto, listaChaves) {
    for(let [l,valor] of listaChaves.entries()) {
        texto = texto.replaceAll(valor, l);
    }
    return texto;
}

cript = descriptografarTexto("tenterstenter ufatm doberimess trenters", chaves);
console.log(cript); // TESTE