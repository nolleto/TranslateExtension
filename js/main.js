var API_KEY = 'AIzaSyDJvpld02QYcKmK3zNeVEe9PTYQrYpNZH4';
var iIn = $('#textOriginal');
var iOut = $('#textTranslated');

function traduzir() {
	testar(iIn.val());
}

function concluido(data) {
	console.log(data);
}

function testar(texto) {
	$.ajax({
		type: 'GET',
		url: 'https://www.googleapis.com/language/translate/v2?key=' + API_KEY + 'U&source=en&target=de&callback=concluido&q=' + texto,
		//data: data,
		success: function(data) {
			console.log(data);
		}
		//dataType: dataType
	});
}

function detectarIdioma() {
	$.ajax({
		type: 'GET',
		url: 'https://www.googleapis.com/language/translate/v2?key=' + API_KEY + 'U&source=en&target=de&callback=translateText&q=' + texto,		
		success: function(data) {
			console.log(data);
		}
	});
}