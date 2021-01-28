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

  [ ] two views for base features
    [ ] search view
      [ ] input for search terms
      [ ] submit button / form
      [ ] display area, show gifs on dom (material-ui cards)
      [ ] button to favorite image
      [ ] start small with giphy search results
    [ ] favorites view (all on dom first)
      [ ] display cards of favorited images
      [ ] connected to table with image url's
      [ ] select to give each favorite a category

  [ ] index.js
    [ ] reducers
      [ ] giphy api search results
      [ ] favorites
      [ ] categories
    [ ] sagas
      [ ] GET route from giphy
      [ ] GET route for favorites table
      [ ] POST to favorites
      [ ] PUT route to favorites to assign category


# SERVER
  [ ] GET route from giphy
    [ ] need to figure out api key stuff
    [ ] dotenv file
  [ ] GET route for giphy should be complete
  [ ] complete POST route to favorites table
  [ ] complete PUT route to favorites table to assign category


# DB

[ ] set up database
  [ ] image favorite table, figure out what data we need
    [ ] column INT REFERENCES 'category table'