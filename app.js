let principal = document.querySelector('.principal');
let time = document.querySelector('.time');
let rate = document.querySelector('.rate');
let submit = document.querySelector('.submit');
let result = document.querySelector('.result1');
let tryagain = document.querySelector('#button1');

function me(){
    if( principal.value === '' || time.value === '' || rate.value === ''){
        result.value = 'pls enter a valid number';
    }
    else {
    result.value = ((parseFloat(principal.value) * parseFloat(time.value) * parseFloat(rate.value))/100).toFixed(2);
    }
}

submit.addEventListener('click', me);
tryagain.addEventListener('click', again);

function again(){
    principal.value = '';
    time.value = '';
    rate.value = '';
    result.value = '';
}



 