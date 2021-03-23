# NOTES: Forkify Application

## Project Overview and Planning (I)

### USER STORIES

User story: Description of the applications functionality from the users perspective.
Common format: As a [type of user], I want [an action] so that [a benefit]

1. As a user, I want to **search for recipes**, so that I can find new ideas for meals
2. As a user, I want to be able to **update the number of servings**, so that I can cook a meal for a different number of people.
3. As a user, I want to **bookmark recipes**, so that I can review them later
4. As a user, I want to be able to **create my own recipes**, so that I have them all organized in the same app
5. As a user, I want to be able to **see my bookmarks and own recipes when I leave the app and come back later**, so that I can close the app safely after cooking

### FEATURES

1. **Search for recipes** =>

   - Search functionality: input field to send request to API with search keywords.
   - Display results with pagination
   - Display recipe with cooking time, servings and ingredients

1. **Update the number of servings** =>

   - Update all the ingredients according to current number of servings

1. **Bookmark recipes** =>

   - Bookmarking functionality: display list of all bookmarked recipes

1. **Create my own recipes** =>

   - User can download own recipes
   - User recipes will automatically be bookmarked
   - User can only see their own recipes, not recipes form other users

1. **Come back later** =>
   - Store bookmark data in the browser using local storage
   - On page load, read saved bookmarks form local storage and display

<br />

## Loading a Recipe from API
