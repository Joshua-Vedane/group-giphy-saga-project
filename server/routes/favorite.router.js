const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT "favorites".id, "favorites".image_url, "category".name 
                    FROM "favorites"
                    LEFT JOIN "category" ON "favorites".category_id = "category".id;`;
  pool.query(queryText)
    .then((result) => {
      console.log(result.rows);
      
      res.send(result.rows);
    }).catch((error) => {
      console.log('ERROR completing SELECT favorites', error);
      res.sendStatus(500)
    })
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO "favorites" ("image_url") 
                     VALUES($1);`;
  pool.query(queryText, [newFavorite.image_url])
  .then((result) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('error in adding new Favorite', error);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const newCategory = req.body.id;
  const favoriteItem = req.params.id
  const queryText = `UPDATE "favorites"
                     SET "category_id"= $1
                     WHERE "favorites".id = $2`
  pool.query(queryText, [newCategory, favoriteItem])
  .then(() => {res.sendStatus(200);
  }).catch((error) => {
    console.log('error changing new category', error);
    res.sendStatus(500);
  });
  // req.body should contain a category_id to add to this favorite image
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const queryText = `DELETE FROM "favorites" WHERE id=$1;`;
  pool.query(queryText, [req.params.id])
    .then(() => {res.sendStatus(200);
    }).catch((error) => {
      console.log('ERROR in DELETE', error);
      res.sendStatus(500);
    })
});

module.exports = router;
