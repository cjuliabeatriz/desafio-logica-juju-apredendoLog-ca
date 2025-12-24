
function ReceberNomeComoParametro (numero) { 
    alert ('Oii, tudo bem com vc?')
 let nomeUsuario = prompt ('Qual seu nome?') 
 alert ('olá  ' + nomeUsuario)
 NumeroEmDobro()
}
function NumeroEmDobro (dobro) {
  let numeroColetado = prompt ('digite qualquer número para vermos quanto ele é em dobro: ')
  alert ('seu número em dobro vai ser igual a; ' + numeroColetado * 2)
  CalcularMedia ()
}
function CalcularMedia () {
  alert ('vamos calcular algumas médias :)')
  let n1 = parseFloat(prompt('Primeiro número da média;  '))
  let n2 = parseFloat(prompt('segundo número da média;'))
  let n3 = parseFloat(prompt('terceiro número da média;')) 
  let ResultadoDaMedia = (n1 + n2 + n3) / 3 
  let NumeroMaior = Math.max(n1, n2, n3)
  let MaiorNumero = NumeroMaior * NumeroMaior
  alert (
    '   RELATORIO FINAL-------------                 ' + 
    '   RESULTADO DA MÉDIA:  ' +   ResultadoDaMedia     +
    '   RESULTADO DO NÚMERO MAIOR:   ' +   NumeroMaior     + 
    '  MULTIPLICAÇÃO DO MAIOR NÚMERO:     ' +   MaiorNumero 
    
  )
}
