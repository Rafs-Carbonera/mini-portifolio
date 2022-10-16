//1- Pegar os elementos que representam as abas no html
const abas = document.querySelectorAll(".aba");
//2- Dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba);
        mostrarInformacoesDaAba(aba);  
    });
});

function selecionarAba(aba) {
    //3 -Quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    //4- Marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    //5- Esconter conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");
        //6- Mostrar o conteúdo da aba selecionada
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
        informacaoASerMostrada.classList.add("selecionado");
}