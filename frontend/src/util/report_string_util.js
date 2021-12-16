// const { genderPronouns } = require("../../../util/report_data_keys")

// const subjectPronoun = genderPronouns[0];
// const objectPronoun = genderPronouns[1];
// const possessivePronoun = genderPronouns[2];

export const verbReplacement = (genderPronouns, fname, className, subject, body) => {
  const verbsRegular = ['complete', 'fulfill', 'distract', 'lack', 'show', 'miss', 'need', 'participate', 'ask', 'listen', 'collaborate', 'find']
  let verbsObj = {}
  if (genderPronouns[0] !== 'They') {
    verbsObj['&be&'] = 'is';
    verbsObj['&have&'] = 'has';
    verbsObj['&do&'] = 'does';
    verbsRegular.forEach(verb => {
      if (verb[verb.length - 1] !== 's') {
        verbsObj['&' + verb + '&'] = verb + 's'
      } else if (verb[verb.length - 1] === 's') {
        verbsObj['&' + verb + '&'] = verb + 'es'
      }
    })
  } else {
    verbsObj['&be&'] = 'are';
    verbsObj['&have&'] = 'have';
    verbsObj['&do&'] = 'do';
    verbsRegular.forEach(verb => {
      verbsObj['&' + verb + '&'] = verb
    })
  }
  let parametersObj = { '%fname%': fname, '%className%': className, '%subject%': subject, '%SubjectPronoun%': genderPronouns[0], '%objectPronoun%': genderPronouns[1], '%PossessivePronoun%': genderPronouns[2], '%subjectPronoun% ': genderPronouns[0].toLowerCase(), '%possessivePronoun%': genderPronouns[2].toLowerCase() }
  let concatObj = Object.assign(verbsObj, parametersObj)

  Object.keys(concatObj).forEach(concatKey => {
    body = body.replaceAll(concatKey, concatObj[concatKey])
  })

  return body;
}