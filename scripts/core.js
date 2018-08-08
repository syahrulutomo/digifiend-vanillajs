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

var API = {
	getHeadline: 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
	getGameIgn: 'https://newsapi.org/v2/top-headlines?sources=ign&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
	getGamePolygon: 'https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
	getDevHackNews: 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
	getDevTheNextWeb: 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
	getNewsEngadget: 'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d',
	getNewsTechcrunch: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d'
}

// var dataIgn = [];

// function retrieveData(url,array){

// 	fetch(url).then(function(response){
// 		return response.json();
// 	})
// 	.then(function(data){
// 		dataArray = data['articles'];
// 		return dataArray;
// 	})
// 	.then(function(dataArray){
// 		saveData(dataArray,array);
// 	})
// }

// function saveData(json,array){
// 	for(var i = 0; i < json.length; i++){
// 		array.push(json[i]);
// 	}
// }


function displayData(data,index,parent){
	
	var thumbnailLink = document.querySelector(parent).firstChild.nextSibling.firstChild.nextSibling;
	var titleLink = document.querySelector(parent).firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
	var thumbnail = document.querySelector(parent).firstChild.nextSibling.firstChild.nextSibling.firstChild;
	var title = document.querySelector(parent).firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
	var summary = document.querySelector(parent).firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
	var author = document.querySelector(parent).firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
	var date = document.querySelector(parent).firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

		if(data['articles'][index]['urlToImage'] != null){
			thumbnailLink.href = data['articles'][index]['url'];
			thumbnail.src = data['articles'][index]['urlToImage'];
		}else{
			thumbnailLink.href = data['articles'][index]['url'];
			thumbnail.src = 'images/grey.jpg';
		}
		
		titleLink.href = data['articles'][index]['url'];
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

function addArticles(parent,category){
	var parentElement = document.querySelector(parent);

	var article = document.createElement('article');
	article.setAttribute('class','recent-news');

	var size = document.querySelectorAll('.recent-news').length;
	var start = size + 1;

	if (category == 'gaming') {
		article.setAttribute('id','recent-news-gaming'+start);	
	}else if (category == 'dev') {
		article.setAttribute('id','recent-news-dev'+start);
	}else if (category == 'news') {
		article.setAttribute('id','recent-news-news'+start);
	}
	
	var left = document.createElement('div');
	left.setAttribute('class','recent-news-left');

	var thumbLink = document.createElement('a');
	thumbLink.setAttribute('class','recent-news-thumbnail-link')

	var thumbnail = document.createElement('img');
	thumbnail.setAttribute('class','recent-news-thumbnail');
	thumbnail.setAttribute('src','images/grey.jpg');
	thumbnail.setAttribute('alt','recent news #'+start);

	thumbLink.appendChild(thumbnail);
	left.appendChild(thumbLink); 

	var right = document.createElement('div');
	right.setAttribute('class','recent-news-right');

	article.appendChild(left);
	article.appendChild(right);


	parentElement.appendChild(article);
}

