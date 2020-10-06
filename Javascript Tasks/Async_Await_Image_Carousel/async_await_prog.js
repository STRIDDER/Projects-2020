let data_slide;
async function start() {
	try {
		// console.log("Worked");
		const response_status = await fetch(
			"https://dog.ceo/api/breeds/list/all"
		);
		const response_data = await response_status.json();
		//console.log(response_data.message);
		data_slide = response_data.message;
		createlist(response_data.message); //API Object
	} catch (err) {
		console.log("You encountered a Bug");
	}
}
start();
function createlist(data_obj) {
	//console.log("Working function");
	document.getElementById("demo").innerHTML = `
<select id="option-list" name="option-list">
<option>Choose a Dog Breed</option>
${Object.keys(data_obj)
	.map((x, i) => {
		return `<option value=${i + 1}>${x}</option>`;
	})
	.join("")}
</select>
`;
}
// async function slide() {
// 	try {
// 		const response = await fetch("https://dog.ceo/api/breeds/image/random");
// 		const resp_obj = await response.json();
// 		console.log(resp_obj.message);
// 		// slide_show(resp_obj.message);
// 	} catch (e) {
// 		console.log("You encountered a Bug at slide");
// 	}
// }

async function slide_show(data_link) {
	try {
		const response = await fetch(
			`https://dog.ceo/api/breed/${data_link}/images`
		);
		const resp_obj = await response.json();
		//console.log(resp_obj.message.length);
		//console.log(resp_obj.message);
		// slide_show(resp_obj.message);
		display(resp_obj.message);
	} catch (e) {
		console.log("You encountered a Bug at slide");
	}
}
function display(value) {
	// value.map((x, i) => {
	let myvar = setInterval(toggle, 100);
	// setInterval(function () {
	function toggle() {
		value.map((x, i) => {
			// for (var i = 0; i < value.length; i++) {
			console.log("");
			console.log("The value of of index is " + i);
			//console.log("The value link is " + x);
			// document.getElementById("dog-image-container").innerHTML = `
			// <img src=${x}>`;

			setInterval(function () {
				document.getElementById("dog-image-container").innerHTML = `
			<img src=${x}>`;
				stoptoggle();
			}, 500);
			// stoptoggle();
		});
		//stoptoggle();
		// toggle();
	}
	// }, 1500);
	function stoptoggle() {
		clearInterval(myvar, 5000);
	}
	// });

	// <img src="https://dog.ceo/api/breed/${value}/images">
}
// $("#option-list").change(function () {
// 	var id = $(this).val();
// 	var text = $("option:selected", this).text(); //to get selected text
// 	alert(text);
// });
// $(() => {
// 	$("#option-list").change(function () {
// 		var id = $(this).val();
// 		var text = $("option:selected", this).text(); //to get selected text
// 		alert(text);
// 	});
// });

$(document).on("change", "#option-list", function () {
	var text = $("option:selected", this).text(); //to get selected text
	// alert(`${text}`);
	//console.log("The jquery value " + text);
	slide_show(text);
});

// $(() => {
// 	$("#option-list").on("change", function () {

// 		var value = $(this).val();

// 		var text = $("option:selected", this).text(); //to get selected text
// 		// console.log(text);
// 		alert("text");
// 		/*	// console.log(v);
// 		// var value = $(this).attr();
// 		// console.log(v.target.value);
// 		// console.log("JQ 2 work"); */
// 	});
// });
//return `<option>${x}</option>`
/*
Object.keys(data_obj).map( x=>{
	 console.log("Arrow Working");
	 return <option> ${x}</option>
	});sss
*/
/*
for(const x in data_obj)
{	
	<option>${x}</option>
}
*/
/*

return (document.getElementById("demo").innerHTML = `
<select>
<option>Choose a Dog Breed</option>
Object.keys(data_obj).map( x => <option> ${x}</option>);
</select>
`);
*/
