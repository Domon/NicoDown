// ==UserScript==
// @name NicoDown
// @description A simple user script which provides niconico video URLs
// @author Domon
// @match http://www.nicovideo.jp/watch/*
// ==/UserScript==
console.log("NicoDown loaded.");
var nico = "http://www.nicovideo.jp";
var video_id = "nm5074235";
var download_url = "";
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){
	console.log("readystate: " + xhr.readyState);
	if (xhr.readyState == 4) {
		console.log("responseText: " + xhr.responseText);
		var response = xhr.responseText;
		var start = response.indexOf("&url=") + 5;
		var stop = response.indexOf("&", start);
		download_url = response.substring( start, stop );
		console.log("download_url = " + download_url;
	}
}
xhr.open("GET", nico + "/api/getflv/" + video_id, true);
xhr.send(null);
