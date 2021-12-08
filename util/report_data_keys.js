const reportDataKeys = {
    genderPronouns: {
      1: 'He/Him/His',
      2: 'She/Her/Hers',
      3: 'They/Them/Theirs'
    },
    overallScore: {
      1: 'Inadequate',
      2: 'Poor',
      3: 'Fine',
      4: 'Good',
      5: 'Excellent',
    },
    listensAttentively: {
      true: 'very attentive',
      false: 'lacks focus',
    },
    helpsOthers: {
      true: 'collaborative and helpful',
      false: 'not inclined to work with others'
    },
    participatesOften: {
      true: 'active participant',
      false: 'not active in class'
    },
    asksQuestions: {
      true: 'comfortable asking questions',
      false: 'does not ask questions'
    },
    goodAttendance: {
      true: 'has excellent attendance',
      false: 'misses class too often'
    },
    onTime: {
      true: 'very punctual',
      false: 'is often tardy'
    },
    polite: {
      true: 'very polite and respectful',
      false: 'often rude'
    },
    notDisruptive: {
      true: 'respectful of classtime',
      false: 'distracts the flow of class'
    },
    homeworkCompletion: {
      true: 'completes homework adequately',
      false: 'often has incomplete homework'
    }
}

module.exports = reportDataKeys