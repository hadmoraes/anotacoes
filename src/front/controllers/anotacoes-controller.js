class AnotacoesController{
    constructor(){
        this.arrAnotacoes = [];
        this.mostraAnotacao = new AnotacoesView();
    }

    getArrAnotacoes(){
        return this.arrAnotacoes
    }

    addAnotacao(){
        const titulo= $('#titulo').val();
        const notas = $('#descricaoTarefa').val();
        const anotacao = new Anotacoes(titulo,notas);
        this.arrAnotacoes.push(anotacao);
        this.mostraAnotacao.renderizaAnotacao(anotacao);
    }

}


const btn = $('#btnSubmit')

btn.on('click', (event)=>{
    event.preventDefault();
    const criaAnotacao = new AnotacoesController();
    criaAnotacao.addAnotacao();
    console.log(criaAnotacao);
})