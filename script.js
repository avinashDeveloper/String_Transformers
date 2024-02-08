var input = document.querySelector('input')

var spanLowerCase = document.querySelector('#lowercase span')
var spanUpperCase = document.querySelector('#uppercase span')
var spanCamelCase = document.querySelector('#camelcase span')
var spanPascalCase = document.querySelector('#pascalcase span')
var spanSnakeCase = document.querySelector('#snakecase span')
var spanKebabCase = document.querySelector('#kebabcase span')
var spanTrimCase = document.querySelector('#trimcase span')


function capitalizeString(str) {
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1, str.length)
}

function camelCase(string) {
    const lowerCaseString = string.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        if (i === 0) return word
        return capitalizeString(word)
    })
    return finalArray.join('')
}


function pascalCase(string) {
    const lowerCaseString = string.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        return capitalizeString(word)
    })
    return finalArray.join('')
}

function snakeCase(string) {
    return string.replaceAll(' ', '_')
}

function kebabCase(string) {
    return string.replaceAll(' ', '-')
}

function trimCase(string) {
    return string.replaceAll(' ', '')

}

function updateScreen() {
    spanLowerCase.innerText = input.value.trim().toLowerCase()
    spanUpperCase.innerText = input.value.trim().toUpperCase()
    spanCamelCase.innerText = camelCase(input.value.trim())
    spanPascalCase.innerText = pascalCase(input.value.trim())
    spanSnakeCase.innerText = snakeCase(input.value.trim())
    spanKebabCase.innerText = kebabCase(input.value.trim())
    spanTrimCase.innerText = trimCase(input.value.trim())
}

updateScreen()

input.addEventListener('input', updateScreen)