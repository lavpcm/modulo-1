// armazenar o preço dos produtos
var preco_original1 = 100;
var preco_original2 = 100;
var preco_original3 = 100;
var preco_original4 = 100;

var desconto1 = 50
var desconto2 = 50
var desconto3 = 50
var desconto4 = 50


function calcularDesconto(preco, desconto) {
    return desconto / 100 * preco;
}

console.log('🛍️ COMPRAS 🛍️')
console.log('.....................................')
console.log('🛒 Produto 1:')
console.log('Preço original: R$', preco_original1)
console.log('Desconto aplicado:', desconto1, '%')
console.log('Preço com desconto: R$', calcularDesconto(preco_original1, desconto1))
console.log('.....................................')

console.log('🛒 Produto 2:')
console.log('Preço original: R$', preco_original2)
console.log('Desconto aplicado:', desconto2, '%')
console.log('Preço com desconto: R$', calcularDesconto(preco_original2, desconto2))
console.log('.....................................')

console.log('🛒 Produto 3:')
console.log('Preço original: R$', preco_original3)
console.log('Desconto aplicado:', desconto3, '%')
console.log('Preço com desconto: R$', calcularDesconto(preco_original3, desconto3))
console.log('.....................................')

console.log('🛒 Produto 4:')
console.log('Preço original: R$', preco_original4)
console.log('Desconto aplicado:', desconto4, '%')
console.log('Preço com desconto: R$', calcularDesconto(preco_original4, desconto4))
console.log('.....................................')
