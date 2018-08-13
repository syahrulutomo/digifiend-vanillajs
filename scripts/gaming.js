/*
 * Gaming Page
 */ 

fetch(API.getGameIgn).then(function(response){
	return response.json();
})
.then(function(json){
	displayData(json,0,'.headline-gaming');
	displayData(json,1,'#recent-news-gaming2');
	displayData(json,2,'#recent-news-gaming4');
	displayData(json,3,'#recent-news-gaming6');
	displayData(json,4,'#recent-news-gaming8');
	displayData(json,5,'#recent-news-gaming10');
	
	fetch(API.getGamePolygon).then(function(response){
		return response.json();
	})
	.then(function(json){
		displayData(json,0,'#recent-news-gaming1');
		displayData(json,1,'#recent-news-gaming3');
		displayData(json,2,'#recent-news-gaming5');
		displayData(json,3,'#recent-news-gaming7');
		displayData(json,4,'#recent-news-gaming9');
	});
	
});

var btn = document.querySelector('#load-gaming');

// define lexical var for callback param (using closure)
var parent = '#gaming-section';
var category = 'gaming';
btn.addEventListener('click',addArticles(parent,category));

