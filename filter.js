



const number_1 = document.querySelector("#number-1");
const number_2 = document.querySelector("#number-2");
const number_3 = document.querySelector("#number-3");
const number_4 = document.querySelector("#number-4");
const number_5 = document.querySelector("#number-5");
const number_6 = document.querySelector("#number-6");
const number_7 = document.querySelector("#number-7");
const number_8 = document.querySelector("#number-8");
const number_9 = document.querySelector("#number-9");
const number_10 = document.querySelector("#number-10");

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");


// FUNTION TO RANDOM NUMBER
function getRanArr(lngth) {
    let arr = [];
    do {
        let ran = Math.floor(Math.random() * lngth); 
        arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
     } while (arr.length < lngth)
     
     return arr;
}
  
const res = getRanArr(10);
const random_number = res.splice(0,4);



// FUNCTION GET THE VALUE
const guess_number = [];
let guess_num = "";
let output = "";

const getDataSet = (btnValue) => { 

    if ( display.value.length === 4 && btnValue === 'GO') {

        output = output.slice(0,4);

        guess_number.push(output);

        if (guess_number.length === 1) {

            guess_num = guess_number[0];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;


            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-1").innerHTML = guess_num;
            document.getElementById("correct_no1").innerHTML = count_duplicates;
            document.getElementById("position_no1").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                setTimeout(function(){
                    window.location.reload();
                 }, 1000);
            }

            
        } else if (guess_number.length === 2) {
            guess_num = guess_number[1];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;


            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-2").innerHTML = guess_num;
            document.getElementById("correct_no2").innerHTML = count_duplicates;
            document.getElementById("position_no2").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                location.reload();
            }

        } else if (guess_number.length === 3) {
            guess_num = guess_number[2];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;


            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-3").innerHTML = guess_num;
            document.getElementById("correct_no3").innerHTML = count_duplicates;
            document.getElementById("position_no3").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                location.reload();
            }

        } else if (guess_number.length === 4) {
            guess_num = guess_number[3];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;

            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-4").innerHTML = guess_num;
            document.getElementById("correct_no4").innerHTML = count_duplicates;
            document.getElementById("position_no4").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                location.reload();
            }

        } else if (guess_number.length === 5) {
            guess_num = guess_number[4];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;


            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-5").innerHTML = guess_num;
            document.getElementById("correct_no5").innerHTML = count_duplicates;
            document.getElementById("position_no5").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                location.reload();
            }
           

        } else if (guess_number.length === 6) {
            guess_num = guess_number[5];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;


            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-6").innerHTML = guess_num;
            document.getElementById("correct_no6").innerHTML = count_duplicates;
            document.getElementById("position_no6").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                location.reload();
            }

        } else if (guess_number.length === 7) {
            guess_num = guess_number[6];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;


            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-7").innerHTML = guess_num;
            document.getElementById("correct_no7").innerHTML = count_duplicates;
            document.getElementById("position_no7").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                location.reload();
            }


        } else if (guess_number.length === 8) {
            guess_num = guess_number[7];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;


            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-8").innerHTML = guess_num;
            document.getElementById("correct_no8").innerHTML = count_duplicates;
            document.getElementById("position_no8").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                location.reload();
            }

        } else if (guess_number.length === 9) {
            guess_num = guess_number[8];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;


            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-9").innerHTML = guess_num;
            document.getElementById("correct_no9").innerHTML = count_duplicates;
            document.getElementById("position_no9").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                location.reload();
            }

        } else if (guess_number.length === 10) {
            guess_num = guess_number[9];
            
            split_number = guess_num.split("");
            
            // FUNCTION TO COUNT CORRECT GUESS NUMBER
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            count_duplicates = countGuess(array).length;


            // FUNCTION TO COUNT CORRECT POSITION
            count_correct = countPosition(array1);

            let target = 1;
            let counter = 0;

            for (count_corrects of count_correct) {
            if (count_corrects == target) {
                    counter++;
                } 
            };

            document.getElementById("number-10").innerHTML = guess_num;
            document.getElementById("correct_no10").innerHTML = count_duplicates;
            document.getElementById("position_no10").innerHTML = counter;

            if(count_duplicates === 4 && counter === 4) {
                alert("Congratulations!\nYou guess the number "+ random_number);
                location.reload();
            } else {
                alert("Game Over\nThe guess number is "+ random_number);
                setTimeout(function(){
                    window.location.reload();
                 }, 1000);
            }

        } 


        output = "";
        
    } else if ( display.value.length <= 3 && btnValue === 'GO' ) {
    
        output = output.slice(0,3);
    
    } else if (btnValue === 'X') {
    
        output = output.toString().slice(0,-1);
    
    } else {
    
        if (output === "" && output.includes(btnValue)) return;
    
        output += btnValue;
    
    }
    
    if( output.length <= 4 ) {
        output = output.slice(0,4);
        display.value = output;
    }

}




buttons.forEach((button) => {
    button.addEventListener("click", (e) => getDataSet(e.target.dataset.value));
});


const countGuess = (arr1) => {
    let sortedArray = arr1.slice().sort();
    let results = [];

    for (let i = 0; i < sortedArray.length - 1; i++) {
        if(sortedArray[i + 1] === sortedArray[i]) {
            results.push(sortedArray[i]);
        }
    }

    return results;
};

const countPosition = (arr2) => {
    let array3 = arr2;
    let array4 = random_number;
    let answer = [];
    for (let x = 0; x < array3.length; x++) {
        if(array3[x] === array4[x]) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    }      
    return answer;
}


// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


