/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Seleciona o formulário e adiciona um listener para o evento de submit
// Seleciona o formulário e adiciona um listener para o evento de submit
const orderForm = document.querySelector('#orderForm')

orderForm.addEventListener('submit', function (event) {
  event.preventDefault() // Previne o envio padrão do formulário

  // Obtém os valores selecionados nos selects
  const pizza = document.querySelector('#pizzaSelect').value
  const bebida = document.querySelector('#bebidaSelect').value

  // Valores fictícios
  const tempoEspera = '30 minutos' // Tempo fictício
  const valorTotal = '60,00' // Valor fictício

  // Atualiza os detalhes do pedido com os valores fictícios
  document.getElementById('pizzaDetail').textContent = pizza
  document.getElementById('bebidaDetail').textContent = bebida
  document.getElementById('tempoEsperaDetail').textContent = tempoEspera
  document.getElementById('valorTotalDetail').textContent = valorTotal

  // Exibe os detalhes do pedido
  const orderDetails = document.getElementById('orderDetails')
  orderDetails.style.display = 'block'

  // Limpa o formulário (opcional)
  orderForm.reset()
})

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})
