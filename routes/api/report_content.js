// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const passport = require('passport');

// const ReportContent = require('../../models/ReportContent');
// const validateReportContentInput = require('../../validations/report_content');

// router.get('/', passport.authenticate('jwt', { session: false }), 
//   (req, res) => {
//     ReportContent.findAll()
//       .then(reportcontents => res.json(reportcontents))
//       .catch(err => res.status(404).json({ noreportcontentsfound: 'No reportcontents found' }));
//   }
// );

// router.post('/',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateReportContentInput(req.body);
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }
//     const newReportContent = new ReportContent({
//       title: req.body.title,
//       value: req.body.value,
//       content: req.body.content
//     });
//     newReportContent.save().then(reportcontent => res.json(reportcontent));
//   }
// );