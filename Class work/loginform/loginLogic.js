// function check() {
//     let uname = document.getElementById("uname").value;
//     let pword = document.getElementById("pword").value;

//     if (!uname && !pword) {
//         alert("Please enter both username and password.");
//     } 
//     else if(!uname){
//         alert("Please enter username.");

//     }
//     else if(!pword){
//         alert("Please enter password.");

//     }
//     else {
//         alert("Welcome");
//     }
// }
function check(){
var button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Button was clicked");
});
}
