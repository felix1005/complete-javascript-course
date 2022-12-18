// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
  let text = "...";
  for (let i = 0; i < arr.length; i++) {
    text += `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log(text);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
