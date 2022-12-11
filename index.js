let buttonsCount =
	document.querySelectorAll(".button").length;  // calculates the elements with class name "button"

for (let n = 0; n < buttonsCount; n++) {

document.querySelectorAll(".button")[n]
.addEventListener("click", function() {

	let buttonStyle = this.innerHTML;
	sound(buttonStyle);
    
	
});
}



document.addEventListener("keydown", function(event) {
InstrumentSound(event.key);

});

// we can use "switch-case" instead of "if-else"

function InstrumentSound(keyPressed) {
    if (keyPressed==="w"){
        let sound1 = new Audio("C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/crash.mp3");
	    sound1.play();
    }
    else if (keyPressed==="a"){
        let sound2 = new Audio("C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/kick-bass.mp3");
	    sound2.play();
    }
    else if (keyPressed==="s"){
        let sound3 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/snare.mp3');
	    sound3.play();
    }
    else if (keyPressed==="d"){
        let sound4 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/tom-1.mp3');
	    sound4.play();
    }
    else if (keyPressed==="j"){
        let sound5 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/tom-2.mp3');
	    sound5.play();
    }
    else if (keyPressed==="k"){
       
        let sound6 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/tom-3.mp3');
        sound6.play();
	

	
    }
    else if (keyPressed==="l"){
        
        let sound7 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/tom-4.mp3');
        sound7.play();
    }
    
}


document.addEventListener("click", function(event) {
    InstrumentButtonSound(event.target.id);
    
});

function InstrumentButtonSound(buttonPressed) {
    if (buttonPressed==="crash"){
        let sound1 = new Audio("C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/crash.mp3");
	    sound1.play();
    }
    else if (buttonPressed==="kick"){
        let sound2 = new Audio("C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/kick-bass.mp3");
	    sound2.play();
    }
    else if (buttonPressed==="snare"){
        let sound3 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/snare.mp3');
	    sound3.play();
    }
    else if (buttonPressed==="tom-1"){
        let sound4 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/tom-1.mp3');
	    sound4.play();
    }
    else if (buttonPressed==="tom-2"){
        let sound5 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/tom-2.mp3');
	    sound5.play();
    }
    else if (buttonPressed==="tom-3"){
       
        let sound6 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/tom-3.mp3');
        sound6.play();
	

	
    }
    else if (buttonPressed==="tom-4"){
        
        let sound7 = new Audio('C:/Users/garak/Downloads/DrumsKit/Drum Kit Starting Files/sounds/tom-4.mp3');
        sound7.play();
    }
    
}



      