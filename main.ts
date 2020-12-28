input.onButtonPressed(Button.A, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
})
let rand_num = randint(0, 20)
let guess = -1
pins.analogWritePin(AnalogPin.P0, rand_num)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        guess += 1
        basic.showNumber(guess)
    } else if (input.buttonIsPressed(Button.B)) {
        if (guess == rand_num) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
})
