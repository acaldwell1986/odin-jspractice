let myString = prompt('What is my string?')




function stringCap(someString) {
    let lowerString = someString.toLowerCase()
    let lowerLetters = lowerString.substr(1)
    let upperLetter = someString.substr(0,1)
    return (upperLetter.toUpperCase() + lowerLetters)

}


console.log(stringCap(myString))
