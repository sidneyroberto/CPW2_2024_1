import { $ } from "./aliases.js"

export const changeByDirectColor = (color) => {
    $('#color-display-rgba').style.backgroundColor = color
    $('#red').value = 0
    $('#green').value = 0
    $('#blue').value = 0
    $('#alpha').value = 1
}