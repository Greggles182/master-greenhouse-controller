enum RadioMessage {
    message1 = 49434,
    LightOff = 64509,
    LightOn = 49786,
    HeaterOn = 29523,
    HeaterOff = 54869,
    WaterTrigger = 8454
}
radio.onReceivedMessage(RadioMessage.LightOff, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedMessage(RadioMessage.HeaterOff, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
})
radio.onReceivedMessage(RadioMessage.HeaterOn, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
radio.onReceivedMessage(RadioMessage.WaterTrigger, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedMessage(RadioMessage.LightOn, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
})
radio.setGroup(1)
