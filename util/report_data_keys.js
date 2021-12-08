const reportDataKeys = {
    genderPronouns: {
      1: 'He/Him/His',
      2: 'She/Her/Hers',
      3: 'They/Them/Theirs' //how to interpolate gender pronouns in review, an array, obj for subj, obj, poss?
    },
    overallScore: {
      1: 'this person has performed horribly',
      2: 'Poor',
      3: 'Fine',
      4: 'Good',
      5: 'Excellent',
    },
    listensAttentively: {
      true: 'is/are very attentive',
      false: 'lacks/lack focus',
    },
    helpsOthers: {
      true: 'is/are collaborative and helpful',
      false: 'is/are not inclined to work with others'
    },
    participatesOften: {
      true: 'is/are an active participant',
      false: 'is/are not active in class'
    },
    asksQuestions: {
      true: 'is/are comfortable asking questions',
      false: 'does/do not ask questions'
    },
    goodAttendance: {
      true: 'has/have excellent attendance',
      false: 'misses/miss class too often'
    },
    onTime: {
      true: 'is/are very punctual',
      false: 'is/are often tardy'
    },
    polite: {
      true: 'is/are very polite and respectful',
      false: 'is/are often rude'
    },
    notDisruptive: {
      true: 'is/are respectful of classtime',
      false: 'distracts/distract the flow of class'
    },
    homeworkCompletion: {
      true: 'completes/complete homework adequately',
      false: 'has/have incomplete homework more often than not'
    },
    category: {
      1: 'Inadequate',
      2: 'Poor',
      3: 'Fine',
      4: 'Good',
      5: 'Excellent',
    }
}

module.exports = reportDataKeys