let addim = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(addim)
})
input.onButtonPressed(Button.B, function () {
    addim = 0
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        addim += 1
    }
})
