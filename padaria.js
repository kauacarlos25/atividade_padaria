let valor_compra = document.getElementById('valor_compra')
let valor_compra2 = document.getElementById('valor_compra')


parcial.addEventListener('click', ()=>{

let alimento = (document.getElementById('alimento').value)
let qtde_alimento = Number(document.getElementById('qtde_alimento').value)

let alimentos = alimento*qtde_alimento

valor_compra.innerHTML = 'O Valor da compra é R$' + alimentos.toFixed(2)
})

total.addEventListener('click', ()=>{

for(i=0;i<nun.length;i++){
    if((i % 2)==0){
            soma = soma + (nun[i]*3)+i
    }else{
            soma = ((nun[i]*3)+i) + ((nun[i]*2)-i)
    }
}       
    div_total.innerHTML = soma


let alimento = (document.getElementById('alimento').value)
let qtde_alimento = Number(document.getElementById('qtde_alimento').value)
let alimentos = alimento*qtde_alimento
let div_total = alimentos/100


})