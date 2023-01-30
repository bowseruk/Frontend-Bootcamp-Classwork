let element = document.querySelector("#myButton");

let myFunc = function(width){
    if(width > 1000){
        return function(){
            console.log("Screen width greater than 1000");
        }
    }else{
        return function(){
            console.log("screen width less than or equal to 1000");
        }
    }
}

element.addEventListener("click", myFunc(screen.width));