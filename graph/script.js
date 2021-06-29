'use strict'

let arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

function getRowsNum(arr){
	let Rows = Math.max(...arr);
	return Rows;
}

function getCollsNum(arr){
	let Colls = arr.length;
	return Colls;
}

function copyPaste(element){
	let fragment = document.createDocumentFragment();
	return fragment.appendChild(element.cloneNode(true))
}


function build(arr, height, width) {
//bar Container

	let barContainer = document.createElement("div");
	document.body.insertBefore(barContainer, document.body.firstChild);

	barContainer.style.width = getCollsNum(arr)*width+"px";
	barContainer.style.height = getRowsNum(arr)*height+"px";
	barContainer.className = "barContainer";

//Y axis

	let nums = document.createElement("span");
	nums.style.fontSize = "10px";
	nums.style.position = "absolute"
	nums.style.left = "-15px";
	
	for(let i = 0; i<= getRowsNum(arr); i++){
		nums.style.bottom = ((i*width)-10)+"px";
		nums.innerText = i;
		barContainer.insertBefore(copyPaste(nums), barContainer.firstChild);
	}

//X axis
	
	nums.style.bottom = "-15px";
	
	for(let i = 1; i<=getCollsNum(arr); i++){
		nums.style.left = ((i*height)-height)+"px";
		nums.innerText = i;
		barContainer.insertBefore(copyPaste(nums), barContainer.firstChild);
	}

//Bars

	let bar = document.createElement("div");
	bar.style.width = width+"px";
	bar.style.display ="inline-block";


	for(let i = 1; i<=getCollsNum(arr); ++i){
		let color;
		bar.style.height = (height*arr[i-1]) + "px"
		if(arr[i-1]<=5){

			color = "green"
		}
		else if(arr[i-1]>5 && arr[i-1]<=10){
			color = "yellow"
		}
		else {
			color = "red"
		}

		bar.style.backgroundColor = color;
		barContainer.appendChild(copyPaste(bar), barContainer.firstChild);
	}

}

build(arr, 20, 20);
