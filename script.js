let body = document.body
let div = document.querySelector("div")
let btnAbout = document.getElementById("btnAbout");
const h2 = document.createElement('h2')
const p = document.createElement("p")

h2.textContent = 'Farel Arlish Orlando, A Man Like Coding'
h2.style.color = 'white'
h2.style.fontSize = '24px'

p.textContent = "Farel Arlish Orlando A Man Study SMKN 1 ADIWRNA, And Like Coding"
p.style.color = "white"
p.style.fontSize = "14px"


btnAbout.style.border = "none"
btnAbout.style.padding = "24px 48px"
btnAbout.style.fontSize = "24px"
btnAbout.style.borderRadius = "8px"
btnAbout.style.backgroundColor = "green"
btnAbout.style.color = "white"
btnAbout.style.cursor = "pointer"

function aboutMe() {
    btnAbout.style.backgroundColor = "#8fbc8f"
    btnAbout.style.color = "black"
    h2.style.display = "block"
    p.style.display = "block"
    div.append(h2)
    div.append(p)
}

function aboutMove() {
    btnAbout.style.backgroundColor = "rgba(0,0,0,0.5)"
    btnAbout.textContent = 'Click One More'
    h2.style.display = "block"
    p.style.display = "none"
    div.append(h2)
}

function aboutOut() {
    btnAbout.style.backgroundColor = "green"
    btnAbout.style.color = "white"
    btnAbout.textContent = "About Me"
    h2.style.display = "none"
    p.style.display = "none"
}