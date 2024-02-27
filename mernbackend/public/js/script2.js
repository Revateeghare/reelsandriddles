const Marvel=document.querySelector('.btn1');
const MarvelLevel=document.querySelector('.child_div');
const Cartoon=document.querySelector('.btn2');
const CartoonLevel=document.querySelector('.child_div1');
const Anime=document.querySelector('.btn4');
const AnimeLevel=document.querySelector('.child_div3');
const Kdrama=document.querySelector('.btn3');
const KdramaLevel=document.querySelector('.child_div2'); 
const Mlevel1=document.querySelector('.btnOne');
const quiz_box=document.querySelector('.quiz_box');
const exit1=document.querySelector(".next_btn");
const Mlevel2=document.querySelector('.btnTwo');
const quiz_box1=document.getElementById('mlevl2');
const exit2=document.getElementById("exit2");
const Mlevel3=document.querySelector('.btnThree');
const quiz_box3=document.getElementById('mlevl3');
const exit3=document.getElementById("exit3");
const Mlevel4=document.querySelector('.btnFour');
const quiz_box4=document.getElementById('mlevl4');
const exit4=document.getElementById("exit4");
const Mlevel5=document.querySelector('.btnFive');
const quiz_box5=document.getElementById('mlevl5');
const exit5=document.getElementById("exit5");
const Mlevel6=document.querySelector('.btnSix');
const quiz_box6=document.getElementById('mlevl6');
const exit6=document.getElementById("exit6");
const Clevel1=document.querySelector('.btnOne1');
const quiz_box7=document.getElementById('clevl1');
const exit7=document.getElementById("exit7");
const Clevel2=document.querySelector('.btnTwo1');
const quiz_box8=document.getElementById('clevl2');
const exit8=document.getElementById("exit8");
const Clevel3=document.querySelector('.btnThree1');
const quiz_box9=document.getElementById('clevl3');
const exit9=document.getElementById("exit9");
const Clevel4=document.querySelector('.btnFour1');
const quiz_box10=document.getElementById('clevl4');
const exit10=document.getElementById("exit10");
const Clevel5=document.querySelector('.btnFive1');
const quiz_box11=document.getElementById('clevl5');
const exit11=document.getElementById("exit11");
const Clevel6=document.querySelector('.btnSix1');
const quiz_box12=document.getElementById('clevl6');
const exit12=document.getElementById("exit12");


