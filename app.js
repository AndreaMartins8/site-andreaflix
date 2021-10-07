 //array --> variável com subdivisões (índices)
    let filmes = ["imagens/brilhoeterno.jpg", "imagens/interestelar.jpg", "imagens/vingadores.jpg", "imagens/babydriver.jpg" , "imagens/galaxy.jpg" ]
//refaturação -->melhorar um código existente
function CarregarFilmes(){ 
    let totalFilmes = filmes.length
    let divListaFilmes = document.querySelector(".lista-filmes")

    divListaFilmes.innerHTML = ""
    //laço de repetição
    for (let i = 0; i < totalFilmes; i++) {
        divListaFilmes.innerHTML += "<img src=" + filmes[i] + ">"
    }
}

function AdicionarFilme() {
    let nomeFilme = document.querySelector("#nome-do-filme").value
    let caminhoCompleto = "imagens/" + nomeFilme

    filmes.push(caminhoCompleto)
    CarregarFilmes()

    console.table(filmes)
}