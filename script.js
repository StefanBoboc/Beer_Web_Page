//---CULORILE RANDOM---
function culori(){
    var a = document.getElementsByClassName("rand");
    function getRandomColor(){
        var letters = "0123456789ABCDEF";
        var color = "#";

        for(var i=0; i<6; i++){
            color += letters[Math.floor(Math.random()*16)];
        }

    return color;
}

a[0].style.color= getRandomColor();
a[1].style.color= getRandomColor();
a[2].style.color= getRandomColor();
};

culori();