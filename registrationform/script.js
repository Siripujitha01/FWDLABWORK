
let btn=document.getElementById("subbtn");

btn.addEventListener("click",function(e)
{
e.preventDefault();
call();
})
function call()
{
let s=document.getElementById("name").value;
if (s === "" && s.length<6)
{
document.getElementById('a1').style.visibility="visible";
}
else {
    document.getElementById('a1').style.visibility="hidden";
}
let s1=document.getElementById("password").value;
if (s1 === "" && s1.length<6)
{
document.getElementById('a2').style.visibility="visible";
}
else {
    document.getElementById('a2').style.visibility="hidden";
}
let s2=document.getElementById("email").value;
if (s2 === "")
{
document.getElementById('a3').style.visibility="visible";
}
else {
    document.getElementById('a3').style.visibility="hidden";
}
let s3=document.getElementById("phonenumber").value;
if (s3 === "" && s3.length<10)
{
document.getElementById('a4').style.visibility="visible";
}
else {
    document.getElementById('a4').style.visibility="hidden";
}
let s4=document.getElementById("t").checked;
let s6=document.getElementById("e").checked;
let s7=document.getElementById("ta").checked;
let s8=document.getElementById("h").checked;
if (!s4 && !s6 && !s7 && !s8)
{
document.getElementById('a5').style.visibility="visible";
}
else {
    document.getElementById('a5').style.visibility="hidden";
}
let s9=document.getElementById("address").value;
if (s9 === "")
{
document.getElementById('a6').style.visibility="visible";
}
else {
    document.getElementById('a6').style.visibility="hidden";
}
let s5=document.getElementById("gender").checked;
let s10=document.getElementById("gender1").checked;
if (!s5 || !s10)
{
document.getElementById('a7').style.visibility="visible";
}
else {
    document.getElementById('a7').style.visibility="hidden";
}
}