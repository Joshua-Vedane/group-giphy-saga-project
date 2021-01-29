const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM "category" ORDER BY "name" ASC;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// POST route to add new category to table
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "category" VALUES ($1);`;
  pool
    .query(queryText, [req.body.newCategoryName])
    .then(res.sendStatus(201))
    .catch((err) => {
      console.log('error in post', err);
      res.sendStatus(500);
    });
});

module.exports = router;
