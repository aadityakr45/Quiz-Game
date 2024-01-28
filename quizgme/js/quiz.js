let ques1 = document.querySelector("#ques1");
let ques2 = document.querySelector("#ques2");
let ques3 = document.querySelector("#ques3");
let ques4 = document.querySelector("#ques4");
let ques5 = document.querySelector("#ques5");
let ques6 = document.querySelector("#ques6");
let submitBtn = document.querySelector("#submit-btn");
let resetBtn = document.querySelector("#reset-btn");
let scoreEl = document.querySelector("#score");
let scoreBg = document.querySelector(".buttonEl");

let Msg1 = document.querySelector("#msg1");
let Msg2 = document.querySelector("#msg2");
let Msg3 = document.querySelector("#msg3");
let Msg4 = document.querySelector("#msg4");
let Msg5 = document.querySelector("#msg5");
let Msg6 = document.querySelector("#msg6");

let score = 0;


resetBtn.addEventListener("click", function() {
    Msg1 = "";
    Msg2 = "";
    Msg3 = "";
    Msg4 = "";
    Msg5 = "";
    Msg6 = "";

});

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    let ans1  = ques1.selectedIndex;
    let ans2  = ques2.selectedIndex;
    let ans3  = ques3.selectedIndex;
    let ans4  = ques4.selectedIndex;
    let ans5  = ques5.selectedIndex;
    let ans6  = ques6.selectedIndex;
    
    console.log(ans1);
    console.log(ans2);
    console.log(ans3);
    console.log(ans4);
    console.log(ans5);
    console.log(ans6);


    if(Msg1.className != 'correct'){
        checkForQues1(ans1);
    }else if(ans1 !=3){
        Msg1.classList.remove('correct');
        Msg1.classList.add('wrong');
        Msg1.innerText = "Wrong Answer";
    }else if(ans1 === 0){
        Msg1.classList.remove('correct wrong')
    }
    if(Msg2.className != "correct"){
        checkForQues2(ans2);
    }
    else if(ans2 !=1){
        Msg2.classList.remove('correct');
        Msg2.classList.add('wrong');
        Msg2.innerText = "Wrong Answer";
    }else if(ans2 === 0){
        Msg2.classList.remove('correct wrong')
    }

    if(Msg3.className != "correct"){
        checkForQues3(ans3);
    }
    else if(ans3 !=2){
        Msg3.classList.remove('correct');
        Msg3.classList.add('wrong');
        Msg3.innerText = "Wrong Answer";
    }else if(ans3 === 0){
        Msg3.classList.remove('correct wrong')
    }

    if(Msg4.className != "correct"){
        checkForQues4(ans4);
    }
    else if(ans4 !=2){
        Msg4.classList.remove('correct');
        Msg4.classList.add('wrong');
        Msg4.innerText = "Wrong Answer";
    }else if(ans4 === 0){
        Msg4.classList.remove('correct wrong')
    }

    
    if(Msg5.className != "correct"){
        checkForQues5(ans5);
    }
    else if(ans5 !=1){
        Msg5.classList.remove('correct');
        Msg5.classList.add('wrong');
        Msg5.innerText = "Wrong Answer";
    }else if(ans5 === 0){
        Msg5.classList.remove('correct wrong')
    }
    if(Msg6.className != "correct"){
        checkForQues6(ans6);
    }
    else if(ans6 !=3){
        Msg6.classList.remove('correct');
        Msg6.classList.add('wrong');
        Msg6.innerText = "Wrong Answer";
    }else if(ans6 === 0){
        Msg6.classList.remove('correct wrong')
    }

    scoreEl.innerText = `Score ${score}/6`;
    console.log("score" + score);

    if(score == 6){
         scoreBg.classList.add("buttonChangeEl") ;
        
    }else{
        scoreBg.classList.remove("buttonChangeEl");
    }

});

function checkForQues1(answer1){
    if(answer1 === 0){
        
        Msg1.classList.add('selectAnswer');
        Msg1.innerText = "Select Atleast One Answer";
    }else if (answer1 != 3){
        Msg1.classList.remove('correct');
        Msg1.classList.add('wrong');
        Msg1.innerText = "Wrong Answer";
    }else{
        Msg1.classList.add('correct');
        Msg1.innerText = "Correct Answer";
        score++;
    }
}

function checkForQues2(answer2){
    
    if(answer2 === 0){
        Msg2.className = "selectAnswer";
        Msg2.innerText = "Select Atleast One Answer";
    }else if (answer2 != 1){
        Msg2.className = "wrong";
        Msg2.innerText = "Wrong Answer";
    }else{
        Msg2.className = "correct";
        Msg2.innerText = "Correct Answer";
        score++;
    }
}

function checkForQues3(answer3){
    
    if(answer3 === 0){
        Msg3.className = "selectAnswer";
        Msg3.innerText = "Select Atleast One Answer";
    }else if (answer3 != 2){
        Msg3.className = "wrong";
        Msg3.innerText = "Wrong Answer";
    }else{
        Msg3.className = "correct";
        Msg3.innerText = "Correct Answer";
        score++;
    }
}

function checkForQues4(answer4){
    if(answer4 === 0){
        
        Msg4.classList.add('selectAnswer');
        Msg4.innerText = "Select Atleast One Answer";
    }else if (answer4 != 2){
        Msg4.classList.remove('correct');
        Msg4.classList.add('wrong');
        Msg4.innerText = "Wrong Answer";
    }else{
        Msg4.classList.add('correct');
        Msg4.innerText = "Correct Answer";
        score++;
    }
}

function checkForQues5(answer5){
    if(answer5 === 0){
        
        Msg5.classList.add('selectAnswer');
        Msg5.innerText = "Select Atleast One Answer";
    }else if (answer5 != 1){
        Msg5.classList.remove('correct');
        Msg5.classList.add('wrong');
        Msg5.innerText = "Wrong Answer";
    }else{
        Msg5.classList.add('correct');
        Msg5.innerText = "Correct Answer";
        score++;
    }
}

function checkForQues6(answer6){
    if(answer6 === 0){
        
        Msg6.classList.add('selectAnswer');
        Msg6.innerText = "Select Atleast One Answer";
    }else if (answer6 != 3){
        Msg6.classList.remove('correct');
        Msg6.classList.add('wrong');
        Msg6.innerText = "Wrong Answer";
    }else{
        Msg6.classList.add('correct');
        Msg6.innerText = "Correct Answer";
        score++;
    }
}