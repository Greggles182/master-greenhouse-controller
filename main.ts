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
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.onReceivedMessage(RadioMessage.HeaterOff, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
radio.onReceivedMessage(RadioMessage.HeaterOn, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
radio.onReceivedMessage(RadioMessage.WaterTrigger, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
radio.onReceivedMessage(RadioMessage.LightOn, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
radio.setGroup(1)
