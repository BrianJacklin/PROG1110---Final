window.onload = function () {
// global vars including regEx patterns
	var $		   = function(id){return document.getElementById(id);},
		newsletter = $("newsletter"),
		fields 	   = newsletter.getElementsByTagName("input"),
		letterPattern = /[A-Za-z]/, 
		datePattern = /(\d{2})\/(\d{2})\/(\d{4})/,
		emailPattern = /\S+@\S+\.\S+/;

//validate the newsletter form
	function validateNewsletter() {
	//check first name, don't allow numbers or odd charactoers
		if(fields[0].value.search(letterPattern) === -1){
			fields[0].classList.add("error");					
		}else{
			fields[0].classList.remove("error");				
		}

	//check last name, don't allow numbers or odd charactoers
		if(fields[1].value.search(letterPattern) === -1){
			fields[1].classList.add("error");					
		}else{
			fields[1].classList.remove("error");				
		}

	//check email, must be [string] @ [string] . [string]
		if(fields[2].value.search(emailPattern) === -1){
			fields[2].classList.add("error");				
		}else{
			fields[2].classList.remove("error");				
		}
	//check date, must be ##/##/####
		if(fields[3].value.search(datePattern) === -1 ){
			fields[3].classList.add("error");				
		}else{
			fields[3].classList.remove("error");				
		}
}

// addEventListener on Newsletter form change, fire validateForm
	$("newsletter").addEventListener("change", validateNewsletter, false);

// submit the newsletter
	function submitNewsletter(){
		validateNewsletter();
		if (document.getElementsByClassName("error").length === 0){
			document.forms["newsletter"].submit();
		}
	}

// addEventListener on Newsletter form submit, fire submitNewsletter
	$("submitNews").addEventListener("click", submitNewsletter, false);

	//reset the newsletter
	function resetNewsletter(){
		document.forms["newsletter"].reset();
		for(var i = 0;i <= 3; i++){
			fields[i].classList.remove("error");
		}
	}

// addEventListener on Newsletter form reset, resetNewsletter
	$("resetNews").addEventListener("click",resetNewsletter, false);
};