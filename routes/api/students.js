const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Student = require('../../models/Student');
const validateStudentInput = require('../../validations/students');
const Report = require('../../models/Report');
const validateReportInput = require('../../validations/reports');

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
    const students = req.body.student ? [req.body.student] : req.body.students
    // const students = req.body.students
    let studentsArrRes = []
    students.forEach(student => {
      let studentNamesArr = student.split(' ')
      let fname = studentNamesArr[0]
      let lname = studentNamesArr[1]
      let nameData = {firstName: fname, lastName: lname}
      let { errors, isValid } = validateStudentInput(nameData);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      let note = req.body.note ? req.body.note : ''
      let newStudent = new Student({
        firstName: fname,
        lastName: lname,
        user: req.user.id,
        note
      });
      newStudent.save()
        .then(student => studentsArrRes.push(student))
        .catch(err => res.status(400).send(err))
    })

    res.json(studentsArrRes)
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

router.patch('/:id/reports', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const studentId = (req.params.id)
    Student.find({ user: req.user.id })
      .then(students => {
        const student = students.filter(student => student.id === studentId)[0]
        if (student) {
          const { errors, isValid } = validateReportInput(req.body);
          if (!isValid) {
            return res.status(400).json(errors);
          }
          const newReport = new Report({
            user: req.user.id,
            student: studentId,
            body: req.body.body
          });
          newReport.save()
            .then(report => res.json(report))
            .catch(err => res.status(400).json(err))
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

router.get('/:id/reports', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const studentId = (req.params.id)
    Report.find({ student: studentId })
      .then(reports => {
        res.json(reports)
      })
      .catch(err => res.status(404).json({ noreportsfound: 'No reports found.' }))
  }
);

module.exports = router;