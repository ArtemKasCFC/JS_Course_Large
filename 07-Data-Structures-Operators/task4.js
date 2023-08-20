// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// function changeStr(str) {
//   let lower = str.toLowerCase();
//   let arr = lower.split('\n');
//   arr.forEach((el, ind) => {
//     let underInd = el.indexOf('_');
//     const arrow = '✅';
//     el = el.replace(`_${el[underInd + 1]}`, el[underInd + 1].toUpperCase());
//     el = el.trim();
//     el = el.padEnd(20, ' ');
//     console.log(`${el}${arrow.repeat(ind + 1)}`);
//   });
// }

function changeStr(str) {
  let lower = str.toLowerCase();
  let arr = lower.split('\n');
  arr.forEach((el, ind) => {
    let underInd = el.indexOf('_');
    el = el
      .replace(`_${el[underInd + 1]}`, el[underInd + 1].toUpperCase())
      .trim()
      .padEnd(20, ' ');
    console.log(`${el}${'✅'.repeat(ind + 1)}`);
  });
}

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  changeStr(text);
});
