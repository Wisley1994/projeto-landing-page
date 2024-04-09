var setaDireita = window.document.getElementById("seta-direita")
var setaparaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo") 
var samantha = window.document.getElementById("samantha") 
var bruna = window.document.getElementById ("bruna") 

function RolarParaDireita() {
    leonardo.style = "display:none" 
    bruna.style = "display:flex" 
    setaDireita.style = "display:none" 
    setaparaEsquerda.style = "display:flex; margin-top:55px" 
} 

function RolarParaEsquerda() {
    bruna.style = "dispaly:none" 
    leonardo.style = "display:flex"
    setaparaEsquerda.style = "display:none"
    setaDireita.style = "dispaly:flex; margin-top:55px"
}

