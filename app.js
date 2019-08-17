    // Selecting the input using the DOM  Manipulation and also asigning them to a variable 
 
    let principal = document.querySelector('.principal');
    let time = document.querySelector('.time');
    let rate = document.querySelector('.rate');
    let Submit = document.querySelector('.submit');
    let result = document.querySelector('.result1');
    let Tryagain = document.querySelector('#button1');
 
    /*
        This is the function that deals with the Calculations of the the Interest using
        The main traditional formular which is principal * time * rate / 100
    */

        function me(){
            if( principal.value === '' && time.value === '' && rate.value === '')
            {
                result.value = 'pls enter a valid number';
            }
            else 
            {
                result.value = ((parseFloat(principal.value) * parseFloat(time.value) * parseFloat(rate.value))/100).toFixed(2);
            }

        }

    /*
        This is the function that deals with the try again buttons 
        so it allow us to clean the input for caculating another interest
    */

        function again(){
            principal.value = '';
            time.value = '';
            rate.value = '';
            result.value = '';
        }
 

        /*
            This are the main  event handler that allows our event to take place the first event is the submit button
            and the second vent is the tryagain button
            This are what we always call event handler 
            It allows the buttons to react when we click the button  
        */

        Submit.addEventListener('click', me);
        Tryagain.addEventListener('click', again);
 
 
 
 