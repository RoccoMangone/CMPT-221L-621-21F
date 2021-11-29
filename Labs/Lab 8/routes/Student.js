let express = require('express');
let router = express.Router();
let Person = require('../models/Student');

router.get("/person", function (req, res) {
    res.render('Student')
})

router.post("/person", function (req, res) {
    
    Person.create(req.body.person, function (err, person) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/person/person');
        }
    })
    
})

module.exports = router;