Marvel.addEventListener("click",(e) => {
    e.preventDefault();
    MarvelLevel.classList.add("active");
    });
    Mlevel1.addEventListener("click",(e4) => {
        e4.preventDefault();
        quiz_box.classList.add("active");
        var duration = 10; // 5 minutes in this example

function updateTimer() {
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;

    // Format minutes and seconds with leading zeros
    var formattedTime = 
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

    // Update the timer element
    document.getElementById("time").textContent = formattedTime;

    // Decrease the duration by one second
    duration--;

    // Check if the time is up
    if (duration < 0) {
        // Perform actions when time is up (e.g., end the game)
        alert("Time's up! Game over.");
        clearInterval(timerInterval);
    }
}

var timerInterval = setInterval(updateTimer, 1000);
       
    });
    const Mans1='Agetha Harkness';
    const options=document.querySelector(".options");
    function checkAnswer(selectedOption){
    const resultElement=document.getElementById('result');
    if(selectedOption === Mans1){
        
        resultElement.textContent='Correct!';
        resultElement.style.color='green';
        options.style.background='green';
        
    }else{
        resultElement.textContent='Incorrect. Try again !';
        resultElement.style.color='red';
        
       
    }
}
    exit1.addEventListener("click",(e4) => {
        e4.preventDefault();
        quiz_box.classList.remove("active");
    });
    Mlevel2.addEventListener("click",(e4) => {
        e4.preventDefault();
        quiz_box1.classList.add("active");
        var duration = 10; // 5 minutes in this example

        function updateTimer() {
            var minutes = Math.floor(duration / 60);
            var seconds = duration % 60;
        
            // Format minutes and seconds with leading zeros
            var formattedTime = 
                (minutes < 10 ? "0" : "") + minutes + ":" +
                (seconds < 10 ? "0" : "") + seconds;
        
            // Update the timer element
            document.getElementById("time2").textContent = formattedTime;
        
            // Decrease the duration by one second
            duration--;
        
            // Check if the time is up
            if (duration < 0) {
                // Perform actions when time is up (e.g., end the game)
                alert("Time's up! Game over.");
                clearInterval(timerInterval);
            }
        }
        
        var timerInterval = setInterval(updateTimer, 1000);
    });
    const Mans2='AntMan and the Wasp Quantamania';
    const option2 = document.querySelector(".options");
    function checkAnswer2(selectedOption){
    const resultElement=document.getElementById('result1');
    if(selectedOption === Mans2){
        resultElement.textContent='Correct!';
        resultElement.style.color='green';
        option2.style.background='green';
        
    }else{
        resultElement.textContent='Incorrect. Try again !';
        resultElement.style.color='red';
        
    }
}
exit2.addEventListener("click",(e4) => {
    e4.preventDefault();
    quiz_box1.classList.remove("active");
    
});
Mlevel3.addEventListener("click",(e4) => {
    e4.preventDefault();
    quiz_box3.classList.add("active");
   
});
const Mans3='Doctor Strange in the Multiverse of Madness';
const option3=document.querySelector(".options");
function checkAnswer3(selectedOption){
const resultElement=document.getElementById('result3');
if(selectedOption === Mans3){
    resultElement.textContent='Correct!';
    resultElement.style.color='green';
    option2.style.background='green';
    
}else{
    resultElement.textContent='Incorrect. Try again !';
    resultElement.style.color='red';
    
}
}

    exit3.addEventListener("click",(e4) => {
        e4.preventDefault();
        quiz_box3.classList.remove("active");
        
    });

    Mlevel4.addEventListener("click",(e4) => {
        e4.preventDefault();
        quiz_box4.classList.add("active");
       
    });
    const Mans4='Thor: Ragnarok';
    const option4=document.querySelector(".options");
    function checkAnswer4(selectedOption){
    const resultElement=document.getElementById('result4');
    if(selectedOption === Mans4){
        resultElement.textContent='Correct!';
        resultElement.style.color='green';
        option4.style.background='green';
        
    }else{
        resultElement.textContent='Incorrect. Try again !';
        resultElement.style.color='red';   
    }
    }
    
        exit4.addEventListener("click",(e4) => {
            e4.preventDefault();
            quiz_box4.classList.remove("active");
            
        });

        Mlevel5.addEventListener("click",(e4) => {
            e4.preventDefault();
            quiz_box5.classList.add("active");
           
        });
        const Mans5='The Marvels';
        const option5=document.querySelector(".options");
        function checkAnswer5(selectedOption){
        const resultElement=document.getElementById('result5');
        if(selectedOption === Mans5){
            resultElement.textContent='Correct!';
            resultElement.style.color='green';
            option4.style.background='green';
            
        }else{
            resultElement.textContent='Incorrect. Try again !';
            resultElement.style.color='red';   
        }
        }
        
            exit5.addEventListener("click",(e4) => {
                e4.preventDefault();
                quiz_box5.classList.remove("active");
                
            });
            Mlevel6.addEventListener("click",(e4) => {
                e4.preventDefault();
                quiz_box6.classList.add("active");
               
            });
            const Mans6='Spider-Man: Far From Home';
            const option6=document.querySelector(".options");
            function checkAnswer6(selectedOption){
            const resultElement=document.getElementById('result6');
            if(selectedOption === Mans6){
                resultElement.textContent='Correct!';
                resultElement.style.color='green';
                option4.style.background='green';
                
            }else{
                resultElement.textContent='Incorrect. Try again !';
                resultElement.style.color='red';   
            }
            }
            
                exit6.addEventListener("click",(e4) => {
                    e4.preventDefault();
                    quiz_box6.classList.remove("active");
                    
                });
    
    
Cartoon.addEventListener("click",(e1) => {
    e1.preventDefault();
    CartoonLevel.classList.add("active");
});

