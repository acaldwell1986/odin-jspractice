const removeFromArray = function(stringArray, ...num) {


    for (let i = 0; i < stringArray.length; i++) {

        if (stringArray[i] == num[i]) {
            console.log(`${typeof num[i]}`)
            stringArray.splice(i,1);
            
        } 

    }
};
let example = ['Hey','Hey2','Hey3','Hey4','Hey5'];

console.log(removeFromArray(example, "Hey4", "Hey3"))
