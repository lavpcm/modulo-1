// frutaria quest 😼

// valor das frutinhas
var maca = 2.00
var banana = 1.50
var laranja = 3.00
var pera = 2.50

// usuário selecionando quantas frutinhas de cada ele quer
var quantMaca = 2
var quantBanana = 2
var quantLaranja = 2
var quantPera = 2

// preço total de cada fruta
var precoMaca = quantMaca * maca
var precoBanana = quantBanana * banana
var precoLaranja = quantLaranja * laranja
var precoPera = quantPera * pera


// calculo do preço total da compra de frutinhas
var totalFrutinhas = precoMaca + precoBanana + precoLaranja + precoPera


// exibição do recibo final da frutaria benites 🍉
console.log('RECIBO: Frutaria Benites 🍉🍎🍌🍋‍🟩')
console.log('...........................................')
console.log('Total da compra: R$', totalFrutinhas.toFixed(2))
console.log('...........................................')
console.log('🍎 Maçãs:', quantMaca, 'x', 'R$', maca, ' = ', precoMaca.toFixed(2), 'reais')
console.log('🍌 Bananas:', quantBanana, 'x', 'R$', banana, ' = ', precoBanana.toFixed(2), 'reais')
console.log('🍊 Laranjas:', quantLaranja, 'x', 'R$', laranja, ' = ', precoLaranja.toFixed(2), 'reais' )
console.log('🍐 Pêras:', quantPera, 'x', 'R$', pera, ' = ', precoPera.toFixed(2), 'reais')
console.log('...........................................')