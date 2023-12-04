'use strict'
//問題文
const phrases = [
  "How are you doing?", 
  "I'm doing great.",
  "I'm happy to meet you.",
  "Take care.",
  "Have a good day.",
  "I can't wait!",
  "That's awesome!",
  "How have you been?",
  "You've got this!"
];

function draw(){
  const Q = Math.floor(Math.random() * phrases.length)
  console.log(Q)
  const EnPhrase = document.getElementById("EnPhrase");
  EnPhrase.textContent = phrases[Q];
}