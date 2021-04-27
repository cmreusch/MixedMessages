//Mixed messages main file
//Created: 4-27-2021

//Arrays for storing words for randomized output
const start = ["The", "A"]
const noun1 = ["dog", "tree", "person", "bird", "car", "plane"];
const adverb = ["quietly", "lazily", "stoicly", "calmly"];
const verb = ["walks", "drinks", "rests", "hops", "lies", "runs", "flies"];
const preposition = ["at", "around", "besides", "away from", "far from", "in", "across"];
const end = ["the river", "the woods", "the yard", "the beach", "the park"];

//Function for generating the random message
function messageGenerator(){
    /* implements and concatenates the message */
    const randomStart = start[Math.floor(Math.random() * start.length)];
    const randomNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
    const randomAdverb = adverb[Math.floor(Math.random() * adverb.length)];
    const randomVerb = verb[Math.floor(Math.random() * verb.length)];
    const randomPreposition = preposition[Math.floor(Math.random() * preposition.length)];
    const randomEnd = end[Math.floor(Math.random() * end.length)];

    const generatedSentence = randomStart + " " + randomNoun1 + " " + randomAdverb + " " + randomVerb + " " + 
        randomPreposition + " " + randomEnd + ".";

    /* returns the message */
    return generatedSentence;
}

//Function for displaying message in browser
function displayMessage(){
    /* generate random message */
    const message = messageGenerator();

    /* get id for text area */
    const textBox = document.getElementById("output");

    /* modify displayed text */
    textBox.innerHTML = message;
}

//Tester for messageGenerator() function
console.log(messageGenerator());