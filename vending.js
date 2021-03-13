// "use strict";

// GRAB EVERYTHING THAT NEEDS EVENT LISTENERS //
const buttonRed = document.getElementById("buttonRed");
const buttonOrange = document.getElementById("buttonOrange");
const buttonGreen = document.getElementById("buttonGreen");
const buttonBlue = document.getElementById("buttonBlue");

const redCan1 = document.getElementById("redCan1");
const redCan2 = document.getElementById("redCan2");
const redCan3 = document.getElementById("redCan3");
const redCan4 = document.getElementById("redCan4");
const redCan5 = document.getElementById("redCan5");
const redCan6 = document.getElementById("redCan6");

let orangeCan1 = document.getElementById("orangeCan1");
let orangeCan2 = document.getElementById("orangeCan2");
let orangeCan3 = document.getElementById("orangeCan3");
let orangeCan4 = document.getElementById("orangeCan4");
let orangeCan5 = document.getElementById("orangeCan5");
let orangeCan6 = document.getElementById("orangeCan6");

let greenCan1 = document.getElementById("greenCan1");
let greenCan2 = document.getElementById("greenCan2");
let greenCan3 = document.getElementById("greenCan3");
let greenCan4 = document.getElementById("greenCan4");
let greenCan5 = document.getElementById("greenCan5");
let greenCan6 = document.getElementById("greenCan6");

let blueCan1 = document.getElementById("blueCan1");
let blueCan2 = document.getElementById("blueCan2");
let blueCan3 = document.getElementById("blueCan3");
let blueCan4 = document.getElementById("blueCan4");
let blueCan5 = document.getElementById("blueCan5");
let blueCan6 = document.getElementById("blueCan6");


// ADD Event Listeners to buttons, cans, customer money, refund change, 
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(e.target.id)
  })
})

document.querySelectorAll('.can').forEach(can => {
  can.addEventListener('click', (e) => {
    console.log(e.target.id)
  })
})

document.querySelectorAll('.coin').forEach(coin => {
  coin.addEventListener('click', (e) => {
    console.log(parseInt(e.target.innerHTML))
  })
})


// FUNCTION Coins added to the machine //
function () {}
    // Clicks on coins add to the total
          // Update the info screen to show total of coins added
    // Determine if required amount has been met


// FUNCTION Dispense can to customer //
function dispense () {}
  // Check to see if required amount has been met
      // If NOT
          // Display message of how much more money needs to be added
      // If YES
          // Display info line 1 says thank you message
          // Determine how much change should be given
          // Display info line 2 tells the change amount
          // Refund coin appears
          // Can dispensed with animation based on which color button they pressed


// FUNCTION