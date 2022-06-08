function CheckColision () {
    if (enviroment.isTouching(edge)) {
        enviroment.delete()
        enviroment_2.delete()
        enviroAlive = 0
        enviroAlive_2 = 0
        score += 1
    } else if (enviroment.isTouching(edge2)) {
        enviroment.delete()
        enviroment_2.delete()
        enviroAlive = 0
        enviroAlive_2 = 0
        score += 1
    } else if (enviroment.isTouching(edge3)) {
        enviroment.delete()
        enviroment_2.delete()
        enviroAlive = 0
        enviroAlive_2 = 0
        score += 1
    } else if (enviroment.isTouching(edge4)) {
        enviroment.delete()
        enviroment_2.delete()
        enviroAlive = 0
        enviroAlive_2 = 0
        score += 1
    } else if (enviroment.isTouching(edge5)) {
        enviroment.delete()
        enviroment_2.delete()
        enviroAlive = 0
        enviroAlive_2 = 0
        score += 1
    }
}
function moveObstacles () {
    enviroment.change(LedSpriteProperty.Y, 1)
    if (enviroAlive_2) {
        enviroment_2.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
    basic.pause(delay)
})
function Level_2 () {
    if (!(enviroAlive)) {
        enviroment = game.createSprite(randint(0, 5), 0)
        enviroAlive = 1
    }
    if (!(enviroAlive_2)) {
        enviroment_2 = game.createSprite(randint(0, 5), 0)
    }
}
input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.X, -1)
    basic.pause(delay)
})
function speedForward () {
    if (randint(0, 10) == 5) {
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(delay)
        basic.pause(delay)
        player.change(LedSpriteProperty.Y, 1)
    }
}
function Level_1 () {
    if (!(enviroAlive)) {
        enviroment = game.createSprite(randint(0, 5), 0)
        enviroAlive = 1
    }
}
input.onButtonPressed(Button.AB, function () {
    running = 0
    while (!(running)) {
        if (!(enviroment.isDeleted())) {
            enviroment.delete()
        }
        basic.showNumber(score)
        basic.pause(5000)
        running = 1
    }
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
    basic.pause(delay)
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
    basic.pause(delay)
})
function loadItems () {
    delay = 300
    score = 0
    player = game.createSprite(2, 4)
    basic.pause(delay)
    player.change(LedSpriteProperty.Y, -1)
    edge = game.createSprite(0, 0)
    edge2 = game.createSprite(1, 0)
    edge3 = game.createSprite(2, 0)
    edge4 = game.createSprite(3, 0)
    edge5 = game.createSprite(4, 0)
    for (let index = 0; index <= 4; index++) {
        edge.change(LedSpriteProperty.Y, 1)
        edge2.change(LedSpriteProperty.Y, 1)
        edge3.change(LedSpriteProperty.Y, 1)
        edge4.change(LedSpriteProperty.Y, 1)
        edge5.change(LedSpriteProperty.Y, 1)
        basic.pause(delay)
    }
    running = 0
    nextLevel = 0
    sadFace = images.createImage(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    trophy = images.createImage(`
        # . . . #
        # # # # #
        . # # # .
        . . # . .
        . # # # .
        `)
}
function checkWinLoss () {
    if (player.isTouching(enviroment)) {
        basic.showNumber(score)
        basic.pause(delay)
        basic.pause(delay)
        basic.showString("GAMEOVER")
        basic.pause(delay)
        basic.pause(delay)
        sadFace.showImage(0)
        basic.pause(delay)
        basic.pause(delay)
        for (let index = 0; index <= 255; index++) {
            led.setBrightness(255 - index)
            basic.pause(100)
        }
        control.reset()
    } else if (score == 100) {
        basic.showString("YOU WIN!!!")
        basic.pause(delay)
        basic.pause(delay)
        for (let index = 0; index < 5; index++) {
            trophy.showImage(0)
            led.enable(false)
            led.enable(true)
            trophy.showImage(0)
            basic.pause(1000)
        }
    }
}
let trophy: Image = null
let sadFace: Image = null
let nextLevel = 0
let running = 0
let delay = 0
let player: game.LedSprite = null
let score = 0
let enviroAlive_2 = 0
let enviroAlive = 0
let enviroment_2: game.LedSprite = null
let edge5: game.LedSprite = null
let edge4: game.LedSprite = null
let edge3: game.LedSprite = null
let edge2: game.LedSprite = null
let edge: game.LedSprite = null
let enviroment: game.LedSprite = null
loadItems()
basic.forever(function () {
    if (nextLevel > 0) {
        Level_2()
    } else {
        Level_1()
    }
    speedForward()
    CheckColision()
    checkWinLoss()
    moveObstacles()
    basic.pause(randint(150, 250))
})
loops.everyInterval(30000, function () {
    nextLevel += 1
})
