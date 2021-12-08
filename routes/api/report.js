const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Report = require('../../models/Report');
const validateReportInput = require('../../validations/reports');

router.get('/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const reportId = (req.params.id)
    Report.find({ user: req.user.id })
      .then(reports => {
        const report = reports.filter(report => report.id === reportId)[0]
        if (report) {
          res.json(report)
        } else {
          res.status(403).json({ noaccess: 'No report found belonging to the current user with that ID'})
        }
      })
      .catch(err => {
        res.status(404).json({ noclassfound: 'No report found with that ID' })
      }
    );
  }
);

module.exports = router