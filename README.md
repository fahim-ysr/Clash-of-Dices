# Clash of Dices

**In Clash of Dices, two players take turns rolling a single six-sided dice. On each turn, a player can roll the dice multiple times, accumulating the sum of the rolls to their "current" score. However, if a player rolls a 1, their "current" score resets to 0, and their turn ends. Players can choose to "hold" their "current" score, which adds it to their "total" score, and passes the turn to the other player. The first player to reach or exceed the target score of 100 points wins the game. Players must strategically decide when to hold their "current" score and when to keep rolling the dice to accumulate more points without risking a roll of 1 and losing their turn's progress.**

<br>

**Please click on the thumbnail to view the demo. 👇**

<br>

[![Watch the video](demo.png)](https://youtu.be/HG0hkbsfgZ4)

___

**index.html**

This is the HTML file that structures the web page for the 'Clash of Dices.'
<br>

**style.css**

This file contains the CSS styles for the "Clash of Dices." Here's a breakdown of the different sections:

    Imports and Resets
        - It brings in the "Nunito" font from Google Fonts.
        - Resets the default browser styles for margin, padding and box sizing.
        - Establishes the base font size. Enables border box sizing.

    Variables and Animations
        - Sets up CSS variables for colors and a gradient angle.
        - Adds an animation to rotate the background gradient.

    Body Styles
        - Defines the family, height, color and background gradient.
        - Applies the rotation animation to the background.
        - Centers the content both vertically and horizontally.

    Layout
        - Outlines how to structure the content area and player sections.
        - Gives style to the player section with a transparent background

    Element Styles
        - Styles for player names, scores, current scores, and buttons.
        - Implements transitions and hover effects for elements.

    Absolute Positioning
        - Positions elements, like dice images, buttons and winner styles using positioning. 

<br>

**script.js**

This file contains the JavaScript code that powers the "Clash of Dices." Here's a breakdown of the different sections:

    Variable Declarations
        - Declares variables for storing the current score, final scores, active player, and game state.
        - Selects DOM elements for scores, players, dice, and buttons.

    Initialization Function
        - Resets the game state, scores, and active player.
        - Initializes the player scores to 0 and hides the dice.

    Switching Player Function
        - Resets the current score to 0.
        - Switches the active player and updates the UI accordingly.

    Event Listeners:
        - Adds a click event listener to the "Roll Dice" button.
            > Generates a random number, between 1 and 6.
            > Current score is updated unless the number rolled is 1.
            > If a 1 is rolled it switches to the other player.
        - Adds a click event listener to the "Hold" button.
            > Current score is added to the score of the player.
            > Checks if the players final score reaches or exceeds 100 (the winning threshold).
            > If someone wins that player is announced as the winner. The game ends.
            > If no one wins yet it switches to the player.
        - Adds a click event listener to the "New Game" button.
            >  Triggers an initialization function to reset and start a game.
<br>

**The programming is well organized, follows best practices for keeping HTML, CSS and JavaScript separate, for clarity. In the JavaScript file strict mode is. DOM manipulation is used to keep the game running and providing interactive expxerience for players.**

<br>

**Try it out: 'https://htmlpreview.github.io/?https://github.com/fahim-ysr/Clash-of-Dices/blob/main/index.html'**
