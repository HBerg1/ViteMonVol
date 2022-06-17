function Japon() {
    document.getElementById("Japon").style.zIndex = "3";
    document.getElementById("barJapon").style.display ="block";

    document.getElementById("Grece").style.zIndex = "2";
    document.getElementById("Canada").style.zIndex = "1";
    document.getElementById("barCanada").style.display ="none";
    document.getElementById("barGrece").style.display ="none";
 }

 function Grece() {
    document.getElementById("barGrece").style.display ="block";
    document.getElementById("Grece").style.zIndex = "1";
    document.getElementById("barCanada").style.display ="none";
    document.getElementById("barJapon").style.display ="none";
    document.getElementById("Japon").style.zIndex = "0";
    document.getElementById("Canada").style.zIndex = "0";
    
 }

 function Canada() {
    document.getElementById("barGrece").style.display ="none";
    document.getElementById("barJapon").style.display ="none";
    document.getElementById("barCanada").style.display ="block";
    document.getElementById("Japon").style.zIndex = "0";
    document.getElementById("Grece").style.zIndex = "0";
    document.getElementById("Canada").style.zIndex = "1";
    
 }


 function recherche() {
   let input = document.getElementById('rech').value
   input = input.toLowerCase();
   if (input == "japon" || input == "hakone" || input == "kyoto" || input == "osaka"|| input == "tokyo") {
       document.getElementById("jp").style.display = "block";
   }
   else if (input == "grece" || input == "athenes"|| input == "thessalonique" || input == "le peloponnese") {

       document.getElementById("el").style.display = "block";

   }
   else if (input == "canada" || input == "vancouver" || input == "kamloops") {
       document.getElementById("cnd").style.display = "block";
   }
   else {
       document.getElementById("jp").style.display = "none";
       document.getElementById("el").style.display = "none";
       document.getElementById("cnd").style.display = "none";
   }
}

function japon()
{
   location.replace("Japon.html");
}

function grece()
{
   location.replace("Grece.html");
}

function canada()
{
   location.replace("Canada.html");
}