input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(200)
        basic.showIcon(IconNames.Square)
    }
    for (let index = 0; index < 3; index++) {
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Square)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
for (let index = 0; index < 5; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(200)
    basic.showIcon(IconNames.Square)
}
for (let index = 0; index < 3; index++) {
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
}
basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() == 25) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.compassHeading() == 180) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.compassHeading() == -180) {
        basic.showArrow(ArrowNames.West)
    }
})
