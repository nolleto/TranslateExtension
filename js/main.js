var API_KEY = 'AIzaSyCKmtGaFFMp8vh15tAAm2KzrWNDNiQeZqs';
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
		url: 'https://www.googleapis.com/language/translate/v2?q=' + texto + '&source=en&target=de&key=' + API_KEY,
		//data: data,
		success: function(data) {
			console.log(data);
			$('textarea').val(data)
		}
		//dataType: dataType
	});
}

function detectarIdioma() {
	$.ajax({
		type: 'GET',
		url: 'https://www.googleapis.com/language/translate/v2/detect?q=' + texto + '&key=' + API_KEY,
		success: function(data) {
			console.log(data);
		}
	});
}

function GetLanguages(){
	$.ajax({
		type: 'GET',
		url: 'https://www.googleapis.com/language/translate/v2/languages?&target=zh-TW&key=' + API_KEY,
		success: function(data) {
			console.log(data);
		}
	});

}
