const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const ReportData = require('../../models/ReportData');
const validateReportDataInput = require('../../validations/report_data');

router.get('/', passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    ReportData.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(reportdata => res.json(reportdata))
      .catch(err => res.status(404).json({ noreportdatafound: 'No ReportData found' }));
  }
);

router.get('/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const reportDataId = (req.params.id)
    ReportData.find({ user: req.user.id })
      .then(reportdata => {
        const reportdatum = reportdata.filter(reportdatum => reportdatum.id === reportDataId)[0]
        if (reportdata) {
          res.json(reportdata)
        } else {
          res.status(403).json({ noaccess: 'No report data found belonging to the current user with that ID'})
        }
      })
      .catch(err => {
        res.status(404).json({ noclassfound: 'No report data found with that ID' })
      }
    );
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReportDataInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newReportData = new ReportData({
      user: req.user.id,
      student: req.body.studentId,
      genderPronouns: req.body.genderPronouns,
      overallScore: req.body.overallScore
    });
    newReportData.save().then(reportdata => res.json(reportdata));
  }
);

module.exports = router;