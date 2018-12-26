/**
 * Created by web on 2018/12/5.
 */
function show(){
    var box=document.getElementById("show")
    var text=box.innerHTML;
    //  console.log(text)
    var newbox=document.createElement("span");
    var btn=document.createElement("a");
    newbox.innerHTML=text.substring(0,50);
    btn.innerHTML=text.length>50?"更多...":"";
    btn.href="#show";
    btn.onclick=function(){
        if(btn.innerHTML=='更多...'){
            btn.innerHTML='收起'
            newbox.innerHTML=text;
        }else{
            btn.innerHTML="更多...";
            newbox.innerHTML=text.substring(0,50);
        }
    }
    box.innerHTML='';
    box.appendChild(newbox);
    box.appendChild(btn);
}show();