Clevel1.addEventListener("click",(e4) => {
    e4.preventDefault();
    quiz_box7.classList.add("active");
   
});
const Cans1='Beauty and the Beast';
const option7=document.querySelector(".options");
function checkAnswer7(selectedOption){
const resultElement=document.getElementById('result7');
if(selectedOption === Cans1){
    resultElement.textContent='Correct!';
    resultElement.style.color='green';
    option4.style.background='green';
    
}else{
    resultElement.textContent='Incorrect. Try again !';
    resultElement.style.color='red';   
}
}

    exit7.addEventListener("click",(e4) => {
        e4.preventDefault();
        quiz_box7.classList.remove("active");
        
    });

    Clevel2.addEventListener("click",(e4) => {
        e4.preventDefault();
        quiz_box8.classList.add("active");
       
    });
    const Cans2='Upgrade';
    const option8=document.querySelector(".options");
    function checkAnswer8(selectedOption){
    const resultElement=document.getElementById('result8');
    if(selectedOption === Cans2){
        resultElement.textContent='Correct!';
        resultElement.style.color='green';
        option8.style.background='green';
        
    }else{
        resultElement.textContent='Incorrect. Try again !';
        resultElement.style.color='red';   
    }
    }
    
        exit8.addEventListener("click",(e4) => {
            e4.preventDefault();
            quiz_box8.classList.remove("active");
            
        });
        Clevel3.addEventListener("click",(e4) => {
            e4.preventDefault();
            quiz_box9.classList.add("active");
           
        });
        const Cans3=' Doremon House';
        const option9=document.querySelector(".options");
        function checkAnswer9(selectedOption){
        const resultElement=document.getElementById('result9');
        if(selectedOption === Cans3){
            resultElement.textContent='Correct!';
            resultElement.style.color='green';
            option8.style.background='green';
            
        }else{
            resultElement.textContent='Incorrect. Try again !';
            resultElement.style.color='red';   
        }
        }
        
            exit9.addEventListener("click",(e4) => {
                e4.preventDefault();
                quiz_box9.classList.remove("active");
                
            });
            Clevel4.addEventListener("click",(e4) => {
                e4.preventDefault();
                quiz_box10.classList.add("active");
               
            });
            const Cans4='The Jungle Book';
            const option10=document.querySelector(".options");
            function checkAnswer10(selectedOption){
            const resultElement=document.getElementById('result10');
            if(selectedOption === Cans4){
                resultElement.textContent='Correct!';
                resultElement.style.color='green';
                option8.style.background='green';
                
            }else{
                resultElement.textContent='Incorrect. Try again !';
                resultElement.style.color='red';   
            }
            }
            
                exit10.addEventListener("click",(e4) => {
                    e4.preventDefault();
                    quiz_box10.classList.remove("active");
                    
                });
                Clevel5.addEventListener("click",(e4) => {
                    e4.preventDefault();
                    quiz_box11.classList.add("active");
                   
                });
                const Cans5='Mothu & Patlu';
                const option11=document.querySelector(".options");
                function checkAnswer11(selectedOption){
                const resultElement=document.getElementById('result11');
                if(selectedOption === Cans5){
                    resultElement.textContent='Correct!';
                    resultElement.style.color='green';
                    option8.style.background='green';
                    
                }else{
                    resultElement.textContent='Incorrect. Try again !';
                    resultElement.style.color='red';   
                }
                }
                
                    exit11.addEventListener("click",(e4) => {
                        e4.preventDefault();
                        quiz_box11.classList.remove("active");
                        
                    });
                    Clevel6.addEventListener("click",(e4) => {
                        e4.preventDefault();
                        quiz_box12.classList.add("active");
                       
                    });
                    const Cans6='Tom and Jerry';
                    const option12=document.querySelector(".options");
                    function checkAnswer12(selectedOption){
                    const resultElement=document.getElementById('result12');
                    if(selectedOption === Cans6){
                        resultElement.textContent='Correct!';
                        resultElement.style.color='green';
                        option12.style.backgroundColor='green';
                        
                    }else{
                        resultElement.textContent='Incorrect. Try again !';
                        resultElement.style.color='red';   
                    }
                    }
                    
                        exit12.addEventListener("click",(e4) => {
                            e4.preventDefault();
                            quiz_box12.classList.remove("active");
                            
                        });
Kdrama.addEventListener("click",(e2) => {
    e2.preventDefault();
    KdramaLevel.classList.add("active");
});

Anime.addEventListener("click",(e3) => {
    e3.preventDefault();
    AnimeLevel.classList.add("active");
    
});

function toggle(){ 
    var blur= document.querySelector('table');
     blur.classList.toggle('active');
 }

// Set the initial duration in seconds (adjust as needed)
