

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

var urlHeadline = fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

urlHeadline.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,0,headlineTitleLink,headlineBannerLink,headlineBanner,headlineTitle,headlineSummary,headlineAuthor,headlineDate);
	
});

var highlightsThumbnailLink1 = document.querySelector('#highlights1').firstChild.nextSibling.firstChild.nextSibling;
var highlightsLink1 = document.querySelector('#highlights1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var urlHighlights1 = fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

var highlightsThumbnail1 = document.querySelector('#highlights1').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var highlightsTitle1 = document.querySelector('#highlights1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var highlightsSummary1 = document.querySelector('#highlights1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var highlightsAuthor1 = document.querySelector('#highlights1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var highlightsDate1 = document.querySelector('#highlights1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

urlHighlights1.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,0,highlightsLink1,highlightsThumbnailLink1,highlightsThumbnail1,highlightsTitle1,highlightsSummary1,highlightsAuthor1,highlightsDate1);
});

var highlightsThumbnailLink2 = document.querySelector('#highlights1').firstChild.nextSibling.firstChild.nextSibling;
var highlightsLink2 = document.querySelector('#highlights1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var urlHighlights2 = fetch('https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

var highlightsThumbnail2 = document.querySelector('#highlights2').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var highlightsTitle2 = document.querySelector('#highlights2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var highlightsSummary2 = document.querySelector('#highlights2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var highlightsAuthor2 = document.querySelector('#highlights2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var highlightsDate2 = document.querySelector('#highlights2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

urlHighlights2.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,0,highlightsLink2,highlightsThumbnailLink2,highlightsThumbnail2,highlightsTitle2,highlightsSummary2,highlightsAuthor2,highlightsDate2);
});

var highlightsThumbnailLink3 = document.querySelector('#highlights3').firstChild.nextSibling.firstChild.nextSibling;
var highlightsLink3 = document.querySelector('#highlights3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var urlHighlights3 = fetch('https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

var highlightsThumbnail3 = document.querySelector('#highlights3').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var highlightsTitle3 = document.querySelector('#highlights3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var highlightsSummary3 = document.querySelector('#highlights3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var highlightsAuthor3 = document.querySelector('#highlights3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var highlightsDate3 = document.querySelector('#highlights3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

urlHighlights3.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,0,highlightsLink3,highlightsThumbnailLink3,highlightsThumbnail3,highlightsTitle3,highlightsSummary3,highlightsAuthor3,highlightsDate3);
});

var highlightsThumbnailLink4 = document.querySelector('#highlights4').firstChild.nextSibling.firstChild.nextSibling;
var highlightsLink4 = document.querySelector('#highlights4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var urlHighlights4 = fetch('https://newsapi.org/v2/top-headlines?sources=ign&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

var highlightsThumbnail4 = document.querySelector('#highlights4').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var highlightsTitle4 = document.querySelector('#highlights4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var highlightsSummary4 = document.querySelector('#highlights4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var highlightsAuthor4 = document.querySelector('#highlights4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var highlightsDate4 = document.querySelector('#highlights4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;	

urlHighlights4.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,0,highlightsLink4,highlightsThumbnailLink4,highlightsThumbnail4,highlightsTitle4,highlightsSummary4,highlightsAuthor4,highlightsDate4);
});

