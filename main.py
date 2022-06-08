def on_button_pressed_a():
    player.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if game.is_running():
        game.pause()
    elif game.is_paused():
        game.resume()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

enviroment: game.LedSprite = None
enviroAlive = 0
player: game.LedSprite = None
delay = 300
score = 0
player = game.create_sprite(2, 4)
basic.pause(delay)
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

def on_forever():
    global enviroment, enviroAlive, score
    if not (enviroAlive):
        enviroment = game.create_sprite(randint(0, 5), 0)
        enviroAlive = 1
    if randint(0, 10) == 5:
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(delay)
        player.change(LedSpriteProperty.Y, 1)
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
    elif player.is_touching(enviroment):
        basic.show_number(score)
    enviroment.change(LedSpriteProperty.Y, 1)
    basic.pause(delay)
basic.forever(on_forever)
