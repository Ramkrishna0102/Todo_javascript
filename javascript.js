

/*

Common Methods
element.classList.add('className') → Adds a class.
element.classList.remove('className') → Removes a class.
element.classList.toggle('className') → Adds the class if it's not present, removes if it is.
element.classList.contains('className') → Checks if the class exists.


let menu = document.getElementById('menu');
menu.classList.add('active');      // Adds 'active' class
menu.classList.remove('hidden');   // Removes 'hidden' class
menu.classList.toggle('open');     // Toggles 'open' class

*/

/*

*/



const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Wanted to find the task is exist or not .
const searchImage = document.getElementById("searchImage");
const noItemsMessage = document.getElementById("no-items-message");


function addtask(){
  if(inputBox.value ===''){
    alert("You must write something!");
  }

    else{
         let li = document.createElement("li");
         li.innerHTML = inputBox.value;
        //  console.log(li);
        // listContainer.appendChild(li);

        // Delete Message 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // console.log(span);
        li.appendChild(span);

        // Edit Message
        let editli = document.createElement("button");
        editli.innerHTML = "Edit";
        // console.log(editli);
        li.appendChild(editli);
        listContainer.appendChild(li);
        
    
    }
    inputBox.value = "";
    saveData();

}



listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        saveData() ;
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        let editText = prompt("Edit your task:", e.target.parentElement.firstChild.textContent);
        if(editText !== null && editText.trim() !== ""){
            e.target.parentElement.firstChild.textContent = editText;
            saveData();
        }

    }
}, false);

// Adding the search items 

searchImage.addEventListener( "click" , function(){
  const filter = inputBox.value.toLowerCase();
  const items = listContainer.getElementsByTagName("li");
  let anyMatch = false;

    for( let i =0 ; i<items.length; i++){
        //get the task text (excluding the span)

        const text = items[i].childNodes[0].textContent.toLowerCase();
        if(text.includes(filter)){
            items[i].style.display = "";
            anyMatch=true;

        }else{
              items[i].style.display = "none";
        }
    }
      noItemsMessage.style.display = anyMatch ? "none" : "block";
       saveData();
});



function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();




