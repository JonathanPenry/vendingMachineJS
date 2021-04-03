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

// let activeCans = {
//   red: 0,
//   orange: 0,
//   green: 0,
//   blue: 0
// }
// Should allow you to write
// activeCans[choice]++; instead of activeBlueCan++

let totalValue = 0;
let inserted = 0;
let valueNeeded = 0;
let changeRefund = 0;


machineReset();

//////////////////////////
// COIN EVENT LISTENERS //
//////////////////////////
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
function machineReset() {
  infoRow1.innerText = `Welcome`
  infoRow2.innerText = `All beverages are $1.65`
  totalValue = 0;
  changeRefund = 0;
  valueNeeded = 0;
  inserted = 0;
}


///////////////////////////////
// COINS INSERTED & MESSAGES //
///////////////////////////////
// Inserted is passed from coin event listeners
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
        if (totalValue >= 165){
        redCans[activeRedCan].classList.add('redCanAnimate');
        activeRedCan++;
        document.querySelectorAll('.redCanAnimate').forEach(can => {
          can.addEventListener('click', (e) =>{
            can.classList.add('invisible');
          })
        })
        }
        break;
      case 'buttonOrange':
        if (totalValue >= 165){
        orangeCans[activeOrangeCan].classList.add('orangeCanAnimate');
        activeOrangeCan++;
        document.querySelectorAll('.orangeCanAnimate').forEach(can => {
          can.addEventListener('click', (e) =>{
            can.classList.add('invisible');
          })
        })
        }
        break;
      case 'buttonGreen':
        if (totalValue >= 165){
        greenCans[activeGreenCan].classList.add('greenCanAnimate');
        activeGreenCan++;
        document.querySelectorAll('.greenCanAnimate').forEach(can => {
          can.addEventListener('click', (e) =>{
            can.classList.add('invisible');
          })
        })
        }
        break;
      case 'buttonBlue':
        if (totalValue >= 165){
        blueCans[activeBlueCan].classList.add('blueCanAnimate');
        activeBlueCan++;
        document.querySelectorAll('.blueCanAnimate').forEach(can => {
          can.addEventListener('click', (e) =>{
            can.classList.add('invisible');
          })
        })
        }
        break;
    }

    machineReset();
    removeEventListeners(listener);
  }
  // Remove event listeners for all buttons once a can has been dispensed to prevent additional dispensing
  function removeEventListeners(listener) {
    document.querySelectorAll('.button').forEach(buttons => { buttons.removeEventListener("click", listener) });
    return;
  }
}



// ORIGINAL SWITCH CASE EXAMPLE //
// case 'buttonBlue':
//   blueCans[activeBlueCan].classList.add('blueCanAnimate');
//   activeBlueCan++;
//   // totalValue = 0;
//   // changeRefund = 0;
//   // valueNeeded = 0;
//   // inserted = 0;
//   machineReset();//totalValue);
//   removeEventListeners(listener);
//   break;
