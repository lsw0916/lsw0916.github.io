//console.log('Hi!');

// window: The entire browser window

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

//console.log(winWidth)

//window.location.href = 'https://google.com';
//window.location.pathname = '/nosuchpath';

//
window.onload = function() {
	// alert('Website is ready.');
	// window.document: The entire HTML document
	// document: The entire HTML document
	let siteTitle = document.title;
	// console.log(siteTitle);
    
    //存取 html document 內容
	let allDivs = document.getElementsByTagName('div');
	//console.log(allDivs[0]);
	//console.log(allDivs[1].innerText);

	let emById = document.getElementById('div3');
	//console.log(emById.innerText);

    let classEms = document.getElementsByClassName('group1');
    //console.log(classEms[0].innerText);

	let emBySelector = document.querySelector('div > p');
	//console.log(emBySelector.innerText);

	let emBySelector = document.querySelectorAll('div > p');
	console.log(emBySelector.length);
}