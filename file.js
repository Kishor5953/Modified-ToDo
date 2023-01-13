let name = document.getElementById('input1');
let desc = document.getElementById('input2');
let data = document.getElementById('toDoContainer');
let button = document.getElementById('submit');

button.addEventListener("click" , function(){
    var paragragh = document.createElement('div');
    paragragh.className = "para"
    data.appendChild(paragragh);
    
    paragragh.innerHTML = name.value;


})