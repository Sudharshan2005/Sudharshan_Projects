
# Image Resizing

## Overview

The **Image Resizing** project is a simple web application that allows users to resize an image dynamically. The user can increase or decrease the width of the image by clicking on respective buttons, and the image resizes in increments of 5px. The application also provides feedback when the image reaches its maximum or minimum size.

## Features

- **Dynamic Image Resizing**: Users can increase or decrease the image width by 5px increments.
- **Max and Min Width Limitations**: The image can be resized between a minimum of 100px and a maximum of 300px.
- **Error Messages**: If the user tries to resize the image beyond the allowed limits, an appropriate error message is displayed.
- **Responsive Design**: Built with Bootstrap, the layout adapts to different screen sizes.

## Technologies Used

- **HTML**: Provides the basic structure of the application.
- **CSS**: Adds styles for improving the visual appearance.
- **Bootstrap**: Ensures responsiveness and consistent styling across devices.
- **JavaScript**: Handles the logic for resizing the image and displaying error messages.

## How It Works

1. The application initially displays an image with a width of 200px.
2. Users can click the "+" button to increase the width or the "-" button to decrease it by 5px increments.
3. If the width exceeds 300px, an error message warns that the image is "Too big."
4. If the width goes below 100px, another message warns that the image is "Can't Visible."
5. The image width is displayed in real-time below the image.

## Future Enhancements

- Add a reset button to reset the image size to its default width.
- Add the ability to resize the image height dynamically.
- Improve the UI for better user experience.