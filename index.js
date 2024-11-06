var para = document.getElementById("para");
var textC =document.getElementById("textC");
// bold()
// italic()
// fontsizeplus()
// fontsizeminus()
var textvar = true

function bold(){
    if(textvar){
        para.style.fontWeight="bold";
        textvar=false;
    }else{
        para.style.fontWeight="normal";
        textvar=true;
    }
}
function italic(){
    if(textvar){
        para.style.fontStyle="italic";
        textvar=false;
    }else{
        para.style.fontStyle="normal";
        textvar=true;
    }
}
function fontcontroler(opt){
    var count=textC.innerHTML;
    if(opt =="plus"){
        textC.innerHTML= ++count;
    }else{
        textC.innerHTML= --count;
    }
    para.style.fontSize = `${count}px`
}