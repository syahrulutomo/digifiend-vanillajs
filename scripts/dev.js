/*
 * news Page
 */ 

fetch(API.getDevHackNews).then(function(response){
	return response.json();
})
.then(function(json){
	displayData(json,0,'.headline-dev');
	displayData(json,1,'#recent-news-dev2');
	displayData(json,2,'#recent-news-dev4');
	displayData(json,3,'#recent-news-dev6');
	displayData(json,4,'#recent-news-dev8');
	displayData(json,5,'#recent-news-dev10');
	
	fetch(API.getDevTheNextWeb).then(function(response){
		return response.json();
	})
	.then(function(json){
		displayData(json,0,'#recent-news-dev1');
		displayData(json,1,'#recent-news-dev3');
		displayData(json,2,'#recent-news-dev5');
		displayData(json,3,'#recent-news-dev7');
		displayData(json,4,'#recent-news-dev9');
	});
	
});

// addArticles('#dev-section','dev');