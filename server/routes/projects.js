const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
    Project.find()
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;
    const newProject = new Project({username, description, duration, date});

    newProject.save()
    .then(users => res.json('New Project Added'))
    .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(project => res.json('Project Deleted'))
    .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/update/:id').post((req, res) => {
    Project.findById(req.params.id)
    .then(project => { 
        project.username = req.body.username;
        project.description = req.body.description;
        project.duration = Number(req.body.duration);
        project.date = Date.parse(req.body.date);

        project.save()
        .then(() => res.json('Project Updated'))
        .catch(err => res.status(400).json('Error: ' + err ));
    })
    .catch(err => res.status(400).json('Error: ' + err ));
});

module.exports = router;