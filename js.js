let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const res=document.querySelector("#usre-score")
const re=document.querySelector("#com-score")


const draw=()=>{
    console.log("Draw")
    msg.innerText="Drawwww !"
    msg.style.backgroundColor="#222f3d";
}

const showWinnwer=(userWin,userChoice,CompChoice)=>{
    if(userWin){
        userScore++
        res.innerText=userScore
        console.log("You win")
        msg.innerText="You Won"
        msg.style.backgroundColor="green";
    }
    else
    {
        comScore++
        re.innerText=comScore
        console.log("you Lost")
        msg.innerText="You lost"
        msg.style.backgroundColor="red";
    }
}
  

const GencompChoice=()=>{
    let options=["rock","paper","scissors"]
    let RandIn=Math.floor(Math.random()*3);
    return options[RandIn]
}

const playGame=(userChoice)=> {
    console.log("User Choice",userChoice);
    const CompChoice=GencompChoice();
    console.log("Computer Choice",CompChoice);
    if(userChoice===CompChoice)
    {
      draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=CompChoice==="paper"?false:true;
        }else if(userChoice==="paper")
        {
            userWin=CompChoice==="scissors"?false:true;
        }
        else{
            userWin=CompChoice==="rock"?false:true;
        }
        showWinnwer(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    });
});
