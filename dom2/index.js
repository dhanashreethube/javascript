
//       // ID:
// let element = document.getElementById("codehelp")
// //console.log(element)

// let result = element.style.backgroundColor="red"
// console.log(result)




   // CLASS:
// let element1 = document.getElementsByClassName("code1")
// console.log(element1)

// let result1 = element1[1].style.backgroundColor="red"
// console.log(result1)




// let element2 = document.getElementsByClassName("code2")
// console.log(element2)

// let result2 = element2[1].style.backgroundColor="red"
// console.log(result2)



// TAGNAME:


// let element1 = document.getElementsByTagName("h2")
// console.log(element1)

// let result1 = element1[5].style.backgroundColor="red"
// console.log(result1)





// queryselector:



// let element = document.querySelectorAll(".welcome");
// console.log(element)
//  let output = element[2].style.backgroundColor = "green"
      
// console.log(output)

// let element = document.getElementById("myPara")
// console.log(element)

// let result = element.innerHTML = "<h1>Hello jee!!!</h1>"

// console.log(result)




// let element = document.getElementById("myPara")
//  console.log(element)
//  let result = element.innerText;
//  console.log(result) 

//  let output = element.innerText = "hiii"
//  console.log(output)



// let element = document.getElementById("myPara")
// console.log(element)
//  let result = element.outerHTML="<h1>hello jee kya haal chaal!!</h1>";
//   console.log(result) 



// let element = document.getElementById("myPara")
//  console.log(element)
//  let result = element.textContent="hello jee"
//  console.log(result) 



// let heading = document.createElement("h1");
// console.log(heading);

//  heading.textContent = "hello jee!!!";
// console.log(heading)


// let divtag = document.getElementsByTagName("div");
// console.log(divtag)
// document.body.divtag.insertAdjacentElement('afterbegin',heading);
// console.log(divtag)


// let parent = document.querySelector("myPara")
// console.log( parent)


// let child = document.querySelector("p");
// console.log(child)

// parent.removeChild(child);


// let element = document.querySelector("h2")
// console.log(element);
//  element.innerText = element.innerText + "from apna college";

 



// let newelement = document.createElement("h1");
// console.log(newelement)


// newelement.textContent = "hello jee !!";
// console.log(newelement)


// let element = document.getElementById("existingElement");
// console.log(element);
// let result = element.insertAdjacentElement("beforebegin",newelement);
// console.log(result);





// let newelement = document.createElement("h2");
// console.log(newelement);

// newelement.textContent = "Hello Dhanashree!!!";
// console.log(newelement);

// let parent = document.querySelector("#container");
// let result = document.body.appendChild(newelement);
// console.log(result)



// let parent = document.querySelector("#container");
// console.log(parent)


// let child = document.querySelector("p");
// console.log( child)

//  let result = parent.appendChild(child);
//  console.log(result)








//Q1: 1:create element and then 
// 2:append child

// let newelement = document.createElement("h3");
// console.log(newelement)
// newelement.textContent = "whats upp girl!!!";
// console.log(newelement)

// let bodytag = document.querySelector("body");
// console.log(bodytag);
// let result = bodytag.appendChild(newelement);
// console.log(result)




//Q2: 1: create element than 
//    2. insertAdjacentElement(,)


// let newelement = document.createElement("span");
// console.log(newelement);
//  newelement.textContent = "kya haal chaal hai !!!!";
// console.log(newelement);


// let element = document.querySelector("#container");
// let output = element.insertAdjacentElement("afterbegin",newelement)

// console.log(output)




//Q3: 1:FETCH PARENT NODE
//    2:FETCH CHILD NODE
//    3.REMOVE CHILD NODE



let parent = document.querySelector("#container");
let child = document.querySelector("p");
let out = parent.removeChild(child);
console.log(out)