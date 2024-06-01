let actualPosition=0;
let actualToken=0;
let actualPosition2=14;
let actualToken2=0;
function moveBlue()
{
    let previousPosition=document.getElementById(actualPosition.toString())
    let p1Position=document.getElementById("p1")
    p1Position.innerHTML=actualPosition.toString()
    p1Position.style.color="blue"
    p1Position.style.padding='20px'
    let b1=document.getElementById("r1")
    let b2=document.getElementById("r2")
    let b3=document.getElementById("r3")
    let b4=document.getElementById("r4")
    let blueTokens=[b1,b2,b3,b4]
    for( i of blueTokens){
        i.style.background="blue"
    }
    
    let randomNumber=Math.floor(Math.random()*6)+1;
    actualPosition+=randomNumber;
    let position=document.getElementById(actualPosition.toString());
    if(actualPosition>53){
        actualPosition=200
    }
    if(actualPosition>204){
        actualPosition=500+randomNumber;
    }
    if(actualPosition>=500)
        {
            actualToken+=1
            actualPosition=1+randomNumber
        }
    position.innerHTML=blueTokens[actualToken].outerHTML;
    blueTokens[actualToken].outerHTML=""
    previousPosition.innerHTML=null
}
//functionality for the second player
function moveRed(){
    let p2Posision=document.getElementById("p2")
    p2Posision.innerHTML=actualPosition2.toString()
    p2Posision.style.color='red'
    p2Posision.style.padding='20px'
    let dieValue=document.getElementById("display")
    console.log(actualPosition2)
    let r1=document.getElementById('t1')
    let r2=document.getElementById('t2')
    let r3=document.getElementById('t3')
    let r4=document.getElementById('t4')
    let redTokens=[r1,r2,r3,r4]
    let previousPosition2=document.getElementById(actualPosition2.toString())
    let randomNum2=Math.floor(Math.random()*6)+1;
    actualPosition2+=randomNum2
    dieValue.innerHTML=randomNum2.toString()
    let position2=document.getElementById(actualPosition2.toString())
    position2.innerHTML=redTokens[actualToken2].outerHTML;
    console.log(actualPosition2)
    if(actualPosition2>53){
        actualPosition2 =randomNum2+1
        console.log(randomNum2)
    }
    if(actualPosition2>12 && actualPosition2<14)
    {
        actualPosition2 = randomNum2+70;
    }
    if(actualPosition2>74)
        {
            actualToken2+=1;
            actualPosition2=14
            
        }
    redTokens[actualToken2].outerHTML=""
    previousPosition2.innerHTML=null
}

//write a function which calls each of the above functions in accordance with a variable
//which will determine the player at each level
let randomChoice=1
function Main()
{
    let valueToDisplay=document.getElementById("display")

    if(randomChoice%2==0)
        {
            moveBlue()
            randomChoice++
        }
   else{
            moveRed()
            randomChoice--
        }
}
   