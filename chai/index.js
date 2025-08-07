


let outer = document.getElementById("outer");
outer.addEventListener("click",function(){
    console.log("clicked on outer !!!")
},true)


let inner = document.getElementById("first");

inner.addEventListener("click",function(){
    console.log("clicked on inner ")
},true)