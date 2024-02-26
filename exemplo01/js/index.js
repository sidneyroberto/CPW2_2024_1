const h1 = document.querySelector('h1')
h1.innerText = 'Exemplo 01'

const containerDiv = document.querySelector('#container')
console.log(containerDiv)

const containerDiv2 = document.getElementById('container')
console.log(containerDiv2)

/***********************************************/

const $ = document.querySelector.bind(document)

const container = $('#container')

const containerTitle = document.createElement('h2')
containerTitle.innerText = 'Bem vindo ao primeiro exemplo!'
containerTitle.className = 'title'
container.appendChild(containerTitle)

const addPersonButton = document.createElement('button')
addPersonButton.innerText = 'Adicionar pessoa'
addPersonButton.id = 'person-button'
addPersonButton.type = 'button'
container.appendChild(addPersonButton)

const peopleList = document.createElement('ul')
container.appendChild(peopleList)

faker.locale = 'pt_BR'

/*
addPersonButton.addEventListener('click', () => {
    const personItem = document.createElement('li')
    const name = faker.name.findName()
    personItem.innerText = name
    peopleList.appendChild(personItem)
})
*/

// Cria uma arrow function para adicionar uma nova pessoa na lista
const addPerson = () => {
    const personItem = document.createElement('li')
    const name = faker.name.findName()
    personItem.innerText = name
    peopleList.appendChild(personItem)
}

addPersonButton.onclick = addPerson

