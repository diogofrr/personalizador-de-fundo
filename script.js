// Parte que esconde e mostra os campos
const rgb = document.querySelector('#rgb')
const hex = document.querySelector('#hex')

function mostrar(tipo1) {
    $(`#campo${tipo1}`).css('display', 'block')
    tipo1 == 'HEX' ? esconder('RGB') : esconder('HEX')
}

function esconder(tipo2) {
    $(`#campo${tipo2}`).css('display', 'none')
}

rgb.addEventListener('click', () => mostrar('RGB'))
hex.addEventListener('click', () => mostrar('HEX'))
/*--------------------------------------------------------------------------------*/
// Parte que verifica os dados inseridos e troca a cor
const rgbinp1 = document.querySelector('#rgb1')
const rgbinp2 = document.querySelector('#rgb2')
const rgbinp3 = document.querySelector('#rgb3')

const hexinp = document.querySelector('#hexinput')

function trocarRGB() {
    let rgb = [(rgbinp1.value).trim(), (rgbinp2.value).trim(), (rgbinp3.value).trim()]
    
    for (i in rgb){
        rgb[i] == '' || rgb[i] > 255 || rgb < 0 ? rgb[i] = 255 : rgb[i]
    }
    rgb = rgb.join()
    
    $('body').css('background-color', `rgb(${rgb})`)
}

function trocarHex() {
    let hex = (hexinp.value).trim()

    regex = /#?([0-9a-f]{3}){1,2}$/i
    regex.test(hex) ? hex : hex = 'fff'
    $('body').css('background-color', `#${hex}`)
}

rgbinp1.addEventListener('input', trocarRGB)
rgbinp2.addEventListener('input', trocarRGB)
rgbinp3.addEventListener('input', trocarRGB)

hexinput.addEventListener('input', trocarHex)