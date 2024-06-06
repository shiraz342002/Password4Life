let pass_level = "easy"; 
function updateInputValue(value) {
    let pass_len = document.querySelector('.input-length').value = value;
    generatepassword(pass_len, pass_level);
}

const generatepassword = (pass_len, pass_level) => {
    console.clear();
    // console.log("The length is :" + pass_len);
    // console.log("Password Level is : " + pass_level);
    if(pass_level=="easy"){
        easy_password(pass_len);
    }
    else if(pass_level=="medium"){
        medium_password(pass_len);
    }
    else{
        hard_Password(pass_len)
    }
}
function easy_password(pass_len){
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const allCharacters_ez = upperCase.concat(lowerCase);
    let pw = '';
    pw += getRandomCharacter(upperCase);
    pw += getRandomCharacter(lowerCase);
    for (let i = pw.length; i < pass_len; i++) {
        pw += getRandomCharacter(allCharacters_ez);
    }
    pw = pw.split('').sort(() => Math.random() - 0.5).join('');
    document.getElementById('pw_display').value=pw;
}
    
function medium_password(pass_len){
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const digits = '0123456789'.split('');
const allCharacters_medium = upperCase.concat(lowerCase, digits);

    let pw = '';
    pw += getRandomCharacter(upperCase);
    pw += getRandomCharacter(lowerCase);
    pw += getRandomCharacter(digits);
    for (let i = pw.length; i < pass_len; i++) {
        pw += getRandomCharacter(allCharacters_medium);
    }
    pw = pw.split('').sort(() => Math.random() - 0.5).join('');
    document.getElementById('pw_display').value=pw;
}
    
function hard_Password(pass_len) {
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const digits = '0123456789'.split('');
const symbols = '!@#$%^&*()-_=+[]{};:,.<>/?\\|`~'.split('');
const allCharacters_hard = upperCase.concat(lowerCase, digits, symbols);
    let pw = '';
    pw += getRandomCharacter(upperCase);
    pw += getRandomCharacter(lowerCase);
    pw += getRandomCharacter(digits);
    pw += getRandomCharacter(symbols);
    for (let i = pw.length; i < pass_len; i++) {
        pw += getRandomCharacter(allCharacters_hard);
    }
    pw = pw.split('').sort(() => Math.random() - 0.5).join('');
    document.getElementById('pw_display').value=pw;
   
}
    
function getRandomCharacter(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const radioButtons = document.querySelectorAll('input[name="level"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', function(event) {
        pass_level = event.target.value; 
        if(pass_level=="easy"){
            document.getElementById('ucase').checked = true;
            document.getElementById('lcase').checked = true;
            document.getElementById('number').checked = false;
            document.getElementById('symbol').checked = false;
            document.getElementById('number').disabled = true;
            document.getElementById('symbol').disabled = true;
            document.getElementById('number').style.borderColor ='#aaa';
            document.getElementById('symbol').style.borderColor ='#aaa';
            document.getElementById('sym').style.color='#aaa';
            document.getElementById('num').style.color='#aaa';
        }
        else if(pass_level=="medium"){
            document.getElementById('ucase').checked = true;
            document.getElementById('lcase').checked = true;
            document.getElementById('number').checked = true;
            document.getElementById('symbol').disabled = true;
            document.getElementById('symbol').checked = false;
            document.getElementById('symbol').style.borderColor ='#aaa';
            document.getElementById('sym').style.color='#aaa';
            document.getElementById('num').style.color='black';
        }
        else if(pass_level=="hard"){
            document.getElementById('ucase').checked = true;
            document.getElementById('lcase').checked = true;
            document.getElementById('number').checked = true;
            document.getElementById('num').style.color='black';
            document.getElementById('symbol').checked = true;
            document.getElementById('sym').style.color='black';
        }
        updateInputValue(document.querySelector('.input-length').value);
    });
});

let initial_pass=()=>{
    document.getElementById('ucase').checked = true;
            document.getElementById('lcase').checked = true;
            document.getElementById('number').checked = false;
            document.getElementById('symbol').checked = false;
            document.getElementById('number').disabled = true;
            document.getElementById('symbol').disabled = true;
            document.getElementById('number').style.borderColor ='#aaa';
            document.getElementById('symbol').style.borderColor ='#aaa';
            document.getElementById('sym').style.color='#aaa';
            document.getElementById('num').style.color='#aaa';
    easy_password(8);
}
   
function regenPassword() {
    const pass_len = parseInt(document.getElementById('pass_len').value, 10);
    const level = document.querySelector('input[name="level"]:checked').value;
    if (level === 'easy') {
        easy_password(pass_len);
    } else if (level === 'medium') {
        medium_password(pass_len);
    } else if (level === 'hard') {
        hard_Password(pass_len);
    }
}
function CopyPw() {
    const password = document.getElementById('pw_display');
    password.select();
    // alert("Copy was clicked");
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}