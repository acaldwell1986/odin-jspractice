const removeFromArray = function(stringArray, num1, num2, num3, num4) {
    for (let i = 0; i < stringArray.length; i++) {

        if (stringArray[i] === num1 || stringArray[i] === num2 ||stringArray[i] === num3 ||stringArray[i] === num4) {
            stringArray.splice(i,1);
            return stringArray;
        } 
        
    }
};
let example = ['Hey','Hey2','Hey3','Hey4','Hey5'];

console.log(removeFromArray(example, "Hey4"))
