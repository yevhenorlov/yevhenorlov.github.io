---
layout: default
title: ukraїnśka latynka. konverter
permalink: /ulk
---
<h1 id="ulk-title">ukraїnśka latynka: konverter&nbsp;<sup><span id="beta">beta</span></sup></h1>
<form id="ulk-form" action="">
  <textarea name="input" id="ulk-input" placeholder="vvediť tekst ukraїnśkoju ta natysniť “konvertuvaty”"></textarea>
  <button type="button" id="ulk-submit">konvertuvaty</button>
  <textarea name="output" id="ulk-output" readonly></textarea>
</form>

<a id="manifest" href="https://nachasi.com/ul/manifest/">manifest ukraїnśkoї latynky</a>

<script>
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
			"ь": "'",
			"Ю": "Ju", "ю": "ju",
			"Я": "Ja", "я": "ja"
		};

		function transliterate(word){
			return word.split('').map(function (char) {
				return a[char] || char;
			}).join("");
		};

		$('#ulk-submit').on('click', function() {
			var value = transliterate($('#ulk-input').val());
			var output = $('#ulk-output');
			if (output.val() !== "") {
				output.empty();
			};
			output.append(value);
		});
	})
</script>


