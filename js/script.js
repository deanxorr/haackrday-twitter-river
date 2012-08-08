/* Author:

*/

var server = "http://haackr-es1.traackr.com:9200/my_twitter_river/_search"

var query = {"query":{"bool":{"must":[{"match_all":{}}],"must_not":[],"should":[]}},"from":0,"size":50,"sort":[],"facets":{}};


function sendQuery(query) {
	console.log('sendQuery called');

	$.ajax({
		url: server,
		dataType: "json",
		data: query,
		success: function(data) {
			console.log(data);
		}
	});

};

function queryListener() {
	console.log('msgListener called');

  $('a#go-button').click(function() {	//	listen for form submission
	    event.preventDefault(); //  stop page refresh

	    var query = {"query":{"bool":{"must":[{"match_all":{}}],"must_not":[],"should":[]}},"from":0,"size":50,"sort":[],"facets":{}};
	    sendQuery(query);
   });
};

$(document).ready(function() {
  console.log('client script called');
 // updateChat();
  sendQuery();
});