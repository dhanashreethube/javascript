// let divtag = document.getElementById("codehelp");
// console.log(divtag);
// let styleoutput = divtag.style;
// console.log(styleoutput)


// let ans = divtag.style.backgroundColor ="yellow";
// console.log(ans)




// let div = document.getElementById("codehelp");
// let out = div.style.cssText = 'color: blue; font-size: 18px; background-color: grey;'
// console.log(out)




// let element = document.getElementById("codehelp");
//  element.setAttribute( "class","newclass");
//  element.setAttribute( "style", "color: red; font-size: 20px;");
// console.log(element)

// let ans = element.getAttribute("codehelp");
// console.log(ans)


// let id = document.getElementById("codehelp");
//  id.setAttribute("href","https://www.codehelp.in/");
// console.log( id)





// function add(){

//     let fpara = document.getElementById("demo");
// fpara.setAttribute("class","firstclass")
// fpara.setAttribute("style","background-color:pink; font-size: 20px;")
// console.log(fpara)


// }


// let id = document.getElementById("demo");
// function getvalue(){
//     let id = document.getElementById("demo");
//   let out =   id.getAttribute("title");
//     console.log(out)
// }

//  id.addEventListener(onclick,function(){
//   let out =   id.getAttribute("title");
//     console.log(out)
//  });



// let button = document.getElementById("myButton");

//         // Add event listener to the button
//         button.addEventListener("click", function() {
//             button.style.backgroundColor = "orange";
//             console.log("Button Clicked");
//         });







/// getting attribute:

let element = document.getElementById("demo");


element.addEventListener("click",function(){
   let output = element.getAttribute("title");
  console.log( output  )
});