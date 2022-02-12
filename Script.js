console.log("Welcome to the Tic Tac Toe game");
// let music=new Audio('music.mp3');
let audioTurn=new Audio('Clicking-Sound.wav');
let win=new Audio('win.mp3');
let turn="X";
// function to change the turn;
let isGameOver=false;
const StartingTime=10;
let time=5;
let myinterval;
myinterval=setInterval(UpdateTimer,1000);

let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],  
];

const changeTurn=()=>{
    time=5;
return turn==="X"? "0" : "X";
}


// function to check for win
const checkWin =()=>{
let boxtexts=document.getElementsByClassName("boxtext");
 wins.forEach(e =>{
     if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
        for(let i=0; i<3; i++){
            boxtexts[e[i]].style.backgroundColor="rgb(120, 94, 155)";
            boxtexts[e[i]].parentNode.style.backgroundColor='rgb(120, 94, 155)';
        }
        win.play();
        document.querySelector('.Info').innerText=boxtexts[e[0]].innerText+" Won";
         isGameOver=true;
         document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width="20vw";
         clearInterval(myinterval);
     }
 })
}
// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText=turn;
           turn=changeTurn();
           checkWin();
           audioTurn.play();
           if(!isGameOver){
            document.getElementsByClassName('Info')[0].innerText = "Turn For "+turn;
           } 
        }
    })
})
//Onclick Listener to reset button
reset.addEventListener("click", ()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
           console.log("changing color");
           for(let i=0; i<3; i++){
               boxtexts[e[i]].style.backgroundColor="black";
               boxtexts[e[i]].parentNode.style.backgroundColor='black';
           }
       }
   });
let boxText=document.querySelectorAll('.boxtext');
Array.from(boxText).forEach(element=>{
    element.innerText="";
});

turn='X';
time=5;

document.getElementsByClassName('Info')[0].innerText = "Turn For "+turn;
document.getElementsByClassName('timer')[0].innerText = "0: "+time+" sec";
document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width="0px";
console.log(isGameOver)
if(isGameOver==true){
  myinterval= setInterval(UpdateTimer,1000);
  isGameOver=false;
}

})

function UpdateTimer(){
    
    if(time==0){
        time=5;
        turn=changeTurn();
        document.getElementsByClassName('Info')[0].innerText = "Turn For "+turn;
    }
    let SecondsRemained=time-1;
    document.getElementsByClassName('timer')[0].innerText = "0: "+SecondsRemained+" sec";
    time--;

}