const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const ReportData = require('../../models/ReportData');
const validateReportDataInput = require('../../validations/report_data');
const reportDataKeys = require('../../util/report_data_keys')

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
        if (reportdatum) {
          res.json(reportdatum)
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

    const reportdataObj = {user: req.user.id}
    Object.keys(req.body).forEach(key => {
      reportdataObj[key] = req.body[key]
    })

    console.log(reportdataObj)

    const newReportData = new ReportData(reportdataObj);

    const reqBody = req.body
    const reqBodyKeys = Object.keys(req.body)
    const reportContentObj = {}
    reportContentObj['studentId'] = reqBody[reqBodyKeys.shift()]
    reqBodyKeys.forEach(key => {
      let reqBodyValue = reqBody[key]
      let reportContent 
      if (reportDataKeys[key] !== 'categories') {
        reportContent = reportDataKeys[key][reqBodyValue]
      } else {
        // get the value from the req body obj categories
        reportContent = reportDataKeys['category'][reqBodyValue]
      }
      reportContentObj[key] = reportContent
    })
    newReportData.save().then(reportdata => res.json(reportContentObj));
  }
);

module.exports = router;