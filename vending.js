"use strict";

// GRAB EVERYTHING THAT NEEDS EVENT LISTENERS //
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
// document.querySelectorAll('.button').forEach(button => {
//   button.addEventListener('click', (e) => {
//     console.log(e.target.id);
//   })
// })

// document.querySelectorAll('.can').forEach(can => {
//   can.addEventListener('click', (e) => {
//     console.log(e.target.id);
//     can.classList.add('invisible');                 // Theft problem!
//   })
// })

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


///////////////
// FUNCTIONS //
///////////////
function machineReset() {
  // Wait a certain amount of time
  infoRow1.innerText = `Welcome`
  infoRow2.innerText = `All beverages are $1.65`
  // 
  // CoinTotal() totalValue reset to 0
}
machineReset();


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
    // return;    // Not sure if this is necessary
  }
  if (totalValue > 165) {
    infoRow1.innerText = `Overpayment of ${changeRefund}\u00a2!`;
    infoRow2.innerText = `Please select a flavor`;
    dispense();
    // return;    // Not sure if this is necessary
  }
}


function dispense() {
  //Click button to select flavor
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (e) => {
      console.log(e.target.id);
      let choice = e.target.id;
      console.log(choice);
        switch (choice) {
          case 'buttonRed':
            redCan1.classList.add('redCanAnimate');
            break;
          case 'buttonOrange':
            orangeCan3.classList.add('orangeCanAnimate');
            break;
          case 'buttonGreen':
            greenCan4.classList.add('greenCanAnimate')
            break;
          case 'buttonBlue':
            blueCan6.classList.add('blueCanAnimate');
            break;
          case 'buttonRandom':
            // Need to somehow randomly choose one of the previous;
            break;
        }
      })

  })
  // NON WORKING CODE //
  // if (e.target.id = buttonRed) {redCan1.classList.add('redCanAnimate')}
  // if (e.target.id = buttonOrange) {orangeCan3.classList.add('orangeCanAnimate')}
  // if (e.target.id = buttonGreen) {greenCan4.classList.add('greenCanAnimate')}
  // if (e.target.id = buttonBlue) {blueCan6.classList.add('blueCanAnimate')}
  // else {console.log("???")};

  // Dispense animation of that flavor
  // Random color can if they choose the random button

  //Moving the event listener inside this funciton protects cans from theft!
  document.querySelectorAll('.can').forEach(can => {
    can.addEventListener('click', (e) => {
      console.log(e.target.id);
      // can.classList.add('invisible');
    })
  })
  // IF (totalValue == 165)
  // Display info line 2 says please take your beverage
  // IF (totalValue > 165)
  // Display info line 2 says please take beverage and change of XXX
  // Refund coin appears

  // machineReset();
}
