
# Guess The Number

## Overview

The **Guess The Number** game is a simple web-based game where players try to guess a randomly generated number between 1 and 100. After each guess, the player is informed whether their guess is too high, too low, or correct.

## Features

- **Random Number Generation**: Each game generates a new random number between 1 and 100.
- **Feedback on Guess**: After entering a guess, users are informed if the number is too high, too low, or correct.
- **Responsive UI**: The game has a visually appealing, responsive design using Bootstrap.
- **Real-time Feedback**: Messages and background colors change dynamically based on the user's guess.

## Technologies Used

- **HTML**: Provides the structure for the game interface.
- **CSS**: Styles the game layout and design elements.
- **JavaScript**: Implements the game logic, random number generation, and real-time feedback.
- **Bootstrap**: Ensures a responsive and modern UI design.

## How It Works

1. A random number between 1 and 100 is generated when the page loads.
2. The player guesses the number by entering a value in the input field and clicking the **Check** button.
3. The game provides feedback:
   - If the guess is too high, the message "Too High! Try Again." is displayed.
   - If the guess is too low, the message "Too Low! Try Again." is displayed.
   - If the guess is correct, the message "Congratulations! You got it right." is displayed.
   - If an invalid input is entered, a prompt asks for a valid input.

## Future Enhancements

- Add a "Try Again" button to reset the game without reloading the page.
- Display the number of attempts it took to guess correctly.