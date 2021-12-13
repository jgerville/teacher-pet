
const reportDataKeys = {
    genderPronouns: {
      1: [['He','him','His']],
      2: [['She','her','Her']],
      3: [['They','them','Their']] 
    },
    overallScore: {
      1: ['%fname% has performed very unsatisfactorily in class and needs quick improvement to not only pass this class but proceed onto next level coursework in %subject%.', 'Unfortunately, I do not write this report with great pleasure. %fname% has failed to perform adequately in %className% and must urgently show improvement before the next review period.', '%fname% has been a difficult student both behaviorally and academically, and must seek immediate improvement before the next review period.'],
      2: ['Academically, %fname% has performed unsatisfactorily in %className% and %possessivePronoun% behaviour shows a need for more awareness of %possessivePronoun% peers and teachers.', 'Although %className% is a nuanced subject that few are able to grasp immediately, %fname% does need to show improvement in %possessivePronoun% grades and comprehension of %subject%.', 'Unfortunately, %fname% has fallen behind in %subject% and needs to spend more time outside of class grasping the subject.'],
      3: ['%fname% has performed satisfactorily in %className% and is respectful to other students. Slight improvement in grasping concepts are still needed to continue to perform well on tests', '%fname% has an average grade in %className%. I would recommend further attention to homework outside of class.', '%fname% has performed on average well enough to proceed in %possessivePronoun% academic career, although more attention to detail is needed to truly grasp %subject% well.'],
      4: ['I am happy to report that %fname% has performed well in %className%. %PossessivePronoun% understanding of %subject% has shown through in class through %possessivePronoun% participation and helping others on tough-to-grasp topics.', '%fname% has performed well in %className%, and it has been a pleasure having %objectPronoun% in my classroom.', 'I have enjoyed %fname%\'s participation in my class, and %possessivePronoun% understanding of %subject% shines through on tests and projects.'],
      5: ['It is with great pleasure to report that %fname% has performed outstandingly well in my class and has been a joy to teach.', 'It has been a joy not only to teach %fname% this year, but also see %objectPronoun% grow tremendously in %possessivePronoun% grasp of the complex subject of %subject%. %fname%\'s grades are outstanding, and I see no immediate suggestions for improvement.', 'I have loved having %fname% in my classroom. %SubjectPronoun% &be& not only academically inclined in %subject% but also &be& respectful to other students in the classroom.'],
    },
    listensAttentively: {
      true: ['%SubjectPronoun% &be& very attentive.', '%SubjectPronoun% actively &listen& to presentations and lectures as well as other students.', '%PossessivePronoun% strong suit is listening actively to presentations and lectures.'],
      false: ['%SubjectPronoun% &lack& focus.', '%SubjectPronoun% &be& not attentive and needs work in order to do well in this class.','%SubjectPronoun% is easily distracted and needs work on listening to the teacher and fellow students during class time.'],
    },
    helpsOthers: {
      true: ['%SubjectPronoun% &be& collaborative and helpful.', 'Students look to %fname% for help with %subject% who is always ready and able to help %possessivePronoun% fellow students.', '%SubjectPronoun% &be& a kind student who &collaborate& with students with pleasure.'],
      false: ['%SubjectPronoun% &be& not inclined to work with others.', '%SubjectPronoun% &find& it difficult to constructively collaborate in a group-setting.', '%SubjectPronoun% &be& disruptive and have challenges with group work.']
    },
    participatesOften: {
      true: ['%SubjectPronoun% &be& an active participant.', '%SubjectPronoun% constructively &participate& during class time.', '%SubjectPronoun% &show& knowledge of the subject through %possessivePronoun% participation in class.'],
      false: ['%SubjectPronoun% &be& not active in class.', 'It may lend well to understanding the subject better if %fname% participated more often during class time.', '%SubjectPronoun% should be more active in class.']
    },
    asksQuestions: {
      true: ['%SubjectPronoun% &be& comfortable asking questions.', '%SubjectPronoun% &ask& relevant questions that lend to a good class discussion.', 'I am happy that %fname% is not shy about asking questions about concepts that %subjectPronoun% &do& not fully understand.'],
      false: ['%SubjectPronoun% &do& not ask questions, which would help to better %possessivePronoun% understanding of the subject.', 'It would further classroom collaboration and dialogue if %fname% would participate more in class.', '%SubjectPronoun% needs to raise %possessivePronoun% participation grade in my class.']
    },
    goodAttendance: {
      true: ['%SubjectPronoun% &have& excellent attendance.', '%SubjectPronoun% &have& perfect attendance.'],
      false: ['%SubjectPronoun% &miss& class too often.', '%SubjectPronoun% &have& poor attendance, which calls for immediate improvement.']
    },
    onTime: {
      true: ['%SubjectPronoun% &be& very punctual.', '%SubjectPronoun% &have& never been late without giving notice beforehand.'],
      false: ['%SubjectPronoun% &be& often tardy.', '%SubjectPronoun% &be& late too often, which needs to be addressed.']
    },
    polite: {
      true: ['%SubjectPronoun% &be& very polite and respectful.', '%SubjectPronoun% &be& respectful to teachers and fellow students.', 'I have enjoyed teaching %fname%. %SubjectPronoun% &be& very respectful and self-aware.'],
      false: ['%SubjectPronoun% &be& often rude.', '%SubjectPronoun% &be& disrespectful to teachers and fellow students.', '%SubjectPronoun% &need& to have more respect and self-awareness for those around %objectPronoun%.']
    },
    notDisruptive: {
      true: ['%SubjectPronoun% &be& respectful of class time.', '%SubjectPronoun% &be& not disruptive during class time.'],
      false: ['%SubjectPronoun% often &distract& the flow of class.', '%SubjectPronoun% &be& often disruptive in class.']
    },
    homeworkCompletion: {
      true: ['%SubjectPronoun% &complete& homework adequately.', '%SubjectPronoun% always &fulfill& homework assignments.'],
      false: ['%SubjectPronoun% &have& incomplete homework more often than not.', 'Homework completion needs to improve for %fname%.']
    },
    category: {
      1: ['%category% has been hard for %fname%.', '%fname% has performed poorly in %category%.', '%fname% urgently needs to improve in %category%.'],
      2: ['Although %category% is challenging, %fname% needs to improve performance.', '%fname% is falling behind in %category%.', 'If no improvement is shown, %fname% may need to retake %category%.'],
      3: ['%fname% has performed satisfactorily in %category%.', '%fname% is performing on par with the class average in %category%.', 'Although performing satisfactorily, there is room for improvement in %category%.'],
      4: ['%fname% has done well in %category%.', '%fname% is showing promise in %category%.'],
      5: ['I\'m impressed with %fname%\'s grasp of %category%.', '%fname% has shown %possessivePronoun% academic prowess in %category%.', '%fname% has continued to excel in %category%.'],
    }
}


module.exports = reportDataKeys


