tb=document.getElementById("tbody");
td=document.getElementById("li");
p=document.getElementById("p");
b=document.getElementById("btn");
b1=document.getElementById("bts");

let Languages=["C","Python","C++","Java","Data Structures Using C"]
td.innerHTML=`${Languages}`

b.addEventListener("click",function(e){
    e.preventDefault();
    String();
})
var j=0;
function String()
{
    txt=document.getElementById("txt").value;
    for (i in Languages)
{
if(Languages[i]===txt)
   j=j+1; 
}
if(j===0)
p.innerHTML=`<p>ELement Not Found</p>`
else
p.innerHTML=`<p>ELement Found</p>`
txt="";
}
b1.addEventListener("click",function(e){
    e.preventDefault();
    clear();
})
function clear()
{
    document.getElementById("txt").value="";
}
