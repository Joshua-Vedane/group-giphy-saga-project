# NPM
  [x] install packages
    [x] react-router-dom
    [x] react-redux
    [x] redux
    [x] material-ui/core
    [x] material-ui/icons
    [x] redux-logger
    [x] saga
    [x] dotenv

# CLIENT

  [x] two views for base features
    [x] search view
      [x] input for search terms
      [x] submit button / form
      [x] display area, show gifs on dom (material-ui cards)
      [x] button to favorite image
      [x] start small with giphy search results
    [x] favorites view (all on dom first)
      [x] display cards of favorited images
      [x] connected to table with image url's
      [ ] select to give each favorite a category

  [x] index.js
    [x] reducers
      [x] giphy api search results
      [x] favorites
      [x] categories
    [x] sagas
      [x] GET route from giphy
      [x] GET route for favorites table
      [x] POST to favorites
      [x] PUT route to favorites to assign category
      [x] DELETE route to delete a favorite

# SERVER
  [x] GET route from giphy
    [x] need to figure out api key stuff
    [x] dotenv file
  [x] GET route for giphy should be complete
  [x] complete POST route to favorites table
  [ ] complete PUT route to favorites table to assign category


# DB

[x] set up database
  [x] image favorite table, figure out what data we need
    [x] column INT REFERENCES 'category table'