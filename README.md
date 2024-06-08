# Camper Rent Application

This project is a web application for a company that rents out campers in Ukraine. It allows users to view a catalog of available campers, add their favorite campers to a list, and see detailed information about each camper. The application is built using React, Redux, and Axios, and it follows the given technical requirements.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API](#api)

## Features

- **Home Page**: Provides a general description of the services offered by the company.
- **Catalog Page**: Displays a list of available campers with options to filter by location, equipment, and type.
- **Favorites Page**: Shows the list of campers the user has added to their favorites.
- **Persistent State**: The favorite status of a camper persists even after the page is refreshed.
- **Pagination**: Initially loads 4 camper listings with a "Load More" button to fetch additional listings.
- **Modal Windows**: Provides detailed information about each camper and includes a booking form with validation.
- **Filtering Options**: Users can filter campers based on location, equipment, and type.
- **Responsive Design**: The application is styled to be responsive and visually appealing.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests.
- **MockAPI**: Mock backend service for handling API requests.
- **CSS/SCSS**: For styling the application.
- **Vite**: Build tool for faster development.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Serhii-Kysil/camper-rent.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run dev
   ```

## API

The application uses MockAPI to manage camper data. You can create your own MockAPI resource to test the application.

- **Resource Name**: `adverts`
- **Advert Fields**:
  - `_id`
  - `name`
  - `price`
  - `rating`
  - `location`
  - `adults`
  - `children`
  - `engine`
  - `transmission`
  - `form`
  - `length`
  - `width`
  - `height`
  - `tank`
  - `consumption`
  - `description`
  - `details`
  - `gallery`
  - `reviews`

Populate the resource with at least 13 adverts.
