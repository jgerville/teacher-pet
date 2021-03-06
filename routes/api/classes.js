const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Class = require('../../models/Class');
const Student = require('../../models/Student')
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
    const classId = (req.params.id)
    Class.find({ user: req.user.id })
      .then(klasses => {
        const klass = klasses.filter(klass => klass.id === classId)[0]
        if (klass) {
          res.json(klass)
        } else {
          res.status(403).json({ noaccess: 'No class found belonging to the current user with that ID'})
        }
      })
      .catch(err => {
        res.status(404).json({ noclassfound: 'No class found with that ID' })
      }
    );
  }
);

router.get('/:id/students', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const classId = (req.params.id)
    Class.find({ user: req.user.id })
      .then(klasses => {
        const klass = klasses.filter(klass => klass.id === classId)[0]
        if (klass) {
          let studentsArr = []
          klass.students.forEach(student => {
            studentObj = Student.find(student)
            studentsArr.push(studentObj)
          })
          res.json(studentsArr)
        } else{ 
          res.status(403).json({ noaccess: 'No class found belonging to the current user with that ID' })
        }
      })
      .catch(err => {
        res.status(404).json({ noclassfound: 'No class found with that ID' })
      }
      );
  }
);

router.patch('/:id/students', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const classId = (req.params.id)
    Class.find({ user: req.user.id })
      .then(klasses => {
        const klass = klasses.filter(klass => klass.id === classId)[0]
        if (klass) {
          const studentIds = req.body.studentIds
          studentIds.forEach(studentId => {
            if (!klass.students.includes(studentId)) {
              klass.students.push(studentId)
              Student.find({ _id: studentId}).then((studentArr) => {
                studentArr[0].classes.push(klass.id)
                studentArr[0].save()
              })
            }
          })
          klass.save()
          res.json(klass)
        } else{ 
          res.status(403).json({ noaccess: 'No class found belonging to the current user with that ID' })
        }
      })
      .catch(err => {
        res.status(404).json({ noclassfound: 'No class found with that ID' })
      }
      );
  }
);

router.delete('/:id/students', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const classId = (req.params.id)
    Class.find({ user: req.user.id })
      .then(klasses => {
        const klass = klasses.filter(klass => klass.id === classId)[0]
        if (klass) {
          const studentId = req.body.studentId
          const index = klass.students.indexOf(studentId)
          klass.students.splice(index, 1)
          klass.save()
          res.json(klass.students)
        } else {
          res.status(403).json({ noaccess: 'No class found belonging to the current user with that ID' })
        }
      })
      .catch(err => {
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
    const newClass = new Class({
      name: req.body.name,
      user: req.user.id,
      subject: req.body.subject,
      note
    });

    newClass.save().then(klass => res.json(klass));
  }
);

router.patch('/:id/edit',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateClassInput(req.body);
    Class.findByIdAndUpdate(req.params.id,
      req.body,
      {new: true, useFindAndModify: false},
      (err, klass) => {
        if (err) return res.status(500).send(err);
        return res.json(klass);
      }
    )
  }
)

router.delete('/:classId', 
passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const classId = req.params.classId
    Class.findById(classId)
      .then(klass => {
        if (klass) {
          if (klass.students.length > 0) {
            klass.students.forEach(studentId => {
              Student.findById(studentId)
                .then(student => {
                  if (student) {
                    const index = student.classes.indexOf(classId)
                    student.classes.splice(index, 1)
                    student.save()
                  }
                })
            })
          }
          klass.delete()
          res.json('Class deleted successfully.')
        } else {
          res.status(404).json({ noclassfound: 'No class found with that ID.  Cannot delete.' })
        }
      })    
  }
)

module.exports = router;