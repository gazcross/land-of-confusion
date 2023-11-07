let choiceOne = document.getElementById("input-one");
let choiceTwo = document.getElementById("input-two");

//Submit button
let inputReview = document.getElementById('submit');

//Check if input is a word
function wordOnly(input) {
    let checkWord = /[^a-zA-Z]/gi;
    input.value = input.value.replace(checkWord, "");
}

//Check for empty input fields and return error
inputReview.addEventListener('click', (e) => {
    e.preventDefault();
    wordMatch();
    })

//Reset Button
let clearForm = document.getElementById('reset');
let inputs = document.querySelector('input');

clearForm.addEventListener('click', () => {
    window.location.reload();
})

//Check if input word one meets the criteria of having 2 chars the same.
let m = /([a-zA-Z])\1/g;
let i = /\b(?:([A-Za-z])(?!\1))+\b/g;
function wordMatch() {
   let choiceOneOK = m.exec(choiceOne.value);
   let choiceTwoOK = i.exec(choiceTwo.value);
//Check for empty input fields and return error
    if (choiceOne.value === '' || choiceTwo.value === '') {
        let html = `<h2>PLEASE FILL IN ALL FIELDS</h2>`;
        document.getElementById('result-msg').innerHTML = html;
    }
//Check if input word two is different to input word one and doesn't contain 2 chars the same. Show SUCCESS message.    
    else if (choiceOneOK && choiceTwoOK) {
        successMessage();
    }
//Check if input word one is the same as input word two and if they both meet the success criteria. Show ERROR message.
    else if (choiceOneOK && !choiceTwoOK) {
        errorMessageOne();
    }
//Check if one of the values is correct. Show ERROR message.
    else if (choiceTwoOK === choiceOneOK && !choiceOneOK) {
        errorMessageTwo();
    }
//Check if both values are equal and are NOT correct. Show ERROR message.
    else if (choiceOne.value === choiceTwo.value) {
        errorMessageThree();
    }
//Check if none of the criteria above are met. Show ERROR message.
    else {
        errorMessageFour();
    }
}


//SUCCESS message if the correct words are inputted.
function successMessage() {
    let html = `<h2>THAT'S RIGHT <br> ${choiceOne.value} ARE IN THE LAND OF CONFUSION <br> BUT ${choiceTwo.value} ARE NOT!</h2>`;
    document.getElementById('result-msg').innerHTML = html;
}

//SUCCESS message if 3 attempts are correct. 
function successMessageTwo() {
    let html = `<h2>WELCOME TO THE LAND OF CONFUSION <br> YOU CAN STAY AS LONG AS YOU LIKE</h2>`;
    document.getElementById('result-msg').innerHTML = html;
}

//ERROR messages to cover all wrong inputs.
function errorMessageOne() {
    let html = `<h2>${choiceOne.value} AND ${choiceTwo.value} ARE BOTH IN THE LAND OF CONFUSION. <br> SELECT AN ITEM THAT ISN'T!</h2>`;
    document.getElementById('result-msg').innerHTML = html;
    
}

function errorMessageTwo() {
    let html = `<h2>YOU'RE NEARLY THERE! <br> ${choiceTwo.value} ARE IN THE LAND OF CONFUSION BUT <br> ${choiceOne.value} ARE NOT! <br> RESET AND TRY AGAIN!</h2>`;
    document.getElementById('result-msg').innerHTML = html;
}

function errorMessageThree() {
    let html = `<h2>BOTH ${choiceOne.value} AND ${choiceTwo.value} ARE THE SAME <br> AND AREN'T IN THE LAND OF CONFUSION!. <br> RESET THE FORM AND TRY AGAIN!</h2>`;
    document.getElementById('result-msg').innerHTML = html;
}

function errorMessageFour() {
    let html = `<h2>THAT'S NOT RIGHT <br> YOU NEED TO TRY AGAIN OR YOU WON'T <br> BE ALLOWED IN</h2>`;
    document.getElementById('result-msg').innerHTML = html;
}

function notAWord() {
    let html = `<h2>THIS IS NOT A WORD! TRY AGAIN</h2>`;
    document.getElementById('result-msg').innerHTML = html;
}


//Check for 3 correct answers before allowing entry to The Land Of Confusion.

