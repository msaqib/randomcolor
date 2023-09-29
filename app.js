function randHexDigit() {
    const rand16 = Math.floor(Math.random()*16)
    return rand16.toString(16)
}

const sp = document.getElementById('color')
setRandColor()

const btn = document.getElementById('btn')
btn.addEventListener('click', setRandColor)

function randColor() {
    return '#' + randHexDigit() + randHexDigit() + randHexDigit() + randHexDigit() + randHexDigit() + randHexDigit()
}

function setRandColor() {
    const color = randColor()
    sp.textContent = color
    document.body.style.background = color
}