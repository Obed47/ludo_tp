let position=0;
let position1=0;
let position2=15;
let position3=0;

function Spin(){
    let token2=document.getElementById("token2")
    if(position>60)
    {
        alert("won!");
        position=60;
        token.remove()
        token.innerHTML=token2.outerHTML;
    }
    let oldPos=document.getElementById(position.toString());
    let plus=Math.floor(Math.random()*6)+1;
    if(plus<=6){
        position+=plus;
        canRemoveToken=true;
    }
    else if(plus<=6 && position>=6){
        position+=plus;
    }
    else{
        alert("try again")
    }
    if(position>53){
        position+=2;

    }
    if(59-position>plus)
        {

        }
        else{
            position+=plus;
        }
    // const clickSound= new Audio('sound.mp3')
    let Die=document.getElementById("die")
    let token=document.getElementById("token")
    let idNUM=document.getElementById(position.toString())
    Die.innerHTML="random:"+position;
    idNUM.innerHTML=token.outerHTML;
    oldPos.innerHTML=""
    token.outerHTML=""
}

//get a token and move it according to the value of num
//it places itself on the corresponding it
function Spin2(){
    let button2=document.getElementById("buttton2")
    let oldPOs2=document.getElementById(position2.toString())
   let plus2=Math.floor(Math.random()*6)+1;
    let token2=document.getElementById("t1");
    if(plus2==1)
        {
            button2.innerHTML=`<img src="1.png" alt="failed">`
        }
    if(position2>=54)
        {
            position2=1;
        }
        if(position2==12){
            position2=60;
        }
        if(plus2==6){
            position2+=plus2
        }
        else if(plus2<=6 && position2>=6){
            position2+=plus2;
        }
    token2.style.background="blue";
    let initialPosition=document.getElementById(position2.toString());
    initialPosition.innerHTML=token2.outerHTML;
    let LevelShow=document.getElementById("die2")
    LevelShow.innerHTML=position2.toString()
    token2.innerHTML=""
    oldPOs2.innerHTML=""
}