// LEGEND
// %subject pronoun% => He, She, They
// %fname% => first name of student
// %subject% => subject category of class, i.e. math or history
// %class name% => name of class
// %posessive pronoun% => her, his, their
// %object pronoun% => her, him, them
// %category% => teacher-made category

const { genderPronouns } = require("../../../util/report_data_keys")


// VERBS => Conjugate based on singular vs plural (i.e. based on subj choice.)
// &is/are&
// &has/have&
// [distracts/distract]
// [completes/complete]
// [fulfill/fulfills]
// [misses / miss]
// &does/do&
// &shows/show&
// [lacks/lack]
// [participates/participate]
// [needs/need]


// const replacement = (whateverStr, someVar) => {
//   str.replace(whateverStr, someVar)
// }

// first check for type of pronoun. set it = to variable, verb index => 
// const verbIndex = genderPronouns[0] === 'They' ? 
// let wordList = `subjectPronoun: this.props.genderPronoun, fname: this.props.student.fname, subject: this.props.class.subject...`;

// let regexpNames =  /subjectPronoun: (\w+), fname: (\w+), subject: (\w+)/mg;
// let replacerFunction = str.replaceAll(regexpNames, wordList);
// do {
//   console.log(`Hello ${match[1]} ${match[2]}`);
// } while ((match = regexpNames.exec(wordList)) !== null);

const subjectPronoun = genderPronouns[0];
const objectPronoun = genderPronouns[1];
const possessivePronoun = genderPronouns[2];



verbReplacement = (genderPronouns, body) => {
  // const reportStr = 'a long string for a review'
  const verbsRegular = ['complete', 'fulfill', 'distract', 'lack', 'show', 'miss', 'need', 'participate']
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
  // return verbsObj // works!
  Object.keys(verbsObj).forEach(verbKey => {
    body = body.replace(/verbKey/g, verbsObj[verbKey])
  })

  console.log(body)
}

let pronouns = ['She','Her','Her']
let body = '%fname% has performed very unsatisfactorily in class and needs quick improvement to not only pass this class but proceed onto next level coursework in %subject%.  %subjectPronoun% &be& an active participant.  %subjectPronoun% &have& excellent attendance.'

console.log(verbReplacement(pronouns, body))