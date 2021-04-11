function SetColor (red: number, green: number, blue: number) {
    red = Math.map(red, 0, 255, 1023, 0)
    green = Math.map(green, 0, 255, 1023, 0)
    blue = Math.map(blue, 0, 255, 1023, 0)
    pins.analogWritePin(AnalogPin.P0, red)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P2, blue)
    basic.pause(5)
}
let RBGcolor = 0
let hue = 0
let blue = 0
let green = 0
let red = 0
led.enable(false)
basic.forever(function () {
    hue = Math.map(pins.analogReadPin(AnalogPin.P3), 0, 1023, 0, 360)
    RBGcolor = neopixel.hsl(hue, 100, 50)
    red = Math.trunc(RBGcolor / 65535)
    green = Math.trunc(RBGcolor % 65535 / 255)
    blue = RBGcolor % 255
    SetColor(red, green, blue)
})
