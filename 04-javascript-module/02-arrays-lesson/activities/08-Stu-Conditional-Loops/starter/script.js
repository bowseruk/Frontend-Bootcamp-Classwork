// Write your code here
var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

for (let i = 0; i < myFarm.length; i++) {
    if (myFarm[i][0].toLowerCase() === 'c' || myFarm[i][0].toLowerCase() === 'o') {
        alert(myFarm[i] + "begins with " + myFarm[i][0])
    }
}