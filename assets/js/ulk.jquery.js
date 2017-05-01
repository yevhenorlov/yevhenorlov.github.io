$(function() {

var a = {
	"А": "A", "а": "a",
	"Б": "B", "б": "b",
	"В": "V", "в": "v",
	"Г": "G", "г": "g",
	"Ґ": "Ğ", "ґ": "ğ",
	"Д": "D", "д": "d",
	"Е": "E", "е": "e",
	"Є": "Je", "є": "je",
	"Ж": "Ž", "ж": "ž",
	"З": "Z", "з": "z",
	"И": "Y", "и": "y",
	"І": "I", "і": "i",
	"Ї": "Ї", "ї": "ї",
	"Й": "J", "й": "j",
	"К": "K", "к": "k",
	"Л": "L", "л": "l",
	"М": "M", "м": "m",
	"Н": "N", "н": "n",
	"О": "O", "о": "o",
	"П": "P", "п": "p",
	"Р": "R", "р": "r",
	"С": "S", "с": "s",
	"Т": "T", "т": "t",
	"У": "U", "у": "u",
	"Ф": "F", "ф": "f",
	"Х": "H", "х": "h",
	"Ц": "C", "ц": "c",
	"Ч": "Č", "ч": "č",
	"Ш": "Š", "ш": "š",
	"Щ": "Šč", "щ": "šč",
	"Ю": "Ju", "ю": "ju",
	"Я": "Ja", "я": "ja"
};

function transliterate(input) {
	var arr = input.split('');
	for(i = 0; i < arr.length; i++) {
		if(arr[i] === 'ь' || arr[i] === 'Ь') {
			if(arr[i-1] === 'D') {
				arr[i-1] = 'Ď';
				arr[i] = '';
			} else if(arr[i-1] === 'd') {
				arr[i-1] = 'ď';
				arr[i] = '';
			} else if(arr[i-1] === 'Z') {
				arr[i-1] = 'Ź';
				arr[i] = '';
			} else if(arr[i-1] === 'z') {
				arr[i-1] = 'ź';
				arr[i] = '';
			} else if(arr[i-1] === 'L') {
				arr[i-1] = 'Ľ';
				arr[i] = '';
			} else if(arr[i-1] === 'l') {
				arr[i-1] = 'ľ';
				arr[i] = '';
			} else if(arr[i-1] === 'N') {
				arr[i-1] = 'Ń';
				arr[i] = '';
			} else if(arr[i-1] === 'n') {
				arr[i-1] = 'ń';
				arr[i] = '';
			} else if(arr[i-1] === 'R') {
				arr[i-1] = 'Ŕ';
				arr[i] = '';
			} else if(arr[i-1] === 'r') {
				arr[i-1] = 'ŕ';
				arr[i] = '';
			} else if(arr[i-1] === 'S') {
				arr[i-1] = 'Ś';
				arr[i] = '';
			} else if(arr[i-1] === 's') {
				arr[i-1] = 'ś';
				arr[i] = '';
			} else if(arr[i-1] === 'T') {
				arr[i-1] = 'Ť';
				arr[i] = '';
			} else if(arr[i-1] === 't') {
				arr[i-1] = 'ť';
				arr[i] = '';
			} else if(arr[i-1] === 'C') {
				arr[i-1] = 'Ć';
				arr[i] = '';
			} else if(arr[i-1] === 'c') {
				arr[i-1] = 'ć';
				arr[i] = '';
			} else {
				arr[i] = 'ʼ'; /* Fallback */
			}
		} else {
			arr[i] = a[arr[i]] || arr[i];
		}
	}
	arr.join('');
	return arr;
};

$('#ulk-submit').on('click', function() {
	var value = transliterate($('#ulk-input').val());
	var output = $('#ulk-output');
	if (output.val() !== "") {
		output.empty();
	};
	output.append(value);
});

});