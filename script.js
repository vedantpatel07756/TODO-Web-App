
var count=0;

var listarr=[];
// let task = document.getElementById("input");

// console.log(listarr.length)
// const userInput = prompt("Please enter Your Name");


// localStorage.setItem("myName",userInput);

let avail=localStorage.getItem("myName");

if(avail==null){
    const userInput = prompt("Please enter Your Name");
    localStorage.setItem("myName",userInput);
    avail=localStorage.getItem("myName");
}



 document.getElementById("name").innerHTML=avail;



window.onload = (event) => {
    const storedArrayString = localStorage.getItem('myArrayKey');
    const storedArray = JSON.parse(storedArrayString);

    for(let i=0;i<storedArray.length;i++){
        listarr.push(storedArray[i]);
        createlist(storedArray[i]);
        console.log(listarr);
    }

    console.log(storedArray.length);

    

    
  };


const enter=addEventListener("keypress",(event)=>{
    if (event.key === 'Enter') {
        addtask();
      }

})

        
function addtask(){

    
    let task = document.getElementById("input");
    listarr.push(task.value);

    if(task.value===""){
        alert("Please Write Something ...");
        return 0;
       }

    createlist(task.value);
  
// localStorage.setItem("myitems"+count,task.value);

// listarr.push(task.value);

// console.log(listarr);


const arrayString = JSON.stringify(listarr);
localStorage.setItem('myArrayKey', arrayString);




task.value="";
}


function createlist(value){
    let ul=document.getElementById("taskList");

    let inputE= document.createElement("input");
    let a=document.createElement("a");

    let del=document.createElement("button");
   // document.getElementById("new").innerHTML=task.value;
   

 
  
 
   count++;
   inputE.type="checkbox";
    li=document.createElement("li");
    a.innerHTML=value;
    del.textContent='X';
    del.className='delete';
    del.id=count;
    del.onclick=function() { re(this.id); };
 
 
    document.getElementById("count").innerHTML=count;
   // console.log(del.onclick.arguments);
    li.appendChild(inputE);
    li.appendChild(a);
    ul.appendChild(li);
    li.appendChild(del);
    
    return 0;
}







function re(id){

            count--;

            document.getElementById("count").innerHTML=count;
           let li=document.getElementById(id);

           const find=li.parentElement.childNodes[1].firstChild.data;
     console.log(find)
        //    console.log("element delete position="+id-1);
        
        //    listarr.splice(id-1, 1); // last element not delete error while deleting element 

        const deleteindex=listarr.indexOf(find);

        if (deleteindex !== -1) {
            listarr.splice(deleteindex, 1); // Removes the item with the specified value
        }

           li.parentNode.remove(li);

        const arrayString = JSON.stringify(listarr);
        localStorage.setItem('myArrayKey', arrayString);

        //    console.log(listarr);

         
            return 0;
        }


function edit(){
    const userInput = prompt("Please enter Your Name");
    localStorage.setItem("myName",userInput);

    location.reload();
}









