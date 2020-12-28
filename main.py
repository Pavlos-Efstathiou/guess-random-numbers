rand_num = randint(0, 20)
guess = -1

def on_forever():
    global guess
    if input.button_is_pressed(Button.A):
        guess += 1
        basic.show_number(guess)
    elif input.button_is_pressed(Button.B):
        if guess == rand_num:
            basic.show_icon(IconNames.HAPPY)
        else:
            basic.show_icon(IconNames.SAD)
basic.forever(on_forever)
