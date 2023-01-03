
let geradorCor = () => {
    let letras = '0123456789abcdef'

    let arrCor = []
    for (let i = 0; i < 6; i++){
        let indice = Math.floor(Math.random() * 15)
        arrCor.push(letras[indice])
    }
    return '#' + arrCor.join('')
}


let anoTexto = document.querySelector('strong')
anoTexto.style.fontSize = '40px'

setInterval(() =>{
    anoTexto.style.color = geradorCor()
}, 1000)

// Data

let getDate = () => {
    let data = new Date()

    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro']

    let mesesIndex = data.getMonth()
    let ano = data.getFullYear()
    let dia = data.getDate()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    dia = dia < 10? '0' + dia.toString(): dia
    hora = hora < 10? '0' + hora.toString(): hora
    minutos = minutos < 10? '0' + minutos.toString(): minutos
    segundos = segundos < 10? '0' + segundos.toString(): segundos

    return `${meses[mesesIndex]} ${dia}, ${ano} ${hora}:${minutos}:${segundos}` 
}

let data = document.querySelector('p')
data.textContent = getDate()
data.style.margin = '9px auto auto auto'
data.style.padding = '6px'
data.style.width = '17%'


setInterval(() => {
    data.style.backgroundColor = geradorCor()
}, 1000)


let itemLista = document.querySelectorAll('li')

for(let item of itemLista){
    item.style.listStyleType = 'none'
    item.style.fontSize = '21px'
    item.style.margin = 'auto'
    item.style.padding = '6px'
    item.style.textAlign = 'left'
    item.style.width = '60%'
}

for(const item of itemLista){
    if(item.textContent.endsWith('Completo'))
        item.style.backgroundColor = '#228b22'
    else if(item.textContent.endsWith('Andamento'))
        item.style.backgroundColor = '#FFFF00'
    else item.style.backgroundColor = '#DC143C'
    
}

 


