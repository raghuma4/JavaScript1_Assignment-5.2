
function CheckIfStringIsVowel(argument) {
	
	// define an arry of vowels
	var vowels = ['a','e','i','o','u'];
	// declare a variable of type boolean
	var isArgumentVowel = false;
	// convert the input argument to lowercase
	var stringToCompare = argument.toLowerCase();

	// iterate through the array
	for(var index in vowels)
	{
		// Compare if the given argument matches with any one of the charachter present in vowels array
		if(stringToCompare === vowels[index])
		{
			// print that argument to console
			console.log("Input string: "+argument+ " is a vowel");

			// if given argument is vowel set boolean variable to true
			isArgumentVowel = true;			 
			break;
		}
	}		 
    
    // after comparison vowel is not found print that it is consonant
	if(!isArgumentVowel)
		console.log("Input string: "+argument+ " is a consonant.");

}

// Call the function by passing different characters
CheckIfStringIsVowel('r');

CheckIfStringIsVowel('a');

CheckIfStringIsVowel('B');

CheckIfStringIsVowel('U');

CheckIfStringIsVowel('A');