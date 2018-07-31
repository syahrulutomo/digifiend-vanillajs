/*
 * Gaming Page
 */ 

var headlineGamingTitleLink = document.querySelector('.headline-gaming-title-link');
var headlineGamingBannerLink = document.querySelector('.headline-gaming-banner-link');
var headlineGamingBanner = document.querySelector('.headline-gaming-banner');
var headlineGamingTitle = document.querySelector('.headline-gaming-title');
var headlineGamingSummary = document.querySelector('.headline-gaming-summary');
var headlineGamingAuthor = document.querySelector('.headline-gaming-content').lastChild.previousSibling.firstChild.nextSibling.firstChild.nextSibling;
var headlineGamingDate = document.querySelector('.headline-gaming-content').lastChild.previousSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;


var urlHeadlineGaming = fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

urlHeadlineGaming.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,1,headlineGamingTitleLink,headlineGamingBannerLink,headlineGamingBanner,headlineGamingTitle,headlineGamingSummary,headlineGamingAuthor,headlineGamingDate);
	
});


