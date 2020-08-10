function lightUp (num: number) {
    led.plot(num % 5, num / 5)
}
let pos = 8
basic.forever(function () {
    lightUp(pos)
})
