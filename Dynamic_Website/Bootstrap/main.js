const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");
const textArray = ["fancy", "better", "modern"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
	//To type a character then pause and wait for typing delay before calling again
	if (charIndex < textArray[textArrayIndex].length) {
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	} else {
		//erase
		setTimeout(erase, newTextDelay);
	}
}
function erase() {
	if (charIndex > 0) {
		//Means String not entirerly erased yet
		//Remove character and call array function again
		typedTextSpan.textContent = textArray[textArrayIndex].substring(
			0,
			charIndex - 1
		); //0 to charIndex-1 value tk chalega
		charIndex--;
		setTimeout(erase, erasingDelay);
	} else {
		//CAll type function in order to call te nest string with more delay
		textArrayIndex++;
		if (textArrayIndex >= textArray.length) textArrayIndex = 0;
		//Infinitely looping through strings
		setTimeout(type, typingDelay + 1100);
	}
}
document.addEventListener("DOMContentLoaded", function () {
	setTimeout(type, typingDelay + 250);
});

// The nav bar scroll
var $document = $(document),
	$element = $(".navbar"),
	navbarDefault = "navbar-default";
navbarTransparent = "navbar-transparent";

fadeInDown = "fadeInDown";
$document.scroll(function () {
	if ($document.scrollTop() >= 100) {
		//user scrolled more than 100 pixel
		$element.addClass(navbarDefault);
		$alement.removeClass(navbarTransparent);
		$element.addClass(fadeInDown);
	} else {
		$element.addClass(navbarTransparent);
		$element.removeClass(navbarDefault);
		$element.removeClass(fadeInDown);
	}
});
