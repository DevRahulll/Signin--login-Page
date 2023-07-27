let namefield=document.getElementById('namefield');
let title=document.getElementById('title');
let signinbtn=document.getElementById('signinBtn');
let signupbtn=document.getElementById('signupBtn');


signupbtn.onclick=function(){
    title.innerHTML="Sign Up";
    namefield.style.display="block";
}
signinbtn.onclick=function(){
    title.innerHTML="Login";
    namefield.style.display="none";
}