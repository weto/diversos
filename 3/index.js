function iterar(listaInicio, listaFim) {
    return listas = [
        listaInicio,
        listaFim.reverse()
    ]
}

function gerarLista() {
    let listasTag = ""
    const listas = [[0,1,2,3], [0,1,2,3]]
    const newList = iterar(...listas)
    listasTag += listar('listaInicio', newList[0])
    listasTag += listar('listaFim', newList[1])
    document.getElementById('listas').innerHTML = listasTag
}

function listar(classe, lista) {
    let elementos = "<ul>"
    lista.map(inicio => {
        elementos += `<li>${inicio}</li>`
    })
    return elementos += "</ul>"
}