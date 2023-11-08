// Will prompt the user 
let userObj = {};
const userInput = prompt(
    'Please enter a list of comma separated froyo flavors!', 
    'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
);
// add the commas after each flavor
const strArray = userInput.split(",");
// placing users input into an object
userObj.data = userInput;
// parseing the user flavors into an array
const flavors = [];
for (let i =0; i < strArray.length; i++){
    const froyo = strArray[i];
    const number = parseInt(froyo);
    flavors.push(froyo);
}

console.log(strArray);
console.log(userObj);
function getFlavors(flavors){
    return flavors; 
}

console.log(strArray);
console.log(`You hav entered ${getFlavors(flavors)} flavors.`);


console.table(userObj);
for (const key in userObj){
    console.log(userObj[key]);
}
function getAmountOfSpecFlav(strArray) {
    const output = [];
    for(let i = 0; i < strArray.length; i++){
        const flav = strArray[i];
        if (flav[0] === "v") {
            output.push(flav);
        }
    }
    return output;
}
console.log(getAmountOfSpecFlav(strArray));