
# Go Rest Console

## Overview

The **Go Rest Console** application allows users to interact with RESTful APIs by sending requests and receiving responses. This tool is designed for developers and API testers to test and debug API calls easily.

## Features

- **Request URL Input**: Users can specify the API endpoint they want to interact with.
- **Request Method Selection**: Users can choose between different HTTP methods (e.g., POST, PUT) for their requests.
- **Request Body Input**: Users can enter the body of the request in JSON format.
- **Response Display**: The application shows the response status and body in a user-friendly format.
- **Error Handling**: The application validates the URL input and provides feedback if the input is missing.

## Technologies Used

- **HTML**: Structures the layout of the application.
- **CSS**: Styles the application for a clean and modern interface.
- **JavaScript**: Handles the logic for sending API requests and processing responses.
- **Bootstrap**: Utilizes responsive design components for better usability on different devices.

## How It Works

1. Users enter a request URL and select an HTTP method (POST or PUT).
2. If necessary, users can provide a JSON body for the request.
3. Upon submitting the form, the application validates the URL and sends a request to the specified API endpoint.
4. The application displays the response status and body received from the API.

## Future Enhancements

- Support additional HTTP methods (GET, DELETE).
- Allow users to save frequently used API requests.
- Implement a feature to display request headers.