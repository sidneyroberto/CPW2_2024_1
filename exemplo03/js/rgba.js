import { $ } from "./aliases.js"

export const onChangeRangesRGBA = () => {
    const red = $('#red').value
    const green = $('#green').value
    const blue = $('#blue').value
    const alpha = $('#alpha').value

    $('#color-display-rgba').style.backgroundColor = 
        `rgba(${red}, ${green}, ${blue}, ${alpha})`
    
    $('#direct-red').checked = false
    $('#direct-green').checked = false
    $('#direct-blue').checked = false
}