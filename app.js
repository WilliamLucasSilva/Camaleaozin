import dados from "./dados.js";

var div_produtos = document.getElementById('produtos')
var div_geral = document.getElementById('corpoTxt')
var produtosSlc = ''
var arrayPdt = ''
var imgs = ''
var botaoVoltar = ''
var nomeNum = 0

function inicial(){ 
    for(let i = 0; i < dados.length; i++){
        imgs += `    
        <div class="produtoDados">
        <img src="${dados[i].imagem}" width="150px" height="150px" class="produtoImg" name="${i}">
            <div class="info">
                <h3>${dados[i].nome}</h3>
                <p class="preco">${dados[i].preco}</p>
            </div>
        </div>`
    }

    div_produtos.innerHTML = 
    `
        ${imgs}
    `

    produtosSlc = document.getElementsByClassName('produtoDados')
    arrayPdt = Array.from(produtosSlc)
    parapapa()
}

function produto_page(j){
    div_geral.innerHTML = `
<main class="pdtPage">
    <img src="${dados[j].imagem}" width="150px" height="150px" class="imgPrincipal">

    <div>
        <h2>${dados[j].nome}</h2>

        <h3>${dados[j].preco}</h3>
        
        <p>${dados[j].informações}</p>
        <button>Comprar</button>
        <button id="botaoVoltar">Voltar</button>
        <p>Este site é apenas uma demontração nada nele sera realmente comercializado</p>
     </div>
    
</main>`

    botaoVoltar = document.getElementById('botaoVoltar')

    botaoVoltar.addEventListener('click', () => {
        paginaInicial()
    })
}

function paginaInicial() {
    div_geral.innerHTML = `
    <div id="corpoTxt">   
        <main>
            <div class="produtos">
                <h2 id=produtos1>Produtos</h2>
            <div id="produtos">
            </div>
            </div>
        <div class="sobre">
            <h2 id="sobre">Sobre</h2>

            <p> Camaleãozin é um projeto desenvolvido para a feira de empreendorismo, do pinotte de 2023, organizada por humberto.</p>
            <p> O site e cartaz foi desenvolvido por: <br>
             
                
            <ul>
                <li>
                    <h3>william lucas: </h3><br>
                    <p>criador do site, designer e programação </p>
                </li><br>

                <li>
                    <h3>samuel:</h3><br>
                    <p>organizador, reuniu o conteudo para o site e cartaz e ilutrou o cartaz </p>
                </li><br>

                <li>
                    <h3>gabriel henrique:</h3> <br>
                    <p>organizou a presentação e apresentou o trabalho </p>
                </li><br>

                <li>
                    <h3>guilherme </h3><br>
                    <p>organizou a presentação e apresentou o trabalho</p>
                </li><br>

                <li>
                    <h3>matheus:</h3><br>
                    <p>criador do cartaz, passou o conteudo para a folha, auxilou na organização e apresentação </p>
                </li><br> 
            </ul>    
            </p>

            <p>Nenhum dos produtos mostrados sera realmente vendido, não há qualquer objetivo de manter os preços reais.</p>
        </div>
    </main>
    <footer>
        <p>
            <h2>2°B</h2>
            -samuel <br>
            -william lucas <br>
            -gabriel romão <br>
            -guilherme <br>
            -matheus <br>
        </p>
    </footer>
    </div>`

    div_produtos = document.getElementById('produtos')
    div_geral = document.getElementById('corpoTxt')

    div_produtos.innerHTML = 
    `
        ${imgs}
    `

    produtosSlc = document.getElementsByClassName('produtoDados')
    arrayPdt = Array.from(produtosSlc)
    parapapa()
}

function parapapa(){
    
    arrayPdt.forEach((p) => {
        p.addEventListener('click',(e) =>{
            //let l = string(e.name)
            //console.log(l)
            nomeNum = e.target.name
            console.log()
            produto_page(nomeNum)
        })
    })
}

inicial()

