class AnotacoesController{
    constructor(){
        this.arrAnotacoes = [];
    }
    addAnotacao(){
        const titulo= $('#titulo').val();
        const notas = $('#descricaoTarefa').val();
        const anotacao = new Anotacoes(titulo,notas);
        this.arrAnotacoes.push(anotacao);
        console.log(this.arrAnotacoes, anotacao);
    }
}


const btn = $('#btnSubmit')

btn.on('click', (event)=>{
    event.preventDefault();
    const anotacaoNova = new AnotacoesController();
    anotacaoNova.addAnotacao();
})