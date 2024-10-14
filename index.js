function hide()
{
    var p=document.getElementById('para');
    p.innerHTML=""
}

function show(){
    var p=document.getElementById('para');

    var content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad tempore nostrum aut expedita saepe velit animi in error hic. Qui ut voluptate veritatis culpa magni nisi expedita nulla consectetur?"
   
    p.innerHTML=content
}