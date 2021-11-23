let myString = prompt('What is my string?')

lowerString = myString.toLowerCase()
lowerLetters = lowerString.substr(1)
upperLetter = myString.substr(0,1)

console.log(lowerLetters)
console.log(upperLetter)

alert(upperLetter.toUpperCase() + lowerLetters)
