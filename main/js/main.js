// Criar uma função para que quando passar o mouse em cima
// gere um evento de mudança de cor da cor original para laranja.
// Quando for clicado no item deve gerar um fundo branco e trocar a cor
// da letra para cor de fundo 
// {color: var(--Dark-Blue, #262E38);}. 


function addHouver (e) {
    //fazendo uma verificação se o item foi clicado
    if (!e.currentTarget.cliked){
e.currentTarget.style.backgroundcolor = 'orange';
    }
}

