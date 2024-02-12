// document.querySelector("button").addEventListener("click",handleclick)

// function handleclick(){
//     alert("button 1 is pressed!");
// }
let numberofButton = document.querySelectorAll(".drum").length;
for (let i=0;i<numberofButton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        let buttonText = this.innerHTML;
        makeSound(buttonText);
        ButtonAnimation(buttonText);
       
    });
}

document.addEventListener("keypress",function(event){
    let pressedkey = event.key;
    makeSound(pressedkey);
    ButtonAnimation(pressedkey);
        
});

function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function ButtonAnimation(pressedButton){
    let activeButton = document.querySelector("."+pressedButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}