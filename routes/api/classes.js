const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Class = require('../../models/Class');
const validateClassInput = require('../../validations/classes');

router.get('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Class.find()
    .sort({ date: -1 })
    .then(classes => res.json(classes))
    .catch(err => res.status(404).json({ noclassesfound: 'No classes found' }));
});

router.get('/:id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Class.findById(req.params.id)
    .then(klass => res.json(klass))
    .catch(err =>
      res.status(404).json({ noclassfound: 'No class found with that ID' })
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateClassInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const note = req.body.note ? req.body.note : ''

    const newClass = new Class({
      name: req.body.name,
      user: req.user.id,
      subject: req.body.subject,
      note
    });

    newClass.save().then(klass => res.json(klass));
  }
);

module.exports = router;