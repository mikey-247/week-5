console.log("button clicked")
document.getElementById("confirm_btn").onclick=function check()
{
    var age=document.getElementById("age").value;
    if (age<18)
    {var x="you cant get in";
console.log("fantastic")}
    else
    {var x="you can get in";}
    document.getElementById("get_in").innerHTML=x;
}