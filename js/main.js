
var iIn = $('#textOriginal');
var iOut = $('#textTranslated');

$( document ).ready(function() {
	$('button').on('click', function() {
		var text = iIn.val();
		var translate = new nTranslate();
		translate.Translate(text);		
	});
	
});

(function() {
	nTranslate = function() {
		var API_KEY = 'AIzaSyCKmtGaFFMp8vh15tAAm2KzrWNDNiQeZqs';
		var self = this;

		self.Translate = function(text, data) {		
			data = $.extend({
				q: text,
				key : API_KEY,
				source: 'en',
				target: 'pt'
			}, data);

			$.ajax({
				type: 'GET',
				data: data,
				url: 'https://www.googleapis.com/language/translate/v2',
				success: function(data) {
					console.log(data);
					var translations = data.data.translations;
					
				}
			});
		}

		self.Detectlanguage = function(text) {
			$.ajax({
				type: 'GET',
				data: { 
					q: text,
					key: API_KEY
				},
				url: 'https://www.googleapis.com/language/translate/v2/detect',
				success: function(data) {
					console.log(data);
					var detections = data.data.detections;
				}
			});
		}

		self.GetLanguages = function (){
			$.ajax({
				type: 'GET',
				data: {
					key: API_KEY
				},
				url: 'https://www.googleapis.com/language/translate/v2/languages',
				success: function(data) {
					console.log(data);
					var languages = data.data.languages;
					
				}
			});

		}
	};

})();


