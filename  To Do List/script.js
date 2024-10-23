let allList = document.querySelector(".listitems");//ul
let createList = document.getElementById('listcreate');//input
let createBtn = document.getElementById('create-btn');//button

createBtn.addEventListener("click",function(){
    addToList();
});

createList.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        addToList();
    }
})

function addToList(){
    if(createList.value === ""){
        alert("Enter today work task");
    }else{
        //create li
        let list = document.createElement('li');
        list.innerText = createList.value;
        
        //create span delete btn
        let spanbtn = document.createElement('span')
        spanbtn.className = 'del-btn';
        spanbtn.innerText = '✖';

        list.appendChild(spanbtn);

        allList.appendChild(list);

    }   
    createList.value = "";

    savePresentData();
}

createBtn.addEventListener("keypress",function(){
    allList.appendChild(list);
})
//code for check and uncheck and Delete btn.
allList.addEventListener("click",function(e){
    console.log(e);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savePresentData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savePresentData();
    }
});

function savePresentData(){
    localStorage.setItem('data',allList.innerHTML);
}

function showSavedData(){
    allList.innerHTML = localStorage.getItem('data');
}

showSavedData();