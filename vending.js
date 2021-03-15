"use strict";

//////////////////////////////
// COLLECT EVERYTHING BY ID //
//////////////////////////////
// May not ending up needing these at all...
const buttonRed = document.getElementById("buttonRed");
const buttonOrange = document.getElementById("buttonOrange");
const buttonGreen = document.getElementById("buttonGreen");
const buttonBlue = document.getElementById("buttonBlue");

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
let valueNeeded = 0;
let changeRefund = 0;


/////////////////////
// EVENT LISTENERS //
///////////////////// 
// These clicks can be done by the user at any time.
// Select buttons & cans event listerns moved inside
// to prevent user clicks until conditions are met.
document.querySelectorAll('.coin').forEach(coin => {
  coin.addEventListener('click', (e) => {
    console.log(parseInt(e.target.innerHTML));
    let inserted = (parseInt(e.target.innerHTML));
    coinTotal(inserted);
  })
})

document.querySelectorAll('#refundToken').forEach(refundToken => {
  refundToken.addEventListener('click', (e) => {
    refundToken.classList.add('invisible');
  })
})


///////////////////
// Machine Reset //
///////////////////
machineReset(inserted);
function machineReset(inserted) {
  infoRow1.innerText = `Welcome`
  infoRow2.innerText = `All beverages are $1.65`
  return inserted;
}


///////////////////////////////
// COINS INSERTED & MESSAGES //
///////////////////////////////
function coinTotal(inserted) {
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
    infoRow1.innerText = `Correct change of ${totalValue}\u00a2`;
    infoRow2.innerText = `Please select a flavor`;
    dispense();
  }
  if (totalValue > 165) {
    infoRow1.innerText = `Overpayment of ${changeRefund}\u00a2!`;
    infoRow2.innerText = `Please select a flavor`;
    dispense();
  }

}


//////////////
// Dispense //
//////////////
function dispense() {
  // Refund coin appears if too many coins inserted
  if (totalValue > 165) {
    refundToken.classList.remove('invisible');
  }

  // Moved the cans event listeners inside this function to prevent early user clicks (theft)
  document.querySelectorAll('.can').forEach(can => {
    can.addEventListener('click', (e) => {
      console.log(e.target.id);
      can.classList.add('invisible');
    })
  })

  // Moved the buttons event listeners inside function to prevent user clicks until coin expectation met
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function listener(e) {
      let choice = e.target.id;
      console.log(choice);
      dispenseSwitch(choice, listener);
    })
  })

  function dispenseSwitch(choice, listener) {
    switch (choice) {
      case 'buttonRed':
        redCan1.classList.add('redCanAnimate');
        machineReset();
        totalValue = 0;
        removeEventListeners(listener);
        break;
      case 'buttonOrange':
        orangeCan3.classList.add('orangeCanAnimate');
        machineReset();
        totalValue = 0;
        removeEventListeners(listener);
        break;
      case 'buttonGreen':
        greenCan4.classList.add('greenCanAnimate');
        machineReset();
        totalValue = 0;
        removeEventListeners(listener);
        break;
      case 'buttonBlue':
        blueCan6.classList.add('blueCanAnimate');
        machineReset();
        totalValue = 0;
        removeEventListeners(listener);
        break;
    }

    // Remove event listeners for buttons once a can has been dispensed to prevent additional dispensing
    function removeEventListeners(listener) {
      document.querySelectorAll('.button').forEach(buttons => { buttons.removeEventListener("click", listener) });
      return;
    }
  }
}

