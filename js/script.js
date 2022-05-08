// Created by: Kenny Le
// Created on: May 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-HTML/sw.js", {
    scope: "/ICS2O-Unit5-06-HTML/",
  })
}

/**
 * This function performs a loop.
 */
function calculate() {
  // input
  var firstInteger = document.getElementById("first-integer").value
  var secondInteger = document.getElementById("second-integer").value

  // process
  let counter = 0
  var answer = 0
  var firstIntegerAsInt = parseInt(firstInteger)

  while (counter < secondInteger) {
    console.log("Once through loop:" + counter)
    answer += firstIntegerAsInt
    counter++
  }

  // output
  document.getElementById("answer").innerHTML = "The answer is " + (answer)
}
