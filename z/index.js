




// function addingElement(){


//     let heading = document.getElementById("title");
//       console.log(heading);


//       let newElement = document.createElement("span");
//            console.log(newElement);
//              newElement.textContent = "Hello I am a new node";
//             console.log(newElement);

//        let result = heading.insertAdjacentElement("afterbegin",newElement).style.backgroundColor="red";
//         console.log(result);

        
    

// }


// function removeElement(){
//     let parent = document.getElementById("main");
//     let child = document.getElementById("title");
//     parent.removeChild(child);
//     console.log(parent)
// }


function replaceChild(newElement,oldElement){
    let oldElement = document.getElementById("hint");
    console.log(oldElement);
    

    let newElement = document.createElement("h1");
    newElement.textContent = "Its a magic!!!";
    console.log(newElement);


    oldElement.replaceWith(newElement);
    console.log(oldElement);

 }


