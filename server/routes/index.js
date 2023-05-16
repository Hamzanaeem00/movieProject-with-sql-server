var express = require('express');
var router = express.Router();
const sql = require("../dboperation")
const   Movie = require('../movie');
const dboperation = require('../dboperation');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// test Connection

router.get('/testconnect', function(req, res, next) {
  sql.getCustomers();
  res.render('index', { title: 'Express' });
});

router.get("/getdata_withQuery", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result);
    console.log(result);
  });
});
router.post('/movies', function(req, res, next) {
  const { id, name, email, contact, movie } = req.body;
  const newMovie = new Movie(id, name, email, contact, movie);

  dboperation.createData(newMovie).then(result => {
    res.status(201).json(result);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Internal Server Error');
  })
});






// let data = new Movie (19 , 'hello', 'hello@gmail.com' , '0300-0000000', 'The-Nun')
// console.log(data);

// dboperation.createdata_withQuery(data)

module.exports = router;
