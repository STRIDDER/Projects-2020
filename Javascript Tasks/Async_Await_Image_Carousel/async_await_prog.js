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

let i = 0; //The Initial Value
let time = 3000; //Time Between Millisecond
let data = [];
async function slide_show(data_link) {
	try {
		const response = await fetch(
			`https://dog.ceo/api/breed/${data_link}/images`
		);
		const resp_obj = await response.json();

		//console.log(resp_obj.message.length);
		//console.log(resp_obj.message);
		// slide_show(resp_obj.message);
		// setInterval(display(resp_obj.message), time);
		display(resp_obj.message);
	} catch (e) {
		console.log("You encountered a Bug at slide");
	}
}

function display(value) {
	data = value;
	// setInterval(slide_data(value), time);
}

function slide_data() {
	//document.slide.src = abc[i];
	// setInterval(display_check(value), 2000);
	document.getElementById("slide_image").src = data[i];
	if (i < data.length - 1) {
		i++;
	} else {
		i = 0;
	}
}
setInterval(slide_data, time);
$(document).on("change", "#option-list", function () {
	var text = $("option:selected", this).text(); //to get selected text
	// alert(`${text}`);
	//console.log("The jquery value " + text);
	slide_show(text);
});
