const tutorials = [
    'what does the this keyword mean?',
    'What is the Contutorialuctor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

const titleCased = (x) => {
    return tutorials.map(str => {
        let words = str.split(' ')
        let upperCaseWord =
            words.map(word => word[0][0].toUpperCase() + word.slice(1))
        let newArray = upperCaseWord.join(' ')
        return newArray
    })
}









// When the parameter list is only one element, we can drop () !         <------WITH ARROW FUNCTION #####
// let students = ["harry", "ron", "hermione", "ginevra"];
// let rollCall = students.map(student => student + " the wizard")
//=> rollCall = ["harry the wizard", "ron the wizard", "hermione the wizard", "ginevra the wizard"];