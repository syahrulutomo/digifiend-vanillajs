/*
 * Open the drawer when the menu ison is clicked.
 */
	
var menu = document.querySelector('.drawer');
var main = document.querySelector('main');
var drawer = document.querySelector('.navbar-expanded');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
    e.stopPropagation();
});
  
main.addEventListener('click', function() {
   drawer.classList.remove('open');
});

/*
 *	Retrieve data from API and do DOM to headline section 
 */

var url = [
			'https://newsapi.org/v2/everything?sources=ign&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
			'https://newsapi.org/v2/everything?sources=polygon&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
			'https://newsapi.org/v2/everything?sources=hacker-news&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
			'https://newsapi.org/v2/everything?sources=the-next-web&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
			'https://newsapi.org/v2/everything?sources=engadget&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
			'https://newsapi.org/v2/everything?sources=techradar&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d'
		  ]

var dataIgn = new Array();
var dataPolygon = new Array();
var dataTechCrunh = new Array();
var dataHackerNews = new Array();
var dataRecode = new Array();
var dataEngadget = new Array();
var dataTechRadar = new Array();
var dataTechCrunch = new Array();

function retrieveData(url){
	fetch(url).then(function(response){
		return response.json();
	})
	.then(function(json){
		var data = json;

		for(var i = 0; i < data['articles'].length; i++){
			var checkImg = data['articles'][i]['urlToImage'].slice(data['articles'][i]['urlToImage'].length-10,
				data['articles'][i]['urlToImage'].length);
		}

	})

}


function getData(data,index,thumbnailLink,titleLink,thumbnail,title,summary,author,date){
	
	for(var i = 0; i < 20; i++){
		if(data['articles'][index]['urlToImage'] != null && data['articles'][index]['title'] != null ){

			thumbnailLink.href = data['articles'][index]['url'];
			titleLink.href = data['articles'][index]['url'];
			thumbnail.src = data['articles'][index]['urlToImage'];
			title.textContent = data['articles'][index]['title'];
			summary.textContent = data['articles'][index]['description'];
			author.textContent = data['articles'][index]['source']['name'];
			var date_temp = data['articles'][index]['publishedAt'];

			date_temp = date_temp.slice(0,10);
			var dateYear = date_temp.slice(0,4);
			var dateMonth = date_temp.slice(5,7);
			var dateDay = date_temp.slice(8);

			dateMonth = formatMonth(dateMonth);

			var formattedDate = dateDay+' '+dateMonth+' '+dateYear;
			date.textContent = formattedDate;
		}else{
			index = index + 1;
		}
	
	}

}

function formatMonth(month){
	var formattedMonth;

	if(month == 01){
		formattedMonth = 'January';
	}else if(month == 02){
		formattedMonth = 'February';
	}else if(month == 03){
		formattedMonth = 'March';
	}else if(month == 04){
		formattedMonth = 'April';
	}else if(month == 05){
		formattedMonth = 'May';
	}else if(month == 06){
		formattedMonth = 'June';
	}else if(month == 07){
		formattedMonth = 'July';
	}else if(month == 08){
		formattedMonth = 'August';
	}else if(month == 09){
		formattedMonth = 'September';
	}else if(month == 10){
		formattedMonth = 'October';
	}else if(month == 11){
		formattedMonth = 'November';
	}else if(month == 12){
		formattedMonth = 'December';
	}

	return formattedMonth;
}