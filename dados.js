class produto{
    constructor(nome, tipo, informações, imagem, preco){
        this.nome = nome
        this.tipo = tipo
        this.preco = preco
        this.informações = informações
        this.imagem = imagem
        this.estoque = 0
    }
    estoque(e){
        this.estoque = e
    }
}



let dados = [
    new produto('iPhone 14', 'celular', '', 'iphone_14.jpg', '4.499,99'),
    new produto('iPhone 13', 'celular', '', 'iphone_13.jpg', '3.999,99'),
    new produto('iPhone 12', 'celular', '', 'iphone_12.jpg', '3.499,99')
]

export default dados
