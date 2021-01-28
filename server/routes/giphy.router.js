const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

// need to figure out query value
<<<<<<< HEAD
router.post('/', (req, res) => {
  console.log(req.body);
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body.newSearch}&limit=10`
    )
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});
=======
router.post('/', (req, res) =>{
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body.newSearch}&limit=4`)
  .then(response => {
    console.log(response.data);
    res.send(response.data);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  })
})
>>>>>>> 0f004b2e784605414bd6a18eb07c22687749157a
// router.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=tacos&limit=4`)

module.exports = router;
