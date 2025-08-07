// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click",function(){
//     fpara.style.backgroundColor="pink";
//     fpara.textContent = "u r successfull !!!"
//     console.log(fpara);
// });

// fpara.removeEventListener("click",function(){
//     fpara.style.backgroundColor="pink";
//     fpara.textContent = "u r successfull !!!"
//     console.log(fpara);})



// let fpara = document.getElementById("fpara");


// function change(){
//     //let fpara = document.getElementById("fpara");
//    let out =  fpara.style.backgroundColor = "yellow";
//     console.log(out);
// }


//fpara.addEventListener("click",change);
//fpara.removeEventListener("click",change)




// let fpara = document.getElementById("fpara");

//     fpara.addEventListener("click",function(){
//     let out = fpara.innerHTML="<a href= https://www.codehelp.in/></a>";
//     console.log(out)


// })

// var button = document.getElementById("myButton");

// button.addEventListener("click",()=>{
//     let out = button.style.backgroundColor = "orange";
//     let result = button.textContent = "button clicked!!";
//     console.log("result")

// })



// let grandparent = document.querySelector("#grandparent")
// grandparent.addEventListener("click", (e)=>{
//     console.log("grandparent clicked!!")
//     e.stopPropagation()
// },false)


// let parent = document.querySelector("#parent")
// parent.addEventListener("click", (e)=>{
//     console.log("parent is clicked!!")
//     e.stopPropagation()
// },false)


// let child = document.querySelector("#child")
// child.addEventListener("click", (e)=>{
//     console.log("child is clicked!!");
//     e.stopPropagation()
// },false)







const input = document.getElementById('myInput');

    input.addEventListener('input', function(event) {
        if(isNaN(event.target.value)){

        
       
      console.log(event.target.value);}
      else{
        alert("plzz enter string")
      }
  
    });

