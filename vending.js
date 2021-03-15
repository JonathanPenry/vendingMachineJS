"use strict";

//////////////////////////////
// COLLECT EVERYTHING BY ID //
//////////////////////////////
// May not ending up needing these at all...
const infoRow1 = document.getElementById("infoRow1");
const infoRow2 = document.getElementById("infoRow2");

const buttonRed = document.getElementById("buttonRed");
const buttonOrange = document.getElementById("buttonOrange");
const buttonGreen = document.getElementById("buttonGreen");
const buttonBlue = document.getElementById("buttonBlue");

let redCans = document.querySelectorAll(".redCans");
let activeRedCan = 0;

let orangeCans = document.querySelectorAll(".orangeCans");
let activeOrangeCan = 0;

let greenCans = document.querySelectorAll(".greenCans");
let activeGreenCan = 0;

let blueCans = document.querySelectorAll(".blueCans");
let activeBlueCan = 0;

let totalValue = 0;
let inserted = 0;
let valueNeeded = 0;
let changeRefund = 0;


/////////////////////
// EVENT LISTENERS //
///////////////////// 
// These clicks can be done by the user at any time.
// Select buttons & cans event listerns were moved inside the
// dispense() to prevent user clicks until conditions are met.
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
function machineReset(inserted) {
  infoRow1.innerText = `Welcome`
  infoRow2.innerText = `All beverages are $1.65`
  return inserted;
}
machineReset(inserted);


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
    refundToken.classList.remove('invisible');
    dispense();
  }

}


//////////////
// Dispense //
//////////////
function dispense() {
  // Moved the cans event listeners inside this function to prevent early user clicks (theft!)
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
        redCans[activeRedCan].classList.add('redCanAnimate');
        activeRedCan++;
        totalValue = 0;
        changeRefund = 0;
        valueNeeded = 0;
        inserted = 0;
        machineReset(totalValue);
        removeEventListeners(listener);
        break;
      case 'buttonOrange':
        orangeCans[activeOrangeCan].classList.add('orangeCanAnimate');
        activeOrangeCan++;
        totalValue = 0;
        changeRefund = 0;
        valueNeeded = 0;
        inserted = 0;
        machineReset(totalValue);
        removeEventListeners(listener);
        break;
      case 'buttonGreen':
        greenCans[activeGreenCan].classList.add('greenCanAnimate');
        activeGreenCan++;
        totalValue = 0;
        changeRefund = 0;
        valueNeeded = 0;
        inserted = 0;
        machineReset(totalValue);
        removeEventListeners(listener);
        break;
      case 'buttonBlue':
        blueCans[activeBlueCan].classList.add('blueCanAnimate');
        activeBlueCan++;
        totalValue = 0;
        changeRefund = 0;
        valueNeeded = 0;
        inserted = 0;
        machineReset(totalValue);
        removeEventListeners(listener);
        break;
    }

    // Remove event listeners for all buttons once a can has been dispensed to prevent additional dispensing
    function removeEventListeners(listener) {
      document.querySelectorAll('.button').forEach(buttons => { buttons.removeEventListener("click", listener) });
      return;
    }
  }
}

