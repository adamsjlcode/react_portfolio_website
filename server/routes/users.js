const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err ))
});

router.route('/add').post((req, res) => {
    
    const username = req.body.username;
    const admin = req.body.admin;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const url = req.body.url;
    
    const newUser = new User({
        username, admin, first_name, last_name, email, phone, address, url
    });
    newUser.save()
    .then(users => res.json('New User Added'))
    .catch(err => res.status(400).json('Error: ' + err ))
});

module.exports = router;