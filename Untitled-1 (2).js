
let age = "30";
let name = "Patoche";
let estEtudiant;
if (age < 18) {
    estEtudiant = true;
} 
else {
    estEtudiant = false;
}



let nombre1 = 2;
let nombre2 = 3;

let quotient = nombre1 / nombre2;
let somme = nombre1 + nombre2;
let diff = nombre1 - nombre2;
let prod = nombre1 * nombre2;
console.log(quotient, somme, diff, prod);


exo3
age = 30
function evaluerAge(age) {
    if (age < 18) {
        console.log("mineur");
    } else if (age >= 18 && age < 65) {
        console.log("adulte");
    } else {
        console.log("senior");
    }
}


exo4
const number = [1,2,3,4,5,6,7,8,9,10];
for(var i = number.length; i++){
    console.log(number[i]);
}