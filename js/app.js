/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');


/*
You'll probably find this function useful...
 */  
function checkpw() {
	
	var errors="";
	var errors2="";
	 if(firstPasswordInput.value != secondPasswordInput.value)
	{
	errors2="Passwords do not match!";
	
		}
	else{
	 if(firstPasswordInput.value.length < 8)
	{
	errors=errors+" "+"Password should be at-least 8 characters!";
		}
	
	 if(firstPasswordInput.value.length > 50)
	{
	errors=errors+" "+"Password should be less than 50 characters!";
		}
	
	 if(!(/[\!\@\#\$\%\^\&\*]/g).test(firstPasswordInput.value))
	{
	errors=errors+" "+"Requires at least one symbol!";
		}
	
	 if(!(/[0-9]/g).test(firstPasswordInput.value))
	{
	errors=errors+" "+"Requires at least one number!";
		}
	
	
	 if(!(/[a-z]/g).test(firstPasswordInput.value))
	{
	errors=errors+" "+"Requires at least one lowercase!";
		}
	
	 if(!(/[A-Z]/g).test(firstPasswordInput.value))
	{
	errors=errors+" "+"Requires at least one uppercase!";
		}
		
	 if((/[^A-z0-9\!\@\#\$\%\^\&\*]/g).test(firstPasswordInput.value))
	{
	errors=errors+" "+"Illegal character!";
		}
	}		
	firstPasswordInput.setCustomValidity(errors);
	secondPasswordInput.setCustomValidity(errors2);
	
};