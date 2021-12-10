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

    const reqBody = req.body
    const reqBodyKeys = Object.keys(reqBody)

    // send this up
    const reportContentObj = {}
    // console.log(reqBody)
    // const randomSample = array => array[Math.floor(Math.random() * array.length)]

    reqBodyKeys.forEach(key => {
      let reqBodyValue = reqBody[key]
      let reportContent

      if (key !== 'categories' && key !== 'studentId') {
        let reportContentKeys = Object.values(reportDataKeys[key][reqBodyValue])
        console.log(reportContentKeys)
        console.log(typeof reportContentKeys)
        reportContent = reportContentKeys[Math.floor(Math.random() * reportContentKeys.length)]
        reportdataObj[key] = reqBody[key]
        reportContentObj[key] = reportContent
      } else if (key === 'studentId') {
        reportdataObj[key] = reqBody[key]
        reportContentObj['studentId'] = reqBody['studentId']
      } else if (key === 'categories') {
        // debugger

        // set k-v pair to the object to save to db
        reportdataObj[key] = reqBody[key]

        // loop over categories value array to get indiv k-v pairs
        reqBody[key].forEach(cat => {
          let categoryName = Object.keys(cat)[0];
          let reportCategoryScore = Object.values(cat)[0]
          let reportCategoryKeys = reportDataKeys["category"][reportCategoryScore]
          reportContentObj[categoryName] = reportCategoryKeys[Math.floor(Math.random() * reportCategoryKeys.length)]
        })
      } else {

      }
    })

    const newReportData = new ReportData(reportdataObj);

    newReportData.save().then(reportdata => {
      reportContentObj['reportDataId'] = reportdata.id
      res.json(reportContentObj)
    });
  }
);

module.exports = router;
