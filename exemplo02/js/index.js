const sentenceInput = document.getElementById('sentence')
const characterCounterSpan = document.getElementById('character-counter')

sentenceInput.oninput = () => {
    const sentence = sentenceInput.value
    const count = sentence.length
    /*if(count > 0) {
        characterCounterSpan.innerText = `Quantidade de caracteres: ${count}`
    } else {
        characterCounterSpan.innerText = ''
    }*/
    characterCounterSpan.innerText = 
        count > 0 ? `Quantidade de caracteres: ${count}` : ''
}

const radicandInput = document.getElementById('radicand')
const squareRootSpan = document.getElementById('square-root')

radicandInput.oninput = () => {
    const value = radicandInput.value
    let squareRootResult = ''

    if(value) {
        /**
         * A função Number converte uma string para número,
         * desde que o valor da string expresse um valor numérico.
         * Caso contrário, a função Number retornará o valor NaN
         */
        const radicand = Number(value) 
        const squareRoot = Math.sqrt(radicand)
        squareRootResult = `Raíz quadrada de ${radicand}: ${squareRoot}`
    }

    squareRootSpan.innerText = squareRootResult
}

const selectedColorInput = document.getElementById('selected-color')
const colouredBox = document.getElementById('coloured-box')
selectedColorInput.oninput = () => {
    const color = selectedColorInput.value
    colouredBox.style.backgroundColor = color
}

const colorInput = document.querySelector('#color-area input')
const colorSpan = document.querySelector('#color-area span')
colorInput.oninput = () => {
    const color = colorInput.value
    colorSpan.innerText = color
}