const age = document.querySelector("#age");

const button = document.querySelector("#submit")
const show = document.querySelector("#display");
const clean = document.querySelector("#erase")
function call(num){

    num = age.value
    if(num>=18){
    var ut = "Click here to enter ";
    var open = ut.link("index.html");

    document.getElementById("display").innerHTML =  open;

 
        
    }

    else if (num<18 && num>0){

       return document.getElementById("display").textContent =  "You are not Eligible ";
    }

    else{

        return document.getElementById("display").textContent = "Invalid Input";
    }
}

function  submit(){

    show.value = call();

}

function erase(){

    document.getElementById("display").textContent = null ;
  
}


button.addEventListener("click",submit);
clean.addEventListener("click",erase);

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }