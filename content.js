run = false;
var i = 0;
var images = [
	'http://assets2.vice.com/images/articles/crops/2013/03/09/lil-bub-friendz-premieres-at-tribeca-1413323823460-crop_mobile_400.jpeg',
	'http://i.ytimg.com/vi/p2H5YVfZVFw/hqdefault.jpg',
	'http://dougleschan.com/the-recruitment-guru/wp-content/uploads/2014/07/spangles-the-crossed-eyed-cat-funny-photos1.jpg.pagespeed.ce_.nzeCTfywzf.jpg',
	'http://images4.fanpop.com/image/photos/15200000/crazy-cats-LOL-cats-15202665-468-373.jpg',
	'http://www.funnypica.com/wp-content/uploads/2013/01/Funny-Cats-05.jpg',
	'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvk3tnwO5Skb6YapKsIua0OsFJY2bWsFkiPdEMTROEKufeMsue',
	'http://wondrouspics.com/wp-content/uploads/2013/02/Funny-Cats-1.jpg',
	'http://petsbunch.com/wp-content/uploads/2013/12/more-funny-cat-pictures-54.jpg',
	'http://www.funnypica.com/wp-content/uploads/2012/11/Funny-Cats-Big-Eyed-Cat.jpg',
	'https://lh3.googleusercontent.com/-leY-3ckDs6M/AAAAAAAAAAI/AAAAAAAAAE4/KcQIvsD4FBE/photo.jpg'
]

var funHover1 = function(img){
	console.log(run);
	if(run){
		$(img).height($(img).height() * 1.02);
		$(img).width($(img).width() * 1.02);
		$(img).css('border', 'solid 1px #59ACFF');
	}
}

var funHover2 = function(img){
	if(run){
		$(img).height($(img).height() / 1.02);1
		$(img).width($(img).width() / 1.02);
		$(img).css('border', '0px');
	}	
}

function funClick(img) {
	if(run){
		event.preventDefault();
		var oldImage = img;
		oldImage.src = images[i++];
		if (i >= 10) i = 0;
	}
}

$(document).ready(function(){
	$('img').hover( 
		function(){
			funHover1(this);
		}, 
		function() {
			funHover2(this);
		}
	);
	$('img').click(
		function(){
			funClick(this);
		}
	);		
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	if (request.text == "1") {
		sendResponse({type: "1"});
		console.log('on');
		run = true;		
	}
	else {
		sendResponse({type: "0"});
		console.log('off');	
		run = false; 	
	}
});
