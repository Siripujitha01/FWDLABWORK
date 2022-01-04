let btn=document.getElementById("clk");
let b1=document.getElementById("txt");
btn.addEventListener("click",function(e)
{
e.preventDefault();
call();
})
var i=0;
const arr=[];
function call()
{
    
  if(i==0)
    b1.innerText="REGISTRATION SUCCESSFULL";
  else{
  document.getElementById("clk").disabled = true;
  b1.innerText="";
  }
  i=i+1;
}