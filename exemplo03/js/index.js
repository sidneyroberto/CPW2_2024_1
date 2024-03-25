import { $, $all } from "./aliases.js"
import { changeByDirectColor } from "./direct.js"
import { onChangeRangesRGBA } from "./rgba.js"

$all(
    '#color-controls-rgba input[type=range]'
).forEach((range) => range.oninput = onChangeRangesRGBA)

const directRed = $('#direct-red')
const directGreen = $('#direct-green')
const directBlue = $('#direct-blue')

// No caso do Firefox, ele mantém a última seleção após a recarga da página
directRed.checked = false
directGreen.checked = false
directBlue.checked = false

directRed.onclick = () => changeByDirectColor('rgb(255, 0, 0)')
directGreen.onclick = () => changeByDirectColor('rgb(0, 255, 0)')
directBlue.onclick = () => changeByDirectColor('rgb(0, 0, 255)')