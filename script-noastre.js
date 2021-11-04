//---SCHIMBARE STIL BORDER ȘI TEXT---
window.onload = myMain;
//selectez target-ul si setez handler-ul
function myMain() {
    document.getElementById('cont1').onmouseover = schimbaStil1;
    document.getElementById('cont1').onmouseout = schimbaStil0;
    document.getElementById('cont2').onmouseover = schimbaStil2;
    document.getElementById('cont2').onmouseout = schimbaStil0;
    document.getElementById('cont3').onmouseover = schimbaStil3;
    document.getElementById('cont3').onmouseout = schimbaStil0;
}
function schimbaStil1() {
    document.getElementById('cont1').style.borderColor = "#ffff99";
    document.getElementById('b1').setAttribute("style", "font-size: 20px; font-style: normal;");
}
function schimbaStil2() {
    document.getElementById('cont2').style.borderColor = "#696969";
    document.getElementById('b2').setAttribute("style", "font-size: 20px; font-style: normal;");
}
function schimbaStil3() {
    document.getElementById('cont3').style.borderColor = "#cc3300";
    document.getElementById('b3').setAttribute("style", "font-size: 20px; font-style: normal;");
}
function schimbaStil0() {
    document.getElementById('cont1').style.borderColor = "white";
    document.getElementById('cont2').style.borderColor = "white";
    document.getElementById('cont3').style.borderColor = "white";
    document.getElementById('b1').setAttribute("style", "font-size: 17px; font-style: italic;");
    document.getElementById('b2').setAttribute("style", "font-size: 17px; font-style: italic;");
    document.getElementById('b3').setAttribute("style", "font-size: 17px; font-style: italic;");
}

//---ALERT APASARE TASTA 3---
window.addEventListener("keypress", checkKeyPress, false);

function checkKeyPress(key){
    if(key.keyCode == "51"){
        alert("Ai ghicit! Trimite-ne un mail cu codul de mai jos pe adresa de Contact Shop și vei intra în tombola pentru cele 12 beri marca BEERCRAFT.\nUrmărește secțiunea 'PĂRERI' pentru a vedea câștigătorul.\ncod: BEER12CRAFT\nShhh... Ține codul pentru tine ;) ")
    }
}