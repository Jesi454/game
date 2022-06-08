function CheckColision () {
    if (enviroment.isTouching(edge)) {
        enviroment.delete()
        enviroAlive = 0
        score += 1
    } else if (enviroment.isTouching(edge2)) {
        enviroment.delete()
        enviroAlive = 0
        score += 1
    } else if (enviroment.isTouching(edge3)) {
        enviroment.delete()
        enviroAlive = 0
        score += 1
    } else if (enviroment.isTouching(edge4)) {
        enviroment.delete()
        enviroAlive = 0
        score += 1
    } else if (enviroment.isTouching(edge5)) {
        enviroment.delete()
        enviroAlive = 0
        score += 1
    }
}
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
function makeObstacle () {
    if (!(enviroAlive)) {
        enviroment = game.createSprite(randint(0, 5), 0)
        enviroAlive = 1
    }
}
function speedForward () {
    if (randint(0, 10) == 5) {
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(delay)
        player.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (game.isRunning()) {
        game.pause()
        basic.showNumber(score)
    }
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
function loadItems () {
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
    trophy = images.createImage(`
        # . . . #
        # # # # #
        . # # . .
        . . # . .
        . # # # .
        `)
}
function checkWinLoss () {
    if (player.isTouching(enviroment)) {
        basic.showNumber(score)
        basic.pause(delay)
        basic.pause(delay)
        game.gameOver()
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
let enviroAlive = 0
let edge5: game.LedSprite = null
let edge4: game.LedSprite = null
let edge3: game.LedSprite = null
let edge2: game.LedSprite = null
let edge: game.LedSprite = null
let enviroment: game.LedSprite = null
let player: game.LedSprite = null
let score = 0
let delay = 0
delay = 300
score = 0
player = game.createSprite(2, 4)
basic.pause(delay)
loadItems()
loops.everyInterval(50000, function () {
    makeObstacle()
    enviroment.change(LedSpriteProperty.Y, 1)
    makeObstacle()
    enviroment.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    makeObstacle()
    speedForward()
    CheckColision()
    checkWinLoss()
    enviroment.change(LedSpriteProperty.Y, 1)
    basic.pause(delay)
})
