class AnotacoesView{
    renderizaAnotacao(anotacao){
        $('#notes').append(`<div>
        <h6>${anotacao.titulo}</h6>
        <p>${anotacao.notas}</p>`
        );
    }
}