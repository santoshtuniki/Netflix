
function toggleButton(faq, answer){
	let element = document.querySelector(faq);	//Gives a NodeList(6)
	let main = element.classList;

	let data = document.querySelector(answer).style;

	if(main.contains('bi-plus-lg')) {
		main.remove('bi-plus-lg');
		main.add('bi-x-lg');
		data.display="block";
	} else {
		main.remove('bi-x-lg');
		main.add('bi-plus-lg');
		data.display="none";
	}
}
