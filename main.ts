input.onButtonPressed(Button.A, function () {
    if (!(bylo_stisknuto_tlacitko) && nahodne_cislo == 1) {
        body += 1
    }
    bylo_stisknuto_tlacitko = true
})
input.onButtonPressed(Button.B, function () {
    if (!(bylo_stisknuto_tlacitko) && nahodne_cislo == 2) {
        body += 1
    }
    bylo_stisknuto_tlacitko = true
})
let nahodne_cislo = 0
let nahodny_interval = 0
let bylo_stisknuto_tlacitko = false
let odpocet = 3
for (let index = 0; index < 3; index++) {
    basic.showNumber(odpocet)
    basic.pause(500)
    odpocet += -1
}
basic.clearScreen()
let body = 0
for (let index = 0; index < 10; index++) {
    bylo_stisknuto_tlacitko = false
    nahodny_interval = randint(100, 500)
    nahodne_cislo = randint(1, 2)
    if (nahodne_cislo == 1) {
        basic.showString("A")
    }
    if (nahodne_cislo == 2) {
        basic.showString("B")
    }
    basic.pause(nahodny_interval)
    basic.clearScreen()
    basic.pause(500)
}
basic.pause(1000)
basic.showNumber(body)
