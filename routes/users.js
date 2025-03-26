var express = require('express');
const db = require('../db');

var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const [rows] = await db.query('SELECT * FROM student');
  console.log("get students==>", rows);
  res.send(`respond with a resource = ${rows}`);
});

module.exports = router;
