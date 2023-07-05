const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    /* Pega o nome do elemento que esta marcado com a classe 'tag' */
    const tagName = elemento.tagName.toLowerCase()

    /* Aplica a cor na borda do elemento */
    elemento.style.borderColor = colors.get(tagName)

    /* Se ele não estiver marcado com 'nolabel' */
    if (!elemento.classList.contains('nolabel')) {
        /* Adiciona dentro do elemento um 'label' */
        const label = document.createElement('label')
        /* Adiciona cor de fundo do elemento */
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        /* Antes do primeiro elemento do 'label', que no caso são os números */
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})
