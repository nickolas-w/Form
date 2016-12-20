formFocus();
formBlur();
validateRadio();
validate();


function formFocus(field) 
{
	"use strict";
	field.className = 'focusColor';
}


function formBlur(field) 
{
	"use strict";
	field.className = 'blurColor';
}

	
// Radio button validation found at answer 1: http://stackoverflow.com/questions/13212849/radio-button-validation-through-javascript
function validateRadio(radio)
{
    "use strict";
	var i;
	for (i = 0; i < radio.length; ++ i)
    {
        if (radio [i].checked) 
		{
			return true;
		}
    }
    return false;
}
		
		
function validate() 
{
	"use strict";
	var errorMessage = '';
	var successMessage = '';
			

  	if (document.form.firstName.value.match(/^[A-Za-z]{2,}$/))
	{
		successMessage += 'Name: ' + document.form.firstName.value + ' ';
				
	}
	else
	{
		errorMessage += 'Please enter a valid first name\n';
	}
	
			
  	if (document.form.middleInitial.value.match(/^[A-Za-z]{1}$/))
	{
		successMessage += document.form.middleInitial.value + ' ';	
	}
	
			
	if (document.form.lastName.value.match(/^[A-Za-z]{2,}$/))
	{
		successMessage += document.form.lastName.value + '\n';	
	}
	else
	{
		errorMessage += 'Please enter a valid last name\n';
	}
	
	
  	if (document.form.streetName.value.match(/^[0-9]{2,}[ ][A-Za-z0-9]{2,}[ ][A-Za-z]{2,}$/))
	{
		successMessage += 'Street: ' + document.form.streetName.value + '\n';			
	}
	else
	{
		errorMessage += 'Please enter a valid street address\n';
	}
	
			
	if (document.form.cityName.value.match(/^[A-Za-z]{2,}[ ]?[A-Za-z]+$/))
	{
		successMessage += 'City: ' + document.form.cityName.value + '\n';
	}
	else
	{
		errorMessage += 'Please enter a valid city name\n';
	}
		
			
	if (document.form.state.value.match(/^[A-Z]{2}$/))
	{
		successMessage += 'State: ' + document.form.state.value + '\n';
	}
	else
	{
		errorMessage += 'Please select a state\n';
	}
	
	
	if (document.form.zip.value.match(/^\d{5}$/))
	{
		successMessage += 'Zip: ' + document.form.zip.value + '\n';
	}
	else
	{
		errorMessage += 'Please enter a valid zip code (5 numbers)\n';
	}
	
	
	// Radio button validation found at answer 1: http://stackoverflow.com/questions/13212849/radio-button-validation-through-javascript
	if (validateRadio(document.forms.form.productType))
	{
		successMessage += 'Product Type: ' + document.form.productType.value + '\n';
	}
	else
	{
		errorMessage += 'Please select a product type\n';
	}
	
			
	if (document.form.reasonForReturn.value.length >= 1)
	{
		successMessage += 'Reason For Return: ' + document.form.reasonForReturn.value + '\n';
	}
	else
	{
		errorMessage += 'Please enter a reason why you are returning this item\n';
	}
	
	
	if(document.form.emailAddress.value.match(/^[A-Za-z0-9]{1,}[@][A-Za-z0-9]{1,}[.][A-Za-z0-9]{2,63}$/))
	{
		successMessage += 'Email Address: ' + document.form.emailAddress.value + '\n';
	}
	else
	{
		errorMessage += 'Please enter a valid email address (something@something.something)' + '\n';
	}
		
			
	if(document.form.password.value.length >= 8)
	{
		successMessage += 'Successful Password\n';
	}
	else
	{
		errorMessage += 'Unsuccessful Password\n';
	}
		
			
	if(document.form.terms.checked)
	{
		successMessage += 'Terms agreed to\n';
	}
	else
	{
		errorMessage += 'Please check the box if you agree to the terms\n';
	}
			
	
	
	
	if (errorMessage === '')
	{
		alert(successMessage);
		return true;
	}
	else
	{
		alert(errorMessage);
		return false;
	}
			
}