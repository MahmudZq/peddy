# Peddy | Pet Zone

A dynamic pet listing platform that allows users to explore different pet categories, view detailed pet information, and interact with pets by liking them, sorting by price, and adopting them. The app fetches data from API to display categories and detailed information about each pet.

## Features

1. **Browse by Categories**: View and filter pets based on different categories (e.g., dogs, cats, etc.).
2. **Pet Details**: Each pet has a dedicated details modal that shows detailed information such as breed, price, gender, vaccination status, and more.
3. **Like Pets**: When a user likes a pet, it is added to a "liked pets" section; when a user changes mind (unlike) a pet, it gets removed from that section.
4. **Sort Pets by Price**: Pets can be sorted from the highest to lowest price.
5. **Adopt Pets**: Users can adopt a pet, and a countdown timer is shown when a pet is accepted for adoption. After the timer, the adoption button is disabled.

## ⚙️ ES6 Features Used

- **Async/Await**: Used for asynchronous data fetching and handling the API responses.
- **Arrow Functions**: Simplified function syntax used for callbacks and event handlers.
- **Template Literals**: Used to dynamically create HTML structures by embedding JavaScript expressions.
- **Destructuring Assignment**: Used to extract values from objects returned by the API (e.g., `const { pet_name, breed, price } = pet;`).

## Live Link

You can view the live version of this project at: [Live Demo](https://peddy-pet-zone.netlify.app/)

## How to Use

1. Clone the repository:
    ```bash
    git clone https://github.com/MahmudZq/peddy.git
    ```
2. Open the `index.html` in any modern web browser to run the application.

## File Structure

- **index.html**: Main HTML file that sets up the basic layout and structure of the page.
- **index.js**: Contains all the JavaScript logic to load categories, fetch pet data, handle likes, adoption, and sorting.

## API Endpoints

- **Categories**: Fetches all pet categories from `https://openapi.programming-hero.com/api/peddy/categories`.
- **Pets**: Fetches a list of pets from `https://openapi.programming-hero.com/api/peddy/pets`.
- **Pet Details**: Fetches detailed information about a specific pet using the pet ID from `https://openapi.programming-hero.com/api/peddy/pet/{id}`.

## Example Usage

```js
// Load categories and pet data
loadCategory();
loadCards();
