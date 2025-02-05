var palavra = document.getElementById('txtresposta');
var emoji = document.getElementById('second');
var msg = document.getElementById('dizer');
var fundo = document.getElementById('fundo');

function reacao() {
    if (["pizza", "lasanha", "sorvete", "chocolate", "pudim", "strogonoff", "hamburguer", "lanche", "macarronada", "feijoada", "calabresa", "parmegiana"].includes(palavra.value.toLowerCase())) {
        emoji.innerHTML = "&#x1F60B";
        msg.innerHTML = "Hmmmmm... que Delicia !!!";
        fundo.style.backgroundImage = "url('./assets/delicia.jpg')";

    } else if (["cerveja", "churrasco", "festa", "role", "barzinho", "bar", "karaoke", "sair"].includes(palavra.value.toLowerCase())) {
        emoji.innerHTML = "&#x1F973";
        msg.innerHTML = "Oba oba, bão demais !!!";
        fundo.style.backgroundImage = "url('./assets/festa.jpg')";

    } else if (["amor", "romantico", "namorar", "beijo", "beijar", "namoro", "carinho"].includes(palavra.value.toLowerCase())) {
        emoji.innerHTML = "&#x1F970";
        msg.innerHTML = "É o amor, que mexe com minha cabeça";
        fundo.style.backgroundImage = "url('./assets/amor.jpg')";

    } else if (["sexo", "caricias", "apalpar", "ficar", "trepar"].includes(palavra.value.toLowerCase())) {
        emoji.innerHTML = "&#x1F60F";
        msg.innerHTML = "Hmmmm... vem ni mim";
        fundo.style.backgroundImage = "url('./assets/caricia.jpg')";

    } else if (["gato", "gatinho", "cachorro", "cachorrinho", "bichinho"].includes(palavra.value.toLowerCase())) {
        emoji.innerHTML = "&#x1F917";
        msg.innerHTML = "Que fofinho !!!";
        fundo.style.backgroundImage = "url('./assets/fofinho.jpg')";

    } else if (["piada", "standup", "comedia", "cair", "engraçado", "rir", "rindo", "sarro"].includes(palavra.value.toLowerCase())) {
        emoji.innerHTML = "&#x1F923";
        msg.innerHTML = "kkkkkkkkkkkkk, isso me faz rir muito !!!";
        fundo.style.backgroundImage = "url('./assets/piada.jpg')";

    } else if (["luto", "morte", "morrer", "perda", "esquecer", "separação", "separar", "término", "terminar"].includes(palavra.value.toLowerCase())) {
        emoji.innerHTML = "&#x1F622";
        msg.innerHTML = "Isso dói, não gosto nem de pensar";
        fundo.style.backgroundImage = "url('./assets/luto.jpg')";

    } else if (["sentimento","sentimentos","sentido","triste","tristeza","choro","chorar","chora"].includes(palavra.value.toLowerCase())) {
        emoji.innerHTML = "&#x1F62D";
        msg.innerHTML = "Sento e choro !!!";
        fundo.style.backgroundImage = "url('./assets/triste.jpg')";

    } else if (["boleto", "boletos", "contas", "conta", "despesa", "gasto", "gastos", "despesas", "brigar"].includes(palavra.value.toLowerCase())) {
        emoji.innerHTML = "&#x1F621";
        msg.innerHTML = "Vish !!! ai não dá, assim não aguento";
        fundo.style.backgroundImage = "url('./assets/boleto.jpg')";

    } else {
        emoji.innerHTML = "&#x1FAE4";
        msg.innerHTML = "Hummmm, sobre isso não sei o que dizer !!!";
        fundo.style.backgroundImage = "url('./assets/home.jpg')";
    }
}

function limpar() {
    emoji.innerHTML = "&#x1F610";
    palavra.value = "";
    msg.innerHTML = "";
    fundo.style.backgroundImage = "url('./assets/home.jpg')";
}



