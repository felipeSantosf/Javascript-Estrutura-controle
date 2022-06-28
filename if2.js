function teste1(num) {
    if(num > 7) 
        console.log(num) // if sem abrir o bloco {} só considera 1 sentença de código

    console.log('Final')
}

teste1(6)

console.log('---------------------------------------------------')

teste1(8)


console.log('---------------------------------------------------')

function teste2(num) {
    if(num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)