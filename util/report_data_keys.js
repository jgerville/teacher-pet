
const reportDataKeys = {
    genderPronouns: {
      1: [['He','Him','His']],
      2: [['She','Her','Her']],
      3: [['They','Them','Their']] 
    },
    overallScore: {
      1: ['%fname% has performed very unsatisfactorily in class and needs quick improvement to not only pass this class but proceed onto next level coursework in %subject%.', 'Unfortunately, I do not write this report with great pleasure. %fname% has failed to perform adequately in %className% and must urgently show improvement before the next review period.', '%fname% has been a difficult student both behaviorly and acedamically, and must seek immediate improvement before the next review period.'],
      2: ['Academically, %fname% has performed unsatisfactorily in %className% and %possessivePronoun% behaviour shows a need for more awareness of %possessivePronoun% peers and teachers.', 'Although %className% is a nuanced subject that few are able to grasp immediately, %fname% does need to show improvement in %possessivePronoun% grades and comprehension of %subject%.', 'Unfortunately, %fname% has fallen behind in %subject% and needs to spend more time outside of class grapsing the subject.'],
      3: ['%fname% has performed satisfactorily in %className% and is respectful to other students. Slight improvement in grasping concepts are still needed to continue to perform well on tests', '%fname% has an average grade in %className%. I would recomend further attention to homework outside of class.', '%fname% has performed on average well enough to proceed in %possessivePronoun% academic career, although more attention to detail is needed to truly grasp %subject% well.'],
      4: ['I am happy to report that %fname% has performed well in %className%. %possessivePronoun% understanding of %subject% has shown through in class through %possessivePronoun% participation and helping others on tough-to-grasp topics.', '%fname% has performed well in %className%, and it has been a pleasure having %objectPronoun% in my classroom.', 'I have enjoyed %fname%\'s participation in my class, and %posessive pronoun% understanding of %subject% shines through on tests and projects.'],
      5: ['It is with great pleasure to report that %fname% has performed outstandingly well in my class and has been a joy to teach.', 'It has been a joy not only to teach %fname% this year, but also see %objectPronoun% grow tremendously in %possessivePronoun% grasp of the complex subject of %subject%. %fname%\'s grades are outstanding, and I see no immediate suggestions for improvement.', 'I have loved having %fname% in my classroom. %subjectPronoun% &be& not only academically inclined in %subject% but also &be& respectful to other students in the classroom.'],
    },
    listensAttentively: {
      true: ['%subjectPronoun% &be& very attentive.', '%subjectPronoun% actively &listens/listen& to presentations and lectures as well as other students.', '%possessivePronoun% strongsuit is listening actively to presentations and lectures.'],
      false: ['%subjectPronoun% &lack& focus.', '%subjectPronoun% &be& not attentive and needs work in order to do well in this class.','%subjectPronoun% is easily distracted and needs work on listening to the teacher and fellow students during classtime.'],
    },
    helpsOthers: {
      true: ['%subjectPronoun% &be& collaborative and helpful.', 'Students look to %fname% for help with %subject% who is always ready and able to help %possessivePronoun% fellow students.', '%subjectPronoun% &be& a kind student who &collaborates/collaborate& with students with pleasure.'],
      false: ['%subjectPronoun% &be& not inclined to work with others.', '%subjectPronoun% &finds/find& it difficult to constructively collaborate in a group-setting.', '%subjectPronoun% &be& disruptive and have challenges with group work.']
    },
    participatesOften: {
      true: ['%subjectPronoun% &be& an active participant.', '%subjectPronoun% constructively &participate& during classtime.', '%subjectPronoun% &show& knowledge of the subject through %possessivePronoun% participation in class.'],
      false: ['%subjectPronoun% &be& not active in class.', 'It may lend well to understanding the subject better if %fname% participated more often during classtime.', '%subjectPronoun% should be more active in class.']
    },
    asksQuestions: {
      true: ['%subjectPronoun% &be& comfortable asking questions.', '%subjectPronoun% &asks/ask& relevant questions that lend to a good class discussion.', 'I am happy that %fname% is not shy about asking questions about concepts that %subjectPronoun% &do& not fully understand.'],
      false: ['%subjectPronoun% &do& not ask questions, which would help to better %possessivePronoun% understanding of the subject.', 'It would furhter classroom collaboration and dialogue if %fname% would participate more in class.', '%subjectPronoun% needs to raise %possessivePronoun% participation grade in my class.']
    },
    goodAttendance: {
      true: ['%subjectPronoun% &have& excellent attendance.', '%subjectPronoun% &have& perfect attendance.'],
      false: ['%subjectPronoun% &miss& class too often.', '%subjectPronoun% &have& poor attendance, which calls for immediate improvement.']
    },
    onTime: {
      true: ['%subjectPronoun% &be& very punctual.', '%subjectPronoun% &have& never been late without giving notice beforehand.'],
      false: ['%subjectPronoun% &be& often tardy.', '%subjectPronoun% &be& late too often, which needs to be addressed.']
    },
    polite: {
      true: ['%subjectPronoun% &be& very polite and respectful.', '%subjectPronoun% &be& respectful to teachers and fellow students.', 'I have enjoyed teaching %fname%. %subjectPronoun% &be& very respectful and self-aware.'],
      false: ['%subjectPronoun% &be& often rude.', '%subjectPronoun% &be& disrespectful to teachers and fellow students.', '%subjectPronoun% &need& to have more respect and self-awareness for those around %objectPronoun%.']
    },
    notDisruptive: {
      true: ['%subjectPronoun% &be& respectful of classtime.', '%subjectPronoun% &be& not disruptive during classtime.'],
      false: ['%subjectPronoun% often &distract& the flow of class.', '%subjectPronoun% &be& often disruptive in class.']
    },
    homeworkCompletion: {
      true: ['%subjectPronoun% &complete& homework adequately.', '%subjectPronoun% always &fulfill& homework assignments.'],
      false: ['%subjectPronoun% &have& incomplete homework more often than not.', 'Homework completion needs to improve for %fname%.']
    },
    category: {
      1: ['This %category% has been hard for %fname%.', '%fname% has performed poorly in %category%.', '%fname% urgently needs to improve in %category%.'],
      2: ['Although %category% is challenging, %fname% needs to improve performance.', '%fname% is falling behind in %category%.', 'If no improvement is shown, %fname% may need to retake %category%.'],
      3: ['%fname% has performed satisfactorily in %category%.', '%fname% is performing on par with the class average in %category%.', 'Although performing satisfactorily, there is room for improvement in %category%.'],
      4: ['%fname% has done well in %category%.', '%fname% is showing promise in %category%.'],
      5: ['I\'m impressed with %fname%\'s grasp of %category%.', '%fname% has shown %possessivePronoun% academic prowess in %category%.', '%fname% has continued to excel in %category%.'],
    }
}


module.exports = reportDataKeys


