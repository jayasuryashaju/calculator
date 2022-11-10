function clicks(val){
    document.getElementById("display").value+=val
}
function cleardis(){
    document.getElementById("display").value=""
}
function equalsclicks()
{
    var text=document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result
}
