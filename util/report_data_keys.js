
const reportDataKeys = {
    genderPronouns: {
      1: [['He','Him','His']],
      2: [['She','Her','Hers']],
      3: [['They','Them','Theirs']] 
    },
    overallScore: {
      1: ['%fname% has performed very unsatisfactorily in class and needs quick improvement to not only pass this class but proceed onto next level coursework in %subject%.', 'Unfortunately, I do not write this report with great pleasure. %fname% has failed to perform adequately in %class name% and must urgently show improvement before the next review period.', '%fname% has been a difficult student both behaviorly and acedamically, and must seek immediate improvement before the next review period.'],
      2: ['Academically, %fname% has performed unsatisfactorily in %class name% and %possessive pronoun% behaviour shows a need for more awareness of %possessive pronoun% peers and teachers.', 'Although %class name% is a nuanced subject that few are able to grasp immediately, %fname% does need to show improvement in %possessive pronoun% grades and comprehension of %subject%.', 'Unfortunately, %fname% has fallen behind in %subject% and needs to spend more time outside of class grapsing the subject.'],
      3: ['%fname% has performed satisfactorily in %class name% and is respectful to other students. Slight improvement in grasping concepts are still needed to continue to perform well on tests', '%fname% has an average grade in %class name%. I would recomend further attention to homework outside of class.', '%fname% has performed on average well enough to proceed in %possessive pronoun% academic career, although more attention to detail is needed to truly grasp %subject% well.'],
      4: ['I am happy to report that %fname% has performed well in %class name%. %possessive pronoun% understanding of %subject% has shown through in class through %possessive pronoun% participation and helping others on tough-to-grasp topics.', '%fname% has performed well in %class name%, and it has been a pleasure having %object pronoun% in my classroom.', 'I have enjoyed %fname%\'s participation in my class, and %posessive pronoun% understanding of %subject% shines through on tests and projects.'],
      5: ['It is with great pleasure to report that %fname% has performed outstandingly well in my class and has been a joy to teach.', 'It has been a joy not only to teach %fname% this year, but also see %object pronoun% grow tremendously in %possessive pronoun% grasp of the complex subject of %subject%. %fname%\'s grades are outstanding, and I see no immediate suggestions for improvement.', 'I have loved having %fname% in my classroom. %subject pronoun% &is/are& not only academically inclined in %subject% but also &is/are& respectful to other students in the classroom.'],
    },
    listensAttentively: {
      true: ['%subject pronoun% &is/are& very attentive.', '%subject pronoun% actively &listens/listen& to presentations and lectures as well as other students.', '%possessive pronoun% strongsuit is listening actively to presentations and lectures.'],
      false: ['%subject pronoun% &lacks/lack& focus.', '%subject pronoun% &is/are& not attentive and needs work in order to do well in this class.','%subject pronoun% is easily distracted and needs work on listening to the teacher and fellow students during classtime.'],
    },
    helpsOthers: {
      true: ['%subject pronoun% &is/are& collaborative and helpful.', 'Students look to %fname% for help with %subject% who is always ready and able to help %possessive pronoun% fellow students.', '%subject pronoun% &is/are& a kind student who &collaborates/collaborate& with students with pleasure.'],
      false: ['%subject pronoun% &is/are& not inclined to work with others.', '%subject pronoun% &finds/find& it difficult to constructively collaborate in a group-setting.', '%subject pronoun% &is/are& disruptive and have challenges with group work.']
    },
    participatesOften: {
      true: ['%subject pronoun% &is/are& an active participant.', '%subject pronoun% constructively &participates/participate& during classtime.', '%subject pronoun% &shows/show& knowledge of the subject through %possessive pronoun% participation in class.'],
      false: ['%subject pronoun% &is/are& not active in class.', 'It may lend well to understanding the subject better if %fname% participated more often during classtime.', '%subject pronoun% should be more active in class.']
    },
    asksQuestions: {
      true: ['%subject pronoun% &is/are& comfortable asking questions.', '%subject pronoun% &asks/ask& relevant questions that lend to a good class discussion.', 'I am happy that %fname% is not shy about asking questions about concepts that %subject pronoun% &does/do& not fully understand.'],
      false: ['%subject pronoun% &does/do& not ask questions, which would help to better %possessive pronoun% understanding of the subject.', 'It would furhter classroom collaboration and dialogue if %fname% would participate more in class.', '%subject pronoun% needs to raise %possessive pronoun% participation grade in my class.']
    },
    goodAttendance: {
      true: ['%subject pronoun% &has/have& excellent attendance.', '%subject pronoun% &has/have& perfect attendance.'],
      false: ['%subject pronoun% &misses/miss& class too often.', '%subject pronoun% &has/have& poor attendance, which calls for immediate improvement.']
    },
    onTime: {
      true: ['%subject pronoun% &is/are& very punctual.', '%subject pronoun% &has/have& never been late without giving notice beforehand.'],
      false: ['%subject pronoun% &is/are& often tardy.', '%subject pronoun% &is/are& late too often, which needs to be addressed.']
    },
    polite: {
      true: ['%subject pronoun% &is/are& very polite and respectful.', '%subject pronoun% &is/are& respectful to teachers and fellow students.', 'I have enjoyed teaching %fname%. %subject pronoun% &is/are& very respectful and self-aware.'],
      false: ['%subject pronoun% &is/are& often rude.', '%subject pronoun% &is/are& disrespectful to teachers and fellow students.', '%subject pronoun% &needs/need& to have more respect and self-awareness for those around %object pronoun%.']
    },
    notDisruptive: {
      true: ['%subject pronoun% &is/are& respectful of classtime.', '%subject pronoun% &is/are& not disruptive during classtime.'],
      false: ['%subject pronoun% often &distracts/distract& the flow of class.', '%subject pronoun% &is/are& often disruptive in class.']
    },
    homeworkCompletion: {
      true: ['%subject pronoun% &completes/complete& homework adequately.', '%subject pronoun% always &fulfill/fulfills& homework assignments.'],
      false: ['%subject pronoun% &has/have& incomplete homework more often than not.', 'Homework completion needs to improve for %fname%.']
    },
    category: {
      1: ['This %category% has been hard for %fname%.', '%fname% has performed poorly in %category%.', '%fname% urgently needs to improve in %category%.'],
      2: ['Although %category% is challenging, %fname% needs to improve performance.', '%fname% is falling behind in %category%.', 'If no improvement is shown, %fname% may need to retake %category%.'],
      3: ['%fname% has performed satisfactorily in %category%.', '%fname% is performing on par with the class average in %category%.', 'Although performing satisfactorily, there is room for improvement in %category%.'],
      4: ['%fname% has done well in %category%.', '%fname% is showing promise in %category%.'],
      5: ['I\'m impressed with %fname%\'s grasp of %category%.', '%fname% has shown %possessive pronoun% academic prowess in %category%.', '%fname% has continued to excel in %category%.'],
    }
}


