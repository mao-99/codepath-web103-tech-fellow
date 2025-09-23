const header = document.querySelector('header')
header.className = "header"
const headerContainer = document.createElement('div')

headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = "header-left flex flex-row align-center justify-start"
// headerLeft.classList.add('header-left')
// headerLeft.classList.add('flex')


const headerImg = document.createElement('img')
headerImg.src = '/logo.svg'

const headerText = document.createElement('h1')
headerText.textContent = "Codelock"
headerText.classList.add('londrina-shadow-regular')

headerLeft.appendChild(headerImg)
headerLeft.appendChild(headerText)

const headerRight = document.createElement('div')
headerRight.classList.add('header-right')

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
headerButton.addEventListener('click', () => {
    window.location = '/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)