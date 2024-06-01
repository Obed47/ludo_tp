let position=0;
let position1=0;
let position2=15;
let position3=0;

function Spin(){
    let oldPos=document.getElementById(position.toString());
    if(position>59)
    {
        position=60;
    }
    let plus=Math.floor(Math.random()*6)+1;
    if(plus<=6){
        //put condition here above to only remove token if plus == 6
        position+=plus;
        //position = position + plus;
    }
    else if(plus<=6 && position>=6){
        position+=plus;
    }
    else{
        alert("try again");
    }
    if(position>53 && position+plus<55){
        //jumping and avoiding to continue going in circles
        position+=plus;
    }
    if((60-position)>plus && position>52)
        {
            alert("Can't advance");
        }
        else{
            position+=plus;
        }
    // const clickSound= new Audio('sound.mp3')
    let Die=document.getElementById("die")
    let token=document.getElementById("r2")
    token.style.background="red"
    let pos=document.getElementById("position")
    let idNUM=document.getElementById(position.toString())
    Die.innerHTML="random:"+plus, "position actu"+position;
    pos.innerHTML=position
    pos.style.margin="auto"
    idNUM.innerHTML=token.outerHTML;
    oldPos.innerHTML=""
    token.remove()
}

//get a token and move it according to the value of num
//it places itself on the corresponding it
function Spin2(){
    let button2=document.getElementById("buttton2")
    let oldPOs2=document.getElementById(position2.toString())
   let plus2=Math.floor(Math.random()*6)+1;
    let token2=document.getElementById("t1");
    //trying 
    // if(plus2==1)
    //     {
    //         button2.innerHTML=`<img src="1.png" alt="failed">`
    //     }
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
    let initialPosition=document.getElementById(position2.toString());
    initialPosition.innerHTML=token2.outerHTML;
    token2.style.background="red"
    let LevelShow=document.getElementById("die2")
    LevelShow.innerHTML=position2.toString()
    token2.innerHTML=""
    oldPOs2.innerHTML=""
}

// let r1=document.getElementById("r1")
// let r2=document.getElementById("r2")
// let r3=document.getElementById("r3")
// let r4=document.getElementById("r4")

// class token{
//     constructor(tk,value)
//     {
//         this.tk=tk,
//         this.value=0;
//     }
// }
// let red1= new token('r1',0)
// let red2= new token('r2',0)
// let red3= new token('r3',0)
// let red4=new token('r4',0)

// function GenerateRandom(){
//     let r= Math.floor(Math.random()*6)+1;
//     return r;
// }
// function MoveToken()
// {
//     let Rand=GenerateRandom();
//     red1.value+=Rand;
//     let cell=document.getElementById(red1.value.toString());
//     cell.innerHTML=red1.tk.outerHTML;
// }
