const express = require('express');
const router = express.Router();
require('dotenv').config();

// need to figure out query value
router.post('/', (req, res) =>{
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body}&limit=4`)
  .then(response => {
    console.log(response.data);
    res.send(response.data);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  })
})
// router.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=tacos&limit=4`)


module.exports = router;