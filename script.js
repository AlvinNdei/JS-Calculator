let button=document.getElementById('mybutton');
button.addEventListener("click",function(){
    alert('Your info was submitted');
});
let heading=document.querySelector("h1");
heading.addEventListener('mouseover',function(){
    heading.style.color="red";
});
heading.addEventListener('mouseout',function(){
    heading.style.color="black";
});
let btt=document.querySelector("button");
btt.addEventListener('mouseover',function(){
    btt.style.color="blue";
});
btt.addEventListener('mouseout',function(){
    btt.style.color="black";
});
document.addEventListener("keydown",function(event){
    console.log('You pressed the ${event.key} key');
    if (event.key==="Enter"){
        console.log("Enter key pressed");
    }
});