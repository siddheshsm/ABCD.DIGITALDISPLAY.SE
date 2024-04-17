function DisplayTime(){
    var d = new Date();
    var hour = d.getHours();
    var minuts = d.getMinutes();
    var sec = d.getSeconds();
    document.getElementById("time").innerHTML = hour +":"+ minuts+ ":" + sec;
}

setInterval(DisplayTime,1000);



// IMAGE VIEW


var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "images/image1.jpg";
images[1] = "images/image2.jpg";
images[2] = "images/image3.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", 5000);
}

// Run function when page loads
window.onload=changeImg;


// NOTIFICATION VIEW

var j = 0;
var text = [];
text[0]="Guest lecture on Android development is organised in cc ar 10:14";
text[1]= "all FE students are needed to fill exam form till 20-4-2024"; 

function changeText(){
	if(j<text.length){
		document.getElementById("notifications").innerHTML = text[j];
	    j++;
	}else{
		j = 0;
	}

}

setInterval(changeText,3500);

// full screen
document.addEventListener("dblclick",() => {

	document.documentElement.requestFullscreen().catch((e) =>{
		console.log(e);
	});

});
