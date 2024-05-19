
let position=0;

function Spin(){
    let circle=document.getElementById("circle1")
    position+=Math.floor(Math.random()*6)+1;
    if(position>=64){
        alert("Won!")
    }
    let Die=document.getElementById("die")
    let token=document.getElementById("token")
    let idNUM=document.getElementById(position.toString())
    Die.innerHTML="random:"+position;
    idNUM.innerHTML=token.outerHTML;
    ReduceToken()
}
function ReduceToken()
{
    let t1=document.getElementById("token")
    let t2=document.getElementById("token1")
    let t3=document.getElementById("token2")
    let t4=document.getElementById("token3")
    let tokenArray=[t1,t2,t3,t4]
    tokenArray.pop()
    console.log(tokenArray)
}
//get a token and move it according to the value of num
//it places itself on the corresponding it