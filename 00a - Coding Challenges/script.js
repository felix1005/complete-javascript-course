"use strict";

const camelCaseConverter = function () {
  let input = document.querySelector("textarea").value;
  input = input.split("\n");
  for (let [index, word] of input.entries()) {
    word = word.toLowerCase().trim();
    const upperCasePosition = word.indexOf("_") + 1;
    word =
      word.slice(0, upperCasePosition - 1) +
      word[upperCasePosition].toUpperCase() +
      word.slice(upperCasePosition + 1);
    word = word.padEnd(25).padEnd(25 + index + 1, "✅");
    console.log(word);
  }
};

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", camelCaseConverter);
