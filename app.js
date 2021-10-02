function CarregarFilmes(){

    let filmes = ["imagens/brilhoeterno.jpg" , "imagens/interestelar.jpg" , "imagens/vingadores.jpg" , "imagens/blackmirror.jpg" , "imagens/babydriver.jpg" , "imagens/galaxy.jpg"]

    //laço de repetição
    for(let controle = 0 ; controle < 6 ; controle = controle +1){
        document.querySelector(".lista-filmes").innerHTML += "<img src="+ filmes [controle] + ">"
    }
  
}