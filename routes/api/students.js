const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Student = require('../../models/Student');
const validateStudentInput = require('../../validations/students');

router.get('/', passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    Student.find({ user: req.user.id })
      .then(students => res.json(students))
      .catch(err => res.status(404).json({ nostudentsfound: 'No students found' }));
  }
);

router.get('/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const studentId = (req.params.id)
    Student.find({ user: req.user.id })
      .then(students => {
        const student = students.filter(student => student.id === studentId)[0]
        if (student) {
          res.json(student)
        } else {
          res.status(403).json({ noaccess: 'No student found belonging to the current user with that ID'})
        }
      })
      .catch(err => {
        res.status(404).json({ nostudentfound: 'No student found with that ID' })
      }
      );
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateStudentInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const note = req.body.note ? req.body.note : ''
    const newStudent = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      user: req.user.id,
      note
    });

    newStudent.save()
      .then(student => res.json(student))
      .catch(err => res.status(400).send(err))
  }
);

router.patch('/:id/edit',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateStudentInput(req.body);
    Student.findByIdAndUpdate(req.params.id,
      req.body,
      {new: true, useFindAndModify: false},
      (err, student) => {
        if (err) return res.status(500).send(err);
        return res.json(student);
      }
    )
  }
)

router.delete('/', 
passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Student.findByIdAndRemove(req.body.id, (err, student) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json(`${student.firstName} ${student.lastName} successfully deleted.`);
    })  
  }
)

module.exports = router;