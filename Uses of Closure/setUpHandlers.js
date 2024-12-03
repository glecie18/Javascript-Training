const buttons = document.getElementsByTagName('button');

for(var i = 0; i < buttons.length; i += 1) {
	const button = buttons[i];
	const buttonName = button.innerHTML;
	button.addEventListener('click', function() {
		console.log(buttonName);
	});
}
