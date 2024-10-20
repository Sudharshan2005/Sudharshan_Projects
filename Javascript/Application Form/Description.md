
# Application Form

## Overview

The **Application Form** project is designed to facilitate the process of adding new users by collecting their details such as name, email, working status, and gender. The form validates input data and submits it to a public API, ensuring a smooth user experience.

## Features

- **User Input**: Users can enter their name, email, select their working status, and choose their gender.
- **Validation**: Real-time validation checks ensure that required fields are filled out before submission.
- **Error Handling**: Displays error messages for invalid input, such as empty fields or existing email addresses.
- **API Integration**: Submits user data to a public API and handles responses accordingly.

## Technologies Used

- **HTML**: For the structure of the form.
- **CSS**: To style the form and enhance usability.
- **JavaScript**: For handling user input, form validation, and submitting data to the API.
- **Bootstrap**: To ensure responsive design and improve the visual appeal.

## How It Works

1. Users fill out the form by entering their name, email, selecting their working status, and choosing their gender.
2. As users input their data, real-time validation checks are performed.
3. Upon form submission, the application prevents default behavior, performs additional validation, and sends the collected data to the specified API endpoint.
4. If the email already exists, an error message is displayed.

## Future Enhancements

- Add more fields for additional user information.
- Implement client-side email format validation.
- Show success messages upon successful submission.
- Allow users to edit their details after submission.