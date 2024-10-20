

# Wikipedia Search

## Overview

The **Wikipedia Search** project is a web application that allows users to search for articles on Wikipedia by typing keywords into a search bar. It retrieves relevant articles and displays the results, including titles, descriptions, and links to the articles, providing users with quick access to information.

## Features

- **Search Functionality**: Users can input keywords to search for related Wikipedia articles.
- **Dynamic Loading**: Displays a loading spinner while fetching search results.
- **Result Display**: Shows article titles, links, and brief descriptions for easy navigation.
- **External Links**: Users can click on article titles or links to open the articles in a new tab.

## Technologies Used

- **HTML**: Structures the application and provides the necessary elements.
- **CSS**: Styles the interface, ensuring a clean and user-friendly design.
- **JavaScript**: Implements the logic for searching and displaying results by interacting with the Wikipedia API.
- **Bootstrap**: Enhances the layout and responsiveness of the application.

## How It Works

1. Users type a keyword into the search bar and press **Enter**.
2. The application sends a request to the Wikipedia API to fetch related articles.
3. While results are being loaded, a spinner is displayed to indicate that the search is in progress.
4. Once results are retrieved, they are displayed below the search bar, showing the title, URL, and description of each article.

## Future Enhancements

- Implement pagination for search results.
- Add filtering options to refine search results.
- Improve error handling for invalid or no search results.