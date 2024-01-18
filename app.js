let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const UserScorepara= document.querySelector("#user-score");
const CompScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    // rock , paper , scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        UserScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#2E933C";
    
    }else{
        compScore++;
        CompScorepara.innerText = compScore;
        msg.innerText=`Yous lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    //Generate computer choice -> modular 
    const compChoice=genCompChoice();
    console.log("Comp choice = ",compChoice);
    if (userChoice===compChoice){
        console.log("The game was draw");
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#17255A";
    }
    else{
        let userWin = true;
        if (userChoice === 'rock'){
            //scissors  , paper
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock , scissors
            userWin = compChoice ==="rock" ? true : false; 
        }
        else{
            //rock , paper
            userWin = compChoice ==="scissors" ? true : false; 
        }
        showWinner(userWin ,userChoice, compChoice);
    } 
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});