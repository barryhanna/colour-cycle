const colourBox = document.getElementById('colour-box');
const colourSliders = Array.from(document.querySelectorAll('input[type="range"]'));

colourSliders.forEach(slider => {
	slider.addEventListener('change', setColour);
});

function setColour() {
	const colours = colourSliders.map(slider => decimalIntToHexString(slider.value));
	colourBox.style.backgroundColor = `#${colours.join('')}`;
}


function decimalIntToHexString(decimal) {
	if (decimal < 9) {
		return String(decimal);
	}
	decimal = String(decimal);
	switch (decimal) {
		case '10':
			return 'A';
		case '11':
			return 'B';
		case '12':
			return 'C';
		case '13':
			return 'D';
		case '14':
			return 'E';
		case '15':
			return 'F';
		default:
			return '0';
	}
}

setColour();