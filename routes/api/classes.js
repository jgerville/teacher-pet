const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Class = require('../../models/Class');
const validateClassInput = require('../../validations/classes');

router.get('/', passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    Class.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(classes => res.json(classes))
      .catch(err => res.status(404).json({ noclassesfound: 'No classes found' }));
  }
);

router.get('/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Class.findById(req.params.id)
    const classId = (req.params.id)
    Class.find({ user: req.user.id })
      .then(klasses => {
        const klass = klasses.filter(klass => klass.id === classId)[0]
        if (klass) {
          res.json(klass)
        } else {
          res.status(403).json({ noaccess: 'No class found belogning to the current user with that ID'})
        }
      })
      .catch(err => {
        console.log('in .catch')
        res.status(404).json({ noclassfound: 'No class found with that ID' })
      }
      );
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateClassInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const note = req.body.note ? req.body.note : ''
    console.log('id', req.user.id)
    console.log('_id', req.user._id)
    const newClass = new Class({
      name: req.body.name,
      user: req.user.id,
      subject: req.body.subject,
      note
    });

    newClass.save().then(klass => res.json(klass));
  }
);

router.delete('/', 
passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Class.findById(req.body.id)
      .then(klass => {
        if (klass) {
          klass.delete()
          res.json('Class deleted successfully.')
        } else {
          res.status(404).json({ noclassfound: 'No class found with that ID.  Cannot delete.' })
        }
      })    
  }
)

module.exports = router;