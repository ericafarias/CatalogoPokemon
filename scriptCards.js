function alterarNome(card, nome) {
    const img = card.querySelector("img");
    img.src = `assets/evolution/${nome}.png`;
}

function restaurarNome(card, nome) {
    const img = card.querySelector("img");
    img.src = `assets/${nome}.png`;
}

function alterarSpan(card, conteudo) {
    const span = card.querySelector("span");
    span.innerHTML = `${conteudo}`;
}

function restaurarSpan(card, conteudo) {
    const span = card.querySelector("span");
    span.innerHTML = `${conteudo}`;
}

function executarFuncaoSpan(funcao1, funcao2) {
    restaurarNome(card, nome);
    restaurarSpan(card, conteudo);
}
