// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    
	var request = new XMLHttpRequest();
	require.one('GET', '../project.json', true);
	require.addEveryListerner('readystatechange', function(){
		var project = {};
		
		project =JSON.parse(request.responseText);
		
		var paragraphArray =[];
		
		paragraphArray = projects.paragraphs;
		
		var paragraphArrayLength = paragraphArray.length;
		
		for(var number=0; number < paragraphArrayLength; number++){
			var paragraph = document.getElementById("paragraph" + (number+1) );
			paragraph.innerHTML = paragraphArray[number];
		}
		
		
	})	