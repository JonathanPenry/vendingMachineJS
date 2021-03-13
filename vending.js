// "use strict";

// GRAB EVERYTHING THAT NEEDS EVENT LISTENERS //
// const buttonRed = document.getElementById("buttonRed");
// const buttonOrange = document.getElementById("buttonOrange");
// const buttonGreen = document.getElementById("buttonGreen");
// const buttonBlue = document.getElementById("buttonBlue");
const infoRow1 = document.getElementById("infoRow1");
const infoRow2 = document.getElementById("infoRow2");

const redCan1 = document.getElementById("redCan1");
const redCan2 = document.getElementById("redCan2");
const redCan3 = document.getElementById("redCan3");
const redCan4 = document.getElementById("redCan4");
const redCan5 = document.getElementById("redCan5");
const redCan6 = document.getElementById("redCan6");

const orangeCan1 = document.getElementById("orangeCan1");
const orangeCan2 = document.getElementById("orangeCan2");
const orangeCan3 = document.getElementById("orangeCan3");
const orangeCan4 = document.getElementById("orangeCan4");
const orangeCan5 = document.getElementById("orangeCan5");
const orangeCan6 = document.getElementById("orangeCan6");

const greenCan1 = document.getElementById("greenCan1");
const greenCan2 = document.getElementById("greenCan2");
const greenCan3 = document.getElementById("greenCan3");
const greenCan4 = document.getElementById("greenCan4");
const greenCan5 = document.getElementById("greenCan5");
const greenCan6 = document.getElementById("greenCan6");

const blueCan1 = document.getElementById("blueCan1");
const blueCan2 = document.getElementById("blueCan2");
const blueCan3 = document.getElementById("blueCan3");
const blueCan4 = document.getElementById("blueCan4");
const blueCan5 = document.getElementById("blueCan5");
const blueCan6 = document.getElementById("blueCan6");

const nickel = document.getElementsByClassName("nickel");

let totalValue = 0;
let inserted = 0;
// Determine location on the dispenser
// const dispenser = document.getElementById("dispenser");
// var rect = dispenser.getBoundingClientRect();
// alert("Coordinates: " + rect.left + "px, " + rect.top + "px");


// ADD Event Listeners to buttons, cans, customer money, refund change, 
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(e.target.id);
  })
})


document.querySelectorAll('.can').forEach(can => {
  can.addEventListener('click', (e) => {
    console.log(e.target.id);
    can.classList.add('invisible');                 // Theft problem!
  })
})


document.querySelectorAll('#refundToken').forEach(refundToken => {
  refundToken.addEventListener('click', (e) => {
    console.log(e.target.id);
    refundToken.classList.add('invisible');
  })
})


document.querySelectorAll('.coin').forEach(coin => {
  coin.addEventListener('click', (e) => {
    console.log(parseInt(e.target.innerHTML));
    let inserted = (parseInt(e.target.innerHTML)); 
    coinTotal(inserted); 
  })
})






// FUNCTION Coins added to the machine //
function coinTotal (inserted) {
  console.log(inserted);
  totalValue = totalValue + inserted;
  console.log(totalValue);
  valueNeeded = 165 - totalValue;
  changeRefund = totalValue - 165;
  console.log(changeRefund);
  if (totalValue < 165) {
    infoRow1.innerText = `Additional coins needed`;
    infoRow2.innerText = `Please insert an additional ${valueNeeded}\u00a2`;
  } 
  if (totalValue == 165) {
    infoRow1.innerText = `Thank you`;
    infoRow2.innerText = `Please select a flavor`;
    dispense();
    // return;    // Not sure if this is necessary
  }
  if (totalValue > 165) {
    infoRow1.innerText = `Overpayment of ${changeRefund}\u00a2!`;
    infoRow2.innerText = `Please select a flavor`;
    dispense();
    // return;    // Not sure if this is necessary
  }
}


// FUNCTION Dispense can to customer //
function dispense () {}
      // If YES
          // Display info line 1 says thank you message
          // Determine how much change should be given
          // Display info line 2 tells the change amount
          // Refund coin appears
          // Can dispensed with animation based on which color button they pressed
          // Reset function valueInserted to 0
  // machineReset();
  


// FUNCTION Dispense can to customer //
function machineReset () {}
  // Wait a certain amount of time
      // Reset info display to greeting message
          // Price $1.65
      // 