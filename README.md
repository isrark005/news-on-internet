# News on Internet App

## Overview
The "News on Internet" app is a React-based web application designed to fetch and display news articles based on user input. Users can search for news articles using keywords, and the app will provide a list of relevant articles along with their details.

## Features
- **Search Functionality**: Users can enter search terms to find news articles related to their interests.
- **Article Display**: Retrieved articles are displayed in a responsive and user-friendly manner.
- **No Results Handling**: The app gracefully handles scenarios where no search results are found.

## Technologies Used
- **React**: The front-end framework for building user interfaces.
- **CSS (Tailwind CSS)**: Used for styling and responsive design.
- **useState and useEffect Hooks**: Leveraged to manage component state and perform side effects.

## File Structure
- **App.jsx**: The main component that orchestrates the application's functionality.
- **App.css**: The stylesheet for styling the App component.
- **hooks/news.js**: Contains the logic for fetching news articles based on user input.
- **components/Input.jsx**: A component for taking user input and triggering search actions.
- **components/ArticleCard.jsx**: A component responsible for rendering individual news articles.

