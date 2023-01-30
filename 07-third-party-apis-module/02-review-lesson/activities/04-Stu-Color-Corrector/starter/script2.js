let element = document.querySelector("#myButton");

let otherFunc = function(){
    console.log("Screen wider than 1000 px");
}

let myFunc = function(width){
    if(width > 1000){
        return otherFunc;
    }else{
        return function(){
            console.log("Screen less than or equal to 1000 px");
        }
    }
}

element.addEventListener("click", myFunc(screen.width));
// //element.addEventListener("click", function(){
//     console.log("Screen wider than 1000 px");
// })