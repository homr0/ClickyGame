# Pokemon Clicky Game

[Pokemon Clicky Game](https://homr0.github.io/ClickyGame/) is a simple, endless memory game that uses React.

## Instructions

1. Click on an image.
2. The images in the board will then be randomly shuffled into new positions.
    - If the image *has not been clicked before*, your score will increase by 1.
    - If the image *has been clicked before*, you **lose** the game.
3. If you lose the game, your score is reset to 0.
4. If you have guessed all of the images correctly, the board will reset with a new set of images.

### Winning

There is no discrete win condition besides clearing boards and trying to obtain a high score.

## The Pokemon Board

The Pokemon Board consists of 12 randomly selected images of the original 151 Pokemon.

The first board is always a tutorial level consisting of the first 12 Pokemon as  warm-up. However, the order that the Pokemon appear in will be shuffled after each turn.

Once all 12 Pokemon have been picked from the board, the board will reset to a new, random set of 12 Pokemon.

If the player loses, the board will not reset to a new set of Pokemon.

### Images

Images are from [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page), one of the best sources for information about Pokemon.