var gridThumbnailLink1 = document.querySelector('#grid1').firstChild.nextSibling.firstChild.nextSibling;
var gridLink1 = document.querySelector('#grid1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var urlGrid1 = fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

var gridThumbnail1 = document.querySelector('#grid1').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var gridTitle1 = document.querySelector('#grid1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var gridSummary1 = document.querySelector('#grid1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var gridAuthor1 = document.querySelector('#grid1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var gridDate1 = document.querySelector('#grid1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;	

var gridThumbnailLink2 = document.querySelector('#grid2').firstChild.nextSibling.firstChild.nextSibling;
var gridLink2 = document.querySelector('#grid2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var gridThumbnail2 = document.querySelector('#grid2').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var gridTitle2 = document.querySelector('#grid2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var gridSummary2 = document.querySelector('#grid2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var gridAuthor2 = document.querySelector('#grid2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var gridDate2 = document.querySelector('#grid2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;	

var gridThumbnailLink3 = document.querySelector('#grid3').firstChild.nextSibling.firstChild.nextSibling;
var gridLink3 = document.querySelector('#grid3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var gridThumbnail3 = document.querySelector('#grid3').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var gridTitle3 = document.querySelector('#grid3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var gridSummary3 = document.querySelector('#grid3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var gridAuthor3 = document.querySelector('#grid3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var gridDate3 = document.querySelector('#grid3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;	

var gridThumbnailLink4 = document.querySelector('#grid4').firstChild.nextSibling.firstChild.nextSibling;
var gridLink4 = document.querySelector('#grid4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var gridThumbnail4 = document.querySelector('#grid4').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var gridTitle4 = document.querySelector('#grid4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var gridSummary4 = document.querySelector('#grid4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var gridAuthor4 = document.querySelector('#grid4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var gridDate4 = document.querySelector('#grid4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

var gridThumbnailLink5 = document.querySelector('#grid5').firstChild.nextSibling.firstChild.nextSibling;
var gridLink5 = document.querySelector('#grid5').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var gridThumbnail5 = document.querySelector('#grid5').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var gridTitle5 = document.querySelector('#grid5').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var gridSummary5 = document.querySelector('#grid5').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var gridAuthor5 = document.querySelector('#grid5').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var gridDate5 = document.querySelector('#grid5').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

var gridThumbnailLink6 = document.querySelector('#grid6').firstChild.nextSibling.firstChild.nextSibling;
var gridLink6 = document.querySelector('#grid6').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var gridThumbnail6 = document.querySelector('#grid6').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var gridTitle6 = document.querySelector('#grid6').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var gridSummary6 = document.querySelector('#grid6').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var gridAuthor6 = document.querySelector('#grid6').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var gridDate6 = document.querySelector('#grid6').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

var gridThumbnailLink7 = document.querySelector('#grid7').firstChild.nextSibling.firstChild.nextSibling;
var gridLink7 = document.querySelector('#grid7').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var gridThumbnail7 = document.querySelector('#grid7').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var gridTitle7 = document.querySelector('#grid7').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var gridSummary7 = document.querySelector('#grid7').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var gridAuthor7 = document.querySelector('#grid7').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var gridDate7 = document.querySelector('#grid7').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

var gridThumbnailLink8 = document.querySelector('#grid8').firstChild.nextSibling.firstChild.nextSibling;
var gridLink8 = document.querySelector('#grid8').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var gridThumbnail8 = document.querySelector('#grid8').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var gridTitle8 = document.querySelector('#grid8').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var gridSummary8 = document.querySelector('#grid8').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var gridAuthor8 = document.querySelector('#grid8').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var gridDate8 = document.querySelector('#grid8').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

var gridThumbnailLink9 = document.querySelector('#grid9').firstChild.nextSibling.firstChild.nextSibling;
var gridLink9 = document.querySelector('#grid9').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var gridThumbnail9 = document.querySelector('#grid9').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var gridTitle9 = document.querySelector('#grid9').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild;
var gridSummary9 = document.querySelector('#grid9').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var gridAuthor9 = document.querySelector('#grid9').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var gridDate9 = document.querySelector('#grid9').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;

urlGrid1.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,1,gridLink1,gridThumbnailLink1,gridThumbnail1,gridTitle1,gridSummary1,gridAuthor1,gridDate1);
	getData(data,4,gridLink2,gridThumbnailLink2,gridThumbnail2,gridTitle2,gridSummary2,gridAuthor2,gridDate2);
	getData(data,6,gridLink3,gridThumbnailLink3,gridThumbnail3,gridTitle3,gridSummary3,gridAuthor3,gridDate3);
	getData(data,9,gridLink4,gridThumbnailLink4,gridThumbnail4,gridTitle4,gridSummary4,gridAuthor4,gridDate4);
	getData(data,11,gridLink5,gridThumbnailLink5,gridThumbnail5,gridTitle5,gridSummary5,gridAuthor5,gridDate5);
	getData(data,13,gridLink6,gridThumbnailLink6,gridThumbnail6,gridTitle6,gridSummary6,gridAuthor6,gridDate6);
	getData(data,15,gridLink7,gridThumbnailLink7,gridThumbnail7,gridTitle7,gridSummary7,gridAuthor7,gridDate7);
	getData(data,17,gridLink8,gridThumbnailLink8,gridThumbnail8,gridTitle8,gridSummary8,gridAuthor8,gridDate8);
	getData(data,19,gridLink9,gridThumbnailLink9,gridThumbnail9,gridTitle9,gridSummary9,gridAuthor9,gridDate9);
});

var recentThumbnailLink1 = document.querySelector('#recent-news1').firstChild.nextSibling.firstChild.nextSibling;
var recentLink1 = document.querySelector('#recent-news1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var urlRecent1 = fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

var recentThumbnail1 = document.querySelector('#recent-news1').firstChild.nextSibling.firstChild.nextSibling.firstChild;
var recentTitle1 = document.querySelector('#recent-news1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentSummary1 = document.querySelector('#recent-news1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var recentAuthor1 = document.querySelector('#recent-news1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentDate1 = document.querySelector('#recent-news1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;	
console.log(recentTitle1);

var recentThumbnailLink2 = document.querySelector('#recent-news1').firstChild.nextSibling.firstChild.nextSibling;
var recentLink2 = document.querySelector('#recent-news1').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var urlRecent2 = fetch('https://newsapi.org/v2/top-headlines?sources=ign&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

var recentThumbnail2 = document.querySelector('#recent-news2').firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentTitle2 = document.querySelector('#recent-news2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentSummary2 = document.querySelector('#recent-news2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var recentAuthor2 = document.querySelector('#recent-news2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentDate2 = document.querySelector('#recent-news2').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;	
console.log(recentThumbnail2);

var recentThumbnailLink3 = document.querySelector('#recent-news3').firstChild.nextSibling.firstChild.nextSibling;
var recentLink3 = document.querySelector('#recent-news3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var urlRecent3 = fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

var recentThumbnail3 = document.querySelector('#recent-news3').firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentTitle3 = document.querySelector('#recent-news3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentSummary3 = document.querySelector('#recent-news3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var recentAuthor3 = document.querySelector('#recent-news3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentDate3 = document.querySelector('#recent-news3').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;	

var recentThumbnailLink4 = document.querySelector('#recent-news4').firstChild.nextSibling.firstChild.nextSibling;
var recentLink4 = document.querySelector('#recent-news4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
var urlRecent4 = fetch('https://newsapi.org/v2/top-headlines?sources=ign&apiKey=6b0a8ee04320420cae2ba7e7e1d5c55d');

var recentThumbnail4 = document.querySelector('#recent-news4').firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentTitle4 = document.querySelector('#recent-news4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentSummary4 = document.querySelector('#recent-news4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
var recentAuthor4 = document.querySelector('#recent-news4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
var recentDate4 = document.querySelector('#recent-news4').firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;	

urlRecent1.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,1,recentLink1,recentThumbnailLink1,recentThumbnail1,recentTitle1,recentSummary1,recentAuthor1,recentDate1);
})

urlRecent2.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,3,recentLink2,recentThumbnailLink2,recentThumbnail2,recentTitle2,recentSummary2,recentAuthor2,recentDate2);
})

urlRecent3.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,3,recentLink3,recentThumbnailLink3,recentThumbnail3,recentTitle3,recentSummary3,recentAuthor3,recentDate3);
})

urlRecent4.then(function(response){
	return response.json();
})
.then(function(json){
	var data = json;
	getData(data,6,recentLink4,recentThumbnailLink4,recentThumbnail4,recentTitle4,recentSummary4,recentAuthor4,recentDate4);
})


