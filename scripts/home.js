

/*
 * Home Page
 */

var headlineTitleLink = document.querySelector('.headline-title-link');
var headlineBannerLink = document.querySelector('.headline-banner-link');
var headlineBanner = document.querySelector('.headline-banner');
var headlineTitle = document.querySelector('.headline-title');
var headlineSummary = document.querySelector('.headline-summary');
var headlineAuthor = document.querySelector('.headline-content').lastChild.previousSibling.firstChild.nextSibling.firstChild.nextSibling;
var headlineDate = document.querySelector('.headline-content').lastChild.previousSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;


fetch(API.getHeadline).then(function(response){
	return response.json();
})
.then(function(json){
	displayData(json,0,'.headline');
	displayData(json,2,'#grid1');
	displayData(json,4,'#grid2');
	displayData(json,6,'#grid3');
	displayData(json,7,'#grid4');
	displayData(json,10,'#grid5');
	displayData(json,13,'#grid6');
	displayData(json,15,'#grid7');
	displayData(json,17,'#grid8');
	displayData(json,19,'#grid9');
});


fetch(API.getGamePolygon).then(function(response){
	return response.json();
})
.then(function(json){
	displayData(json,0,'#highlights1');
	displayData(json,1,'#recent-news1');
});

fetch(API.getGameIgn).then(function(response){
	return response.json();
})
.then(function(json){
	displayData(json,0,'#highlights2');
	displayData(json,1,'#recent-news2');
});

fetch(API.getNewsTechcrunch).then(function(response){
	return response.json();
})
.then(function(json){
	displayData(json,0,'#highlights3');
	displayData(json,1,'#recent-news3');
});

fetch(API.getDevTheNextWeb).then(function(response){
	return response.json();
})
.then(function(json){
	displayData(json,0,'#highlights4');
	displayData(json,1,'#recent-news4');
});




