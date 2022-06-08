def CheckColision():
    global enviroAlive, score
    if enviroment.is_touching(edge):
        enviroment.delete()
        enviroAlive = 0
        score += 1
    elif enviroment.is_touching(edge2):
        enviroment.delete()
        enviroAlive = 0
        score += 1
    elif enviroment.is_touching(edge3):
        enviroment.delete()
        enviroAlive = 0
        score += 1
    elif enviroment.is_touching(edge4):
        enviroment.delete()
        enviroAlive = 0
        score += 1
    elif enviroment.is_touching(edge5):
        enviroment.delete()
        enviroAlive = 0
        score += 1

def on_button_pressed_a():
    player.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def makeObstacle():
    global enviroment, enviroAlive
    if not (enviroAlive):
        enviroment = game.create_sprite(randint(0, 5), 0)
        enviroAlive = 1
def speedForward():
    if randint(0, 10) == 5:
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(delay)
        player.change(LedSpriteProperty.Y, 1)

def on_button_pressed_ab():
    game.pause()
    basic.show_number(score)
    basic.pause(5000)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def loadItems():
    global edge, edge2, edge3, edge4, edge5, trophy
    player.change(LedSpriteProperty.Y, -1)
    edge = game.create_sprite(0, 0)
    edge2 = game.create_sprite(1, 0)
    edge3 = game.create_sprite(2, 0)
    edge4 = game.create_sprite(3, 0)
    edge5 = game.create_sprite(4, 0)
    for index in range(5):
        edge.change(LedSpriteProperty.Y, 1)
        edge2.change(LedSpriteProperty.Y, 1)
        edge3.change(LedSpriteProperty.Y, 1)
        edge4.change(LedSpriteProperty.Y, 1)
        edge5.change(LedSpriteProperty.Y, 1)
        basic.pause(delay)
    trophy = images.create_image("""
        # . . . #
                # # # # #
                . # # # .
                . . # . .
                . # # # .
    """)
def checkWinLoss():
    if player.is_touching(enviroment):
        basic.show_number(score)
        basic.pause(delay)
        basic.pause(delay)
        game.game_over()
    elif score == 100:
        basic.show_string("YOU WIN!!!")
        basic.pause(delay)
        basic.pause(delay)
        for index2 in range(5):
            trophy.show_image(0)
            led.enable(False)
            led.enable(True)
            trophy.show_image(0)
            basic.pause(1000)
trophy: Image = None
enviroAlive = 0
edge5: game.LedSprite = None
edge4: game.LedSprite = None
edge3: game.LedSprite = None
edge2: game.LedSprite = None
edge: game.LedSprite = None
enviroment: game.LedSprite = None
player: game.LedSprite = None
score = 0
delay = 0
delay = 300
score = 0
player = game.create_sprite(2, 4)
basic.pause(delay)
loadItems()

def on_every_interval():
    makeObstacle()
    enviroment.change(LedSpriteProperty.Y, 1)
    makeObstacle()
    enviroment.change(LedSpriteProperty.Y, 1)
loops.every_interval(50000, on_every_interval)

def on_forever():
    makeObstacle()
    speedForward()
    CheckColision()
    checkWinLoss()
    enviroment.change(LedSpriteProperty.Y, 1)
    basic.pause(delay)
basic.forever(on_forever)
