const $ = document.querySelector.bind(document)

const onChangeRangesRGBA = () => {
    const red = $('#red').value
    const green = $('#green').value
    const blue = $('#blue').value
    const alpha = $('#alpha').value

    $('#color-display-rgba').style.backgroundColor = 
        `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

$('#red').oninput = onChangeRangesRGBA
$('#green').oninput = onChangeRangesRGBA
$('#blue').oninput = onChangeRangesRGBA
$('#alpha').oninput = onChangeRangesRGBA