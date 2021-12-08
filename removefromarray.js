
    const removeFromArray = function() {
        let stringArray = arguments[0];
        let args = Array.from(arguments);
        console.log(args);
        args.shift(); //remove the array to be compared from list of args
        console.log(args);
        console.log(stringArray);
        args.length;

         
        for (let i = 0; i < stringArray.length; i++) {

            console.log(i + 'outer');

            for (let k = 0; k < args.length; k++) {
                console.log(k);
                if (args[k] === stringArray[i]) {
                    stringArray.splice(i,1);
                    console.log(stringArray);
                }
            }
        }
        return stringArray;
        
        }; 
        let example = ['Hey','Hey2','Hey3','Hey4','Hey5'];
          
        console.log(removeFromArray(example, "Hey3", "Hey4"));