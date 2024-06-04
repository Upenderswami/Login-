        function myform()
      {
        var a=document.getElementById("pass").value;
        var b=document.getElementById("confirm").value;
        if(a=="")
        {  
           document.getElementById("passw").innerText="Please fill the password";
           return false;
        }
        else if (a.length<5)
        {
            document.getElementById("passw").innerText="Password lenth is more than 5";
           return false;  
        }
       else if(a!=b)
{
    document.getElementById("passw").innerText="Opps! password did not match";
   return false;  
}
else
{
    alert("Congratunlations ")
}
      }