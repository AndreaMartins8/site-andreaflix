function CarregarFilmes(){
    //array
    let filmes = ["imagens/brilhoeterno.jpg" , "imagens/interestelar.jpg" , "imagens/vingadores.jpg" , "imagens/blackmirror.jpg" , "imagens/babydriver.jpg" , "imagens/galaxy.jpg"]

    //laço de repetição
    for(let i = 0 ; i < 6 ; i = i +1){
        document.querySelector(".lista-filmes").innerHTML += "<img src="+ filmes [i] + ">"
    }
  
}