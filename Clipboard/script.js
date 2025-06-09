// let timeout = setTimeout(function(){
//     alert("hello");
// }, 3000);

// let text="JavaScript is hard";
// let search = text.search("hard");
// alert(search);

let quest= prompt("What's your age");
let age = parseInt(quest).value;
try{
   if(age < 18){
    console.log( "User is not eligible to register");
   }
   else{
    console.log("User is 18 and above");
   }
}

catch{
    console.log("err");
}