module.exports = reportDataKeys


// LEGEND
// %subject pronoun% => He, She, They
// %fname% => first name of student
// %subject% => subject category of class, i.e. math or history
// %class name% => name of class
// %posessive pronoun% => her, his, their
// %object pronoun% => her, him, them
// %category% => teacher-made category


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
// const reportStr = 'a long string for a review'
// const verbsRegular = ['complete', 'fulfill', 'distract', 'lack', 'show', 'miss', 'need', 'participate']
// let verbsObj = {}
// if (genderPronouns[0] !== 'they') {
//   verbsObj['be'] = 'is'
//   verbsObj['have'] = 'has'
//   verbsObj['do'] = 'does'
//   verbsRegular.forEach(verb => {
//     if (verb[verb.length - 1] !== 's') {
//       verbsObj[verb] = verb + 's'
//     } else if (verb[verb.length - 1] === 's') {
//       verbsObj[verb] = verb + 'es'
//     }
//   })
// } else {
//   verbsObj['be'] = 'are'
//   verbsObj['have'] = 'have'
//   verbsObj['do'] = 'do'
//   verbsRegular.forEach(verb => {
//       verbsObj[verb] = verb
//   })
// }
// // Now we have key value pairs for verbs. we should change the report_data_keys to correspond to the keys in the verbsObj.