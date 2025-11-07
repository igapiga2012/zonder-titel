let code = 0
basic.forever(function () {
    if (code == 0) {
        basic.showString("C")
    }
    if (code == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (code == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (code == 3) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (code == 4) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (code == 5) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (code == 9) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        code = 0
    }
})
basic.forever(function () {
    if (code == 0 && input.buttonIsPressed(Button.A)) {
        basic.pause(200)
        code = 1
    } else {
        if (code == 0 && (input.logoIsPressed() || input.buttonIsPressed(Button.B))) {
            code = 9
        }
    }
    if (code == 1 && input.buttonIsPressed(Button.B)) {
        basic.pause(200)
        code = 2
    } else {
        if (code == 1 && (input.logoIsPressed() || input.buttonIsPressed(Button.A))) {
            code = 9
        }
    }
    if (code == 2 && input.logoIsPressed()) {
        basic.pause(200)
        code = 3
    } else {
        if (code == 2 && (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A))) {
            code = 9
        }
    }
    if (code == 3 && input.buttonIsPressed(Button.A)) {
        basic.pause(200)
        code = 4
    } else {
        if (code == 3 && (input.buttonIsPressed(Button.B) || input.logoIsPressed())) {
            code = 9
        }
    }
    if (code == 4 && input.logoIsPressed()) {
        basic.pause(200)
        code = 5
    } else {
        if (code == 4 && (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A))) {
            code = 9
        }
    }
})
