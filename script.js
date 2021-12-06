//start btn
function startbtn(){    inst_box.classList.add("activeInfo");   }
//Instruction box
const inst_box = document.querySelector(".instructions");
const exit1_btn = inst_box.querySelector(".instbtn .instbtn1");
const continue1_btn = inst_box.querySelector(".instbtn .instbtn2");
//Topics box
const topic_box = document.querySelector(".topiccointaner");
const exit2_btn = topic_box.querySelector(".topicbtn .topicbtn1");
//exit2 btn function
exit2_btn.onclick = ()=>{   topic_box.classList.remove("activeInfo");  }
//Topics
const clang_btn = document.querySelector(".choice .clang");
const py_btn = document.querySelector(".choice .py");
const ds_btn = document.querySelector(".choice .ds");
const dbms_btn = document.querySelector(".choice .dbms");
const html_btn = document.querySelector(".choice .html");
const js_btn = document.querySelector(".choice .js");
const os_btn= document.querySelector(".choice .os");
const daa_btn= document.querySelector(".choice .daa");
const java_btn= document.querySelector(".choice .java");
//Quiz box
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
//Timer Variables Initialization
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
//result box variables
const restart_quiz = result_box.querySelector(".resultbtn .resultrestart");
//topic wise question's generation variables 
const bottom_ques_counter = document.querySelector("footer .total_que");
//different next buttons for different topics
const next_btn1 = document.querySelector("footer .next_btn1");
const next_btn2 = document.querySelector("footer .next_btn2");
const next_btn3 = document.querySelector("footer .next_btn3");
const next_btn4 = document.querySelector("footer .next_btn4");
const next_btn5 = document.querySelector("footer .next_btn5");
const next_btn6 = document.querySelector("footer .next_btn6");
const next_btn7 = document.querySelector("footer .next_btn7");
const next_btn8 = document.querySelector("footer .next_btn8");
const next_btn9 = document.querySelector("footer .next_btn9");
//final result box generation 
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//FUNCTIONS
exit1_btn.onclick = ()=>{    inst_box.classList.remove("activeInfo");    }
continue1_btn.onclick = ()=>{
    topic_box.classList.add("activeInfo");
    inst_box.classList.remove("activeInfo")
}
//C-lang 1*
clang_btn.onclick = ()=>{
    topic_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions1(0);
    queCounter1(1);
    startTimer1(15);
    startTimerLine(0);
}
function showQuetions1(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ c_questions[index].numb + ". " + c_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ c_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ c_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ c_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ c_questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected1(this)");
    }
}
function queCounter1(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ c_questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
function startTimer1(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = c_questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn1.classList.add("show");
        }
    }
}
function optionSelected1(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = c_questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn1.classList.add("show");
}
next_btn1.onclick = ()=>{
    if(que_count < c_questions.length - 1){ 
        que_count++;que_numb++;
        showQuetions1(que_count);
        queCounter1(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer1(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn1.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult1();
    }
}
function showResult1(){
    inst_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ c_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore > 1){
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ c_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ c_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//PYTHON 2*
py_btn.onclick = ()=>{
    topic_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions2(0);
    queCounter2(1);
    startTimer2(15);
    startTimerLine(0);
}
function showQuetions2(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ py_questions[index].numb + ". " + py_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ py_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ py_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ py_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ py_questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected2(this)");
    }
}
function queCounter2(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ py_questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
function startTimer2(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = py_questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn2.classList.add("show");
        }
    }
}
function optionSelected2(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = py_questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn2.classList.add("show");
}
next_btn2.onclick = ()=>{
    if(que_count < py_questions.length - 1){ 
        que_count++;que_numb++;
        showQuetions2(que_count);
        queCounter2(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer2(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn2.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult2();
    }
}
function showResult2(){
    inst_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ py_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore > 1){
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ py_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ py_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//DS 3*
ds_btn.onclick = ()=>{
    topic_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions3(0);
    queCounter3(1);
    startTimer3(15);
    startTimerLine(0);
}
function showQuetions3(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ ds_questions[index].numb + ". " + ds_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ ds_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ ds_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ ds_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ ds_questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected3(this)");
    }
}
function queCounter3(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ ds_questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
function startTimer3(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = ds_questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn3.classList.add("show");
        }

    }
}
function optionSelected3(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = ds_questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn3.classList.add("show");
}
next_btn3.onclick = ()=>{
    if(que_count < ds_questions.length - 1){ 
        que_count++;que_numb++;
        showQuetions3(que_count);
        queCounter3(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer3(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn3.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult3();
    }
}
function showResult3(){
    inst_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ ds_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore > 1){
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ ds_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ ds_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//DBMS 4*
dbms_btn.onclick = ()=>{
    topic_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions4(0);
    queCounter4(1);
    startTimer4(15);
    startTimerLine(0);
}
function showQuetions4(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ dbms_questions[index].numb + ". " + dbms_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ dbms_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ dbms_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ dbms_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ dbms_questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected4(this)");
    }
}
function queCounter4(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ dbms_questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
function startTimer4(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = dbms_questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn4.classList.add("show");
        }
    }
}
function optionSelected4(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = dbms_questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn4.classList.add("show");
}
next_btn4.onclick = ()=>{
    if(que_count < dbms_questions.length - 1){ 
        que_count++;que_numb++;
        showQuetions4(que_count);
        queCounter4(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer4(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn4.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult4();
    }
}
function showResult4(){
    inst_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ dbms_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore > 1){
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ dbms_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ dbms_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//HTML 5*
html_btn.onclick = ()=>{
    topic_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions5(0);
    queCounter5(1);
    startTimer5(15);
    startTimerLine(0);
}
function showQuetions5(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ html_questions[index].numb + ". " + html_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ html_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ html_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ html_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ html_questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected5(this)");
    }
}
function queCounter5(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ html_questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
function startTimer5(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = html_questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn5.classList.add("show");
        }
    }
}
function optionSelected5(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = html_questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn5.classList.add("show");
}
next_btn5.onclick = ()=>{
    if(que_count < html_questions.length - 1){ 
        que_count++;que_numb++;
        showQuetions5(que_count);
        queCounter5(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer5(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn5.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult5();
    }
}
function showResult5(){
    inst_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ html_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore > 1){
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ html_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ html_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//JS 6*
js_btn.onclick = ()=>{
    topic_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions6(0);
    queCounter6(1);
    startTimer6(15);
    startTimerLine(0);
}
function showQuetions6(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ js_questions[index].numb + ". " + js_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ js_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ js_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ js_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ js_questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected6(this)");
    }
}
function queCounter6(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ js_questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
function startTimer6(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = js_questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn6.classList.add("show");
        }
    }
}
function optionSelected6(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = js_questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn6.classList.add("show");
}
next_btn6.onclick = ()=>{
    if(que_count < js_questions.length - 1){ 
        que_count++;que_numb++;
        showQuetions6(que_count);
        queCounter6(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer6(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn6.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult6();
    }
}
function showResult6(){
    inst_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ js_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore > 1){
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ js_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ js_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//OS 7*
os_btn.onclick = ()=>{
    topic_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions7(0);
    queCounter7(1);
    startTimer7(15);
    startTimerLine(0);
}
function showQuetions7(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ os_questions[index].numb + ". " + os_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ os_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ os_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ os_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ os_questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected7(this)");
    }
}
function queCounter7(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ os_questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
function startTimer7(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = os_questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn7.classList.add("show");
        }
    }
}
function optionSelected7(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = os_questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn7.classList.add("show");
}
next_btn7.onclick = ()=>{
    if(que_count < os_questions.length - 1){ 
        que_count++;que_numb++;
        showQuetions7(que_count);
        queCounter7(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer7(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn7.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult7();
    }
}
function showResult7(){
    inst_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ os_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore > 1){
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ os_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ os_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//DAA 8*
daa_btn.onclick = ()=>{
    topic_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions8(0);
    queCounter8(1);
    startTimer8(15);
    startTimerLine(0);
}
function showQuetions8(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ daa_questions[index].numb + ". " + daa_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ daa_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ daa_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ daa_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ daa_questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected8(this)");
    }
}
function queCounter8(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ daa_questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
function startTimer8(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = daa_questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn8.classList.add("show");
        }
    }
}
function optionSelected8(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = daa_questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn8.classList.add("show");
}
next_btn8.onclick = ()=>{
    if(que_count < daa_questions.length - 1){ 
        que_count++;que_numb++;
        showQuetions8(que_count);
        queCounter8(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer8(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn8.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult8();
    }
}
function showResult8(){
    inst_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ daa_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore > 1){
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ daa_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ daa_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//JAVA 9*
java_btn.onclick = ()=>{
    topic_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions9(0);
    queCounter9(1);
    startTimer9(15);
    startTimerLine(0);
}
function showQuetions9(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ java_questions[index].numb + ". " + java_questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ java_questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ java_questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ java_questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ java_questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected9(this)");
    }
}
function queCounter9(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ java_questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
function startTimer9(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = java_questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn9.classList.add("show");
        }

    }
}
function optionSelected9(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = java_questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn9.classList.add("show");
}
next_btn9.onclick = ()=>{
    if(que_count < java_questions.length - 1){ 
        que_count++;que_numb++;
        showQuetions9(que_count);
        queCounter9(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer9(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn9.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult9();
    }
}
function showResult9(){
    inst_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ java_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore > 1){
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ java_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ java_questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//timer line
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        time_line.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}