
const display = document.querySelector(".display");
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
const buttons = document.querySelectorAll("button");

const corr_1 = document.querySelector("#correct_no1");
const corr_2 = document.querySelector("#correct_no2");
const corr_3 = document.querySelector("#correct_no3");

const pos_1 = document.querySelector("#position_no1");
const pos_2 = document.querySelector("#position_no2");
const pos_3 = document.querySelector("#position_no3");



const history = [];
const arr = [];
const tama = [];

let output = "";
let opr = "";
let i = "";
let x = "";
let y = "";
let num = "";
let corr = "";


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

  console.log(random_number);

const getDataSet = (btnValue) => { 





    if( display.value.length === 4 && btnValue === 'GO') {

        output = output.slice(0,4);

        history.push(output);

        console.log(history)
  
        if (history.length === 1) {

            num = history[0];

            document.getElementById("number-1").innerHTML = num;
            split_number = num.split("");

            const findDuplicates = (arr1) => {
                let sortedArray = arr1.slice().sort();
                let results = [];
            
                for (let i = 0; i < sortedArray.length - 1; i++) {
                    if(sortedArray[i + 1] === sortedArray[i]) {
                        results.push(sortedArray[i]);
                    }
                }
            
                return results;
            };
        
            
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            myCounter = findDuplicates(array).length;

                
            document.getElementById("correct_no1").innerHTML = myCounter;


            const findCorrect = (arr2) => {
                let array5 = arr2;
                let answer = [];
                for (let x = 0; x < array5.length; x++) {
                    if(array1[x] === array2[x]) {
                        answer.push(1);
                    } else {
                        answer.push(0);
                    }
                }      
                return answer;
            }

  
            myCounter1 = findCorrect(array1);

            let target = 1;
            let counter = 0;
            for (myCounter1s of myCounter1) {
            if (myCounter1s == target) {
                    counter++;
                } 
            };
            document.getElementById("position_no1").innerHTML = counter;
   
          
        } else if ( history.length === 2 ) {
            num = history[1];

            document.getElementById("number-2").innerHTML = num;
            split_number = num.split("");

            const findDuplicates = (arr1) => {
                let sortedArray = arr1.slice().sort();
                let results = [];
            
                for (let i = 0; i < sortedArray.length - 1; i++) {
                    if(sortedArray[i + 1] === sortedArray[i]) {
                        results.push(sortedArray[i]);
                    }
                }
            
                return results;
            };
        
            
            let array1 = split_number.map(Number);
            let array2 = random_number;
            let array = [...array1,...array2];
            myCounter = findDuplicates(array).length;
            document.getElementById("correct_no2").innerHTML = myCounter;


            const findCorrect = (arr2) => {
                let array5 = arr2;
                let answer = [];
                for (let x = 0; x < array5.length; x++) {
                    if(array1[x] === array2[x]) {
                        answer.push(1);
                    } else {
                        answer.push(0);
                    }
                }      
                return answer;
            }

  
            myCounter1 = findCorrect(array1);

            let target = 1;
            let counter = 0;
            for (myCounter1s of myCounter1) {
            if (myCounter1s == target) {
                    counter++;
                } 
            };

            document.getElementById("position_no2").innerHTML = counter;
   

           
        } else if ( history.length === 3 ) {
            num = history[2];
            document.getElementById("number-3").innerHTML = num;

            split_number = num.split("");

            const findDuplicates = (arr1) => {
                let sortedArray = arr1.slice().sort();
                let results = [];
            
                for (let i = 0; i < sortedArray.length - 1; i++) {
                    if(sortedArray[i + 1] === sortedArray[i]) {
                        results.push(sortedArray[i]);
                    }
                }
            
                return results;
            };
        
        
            let array1 = split_number.map(Number);
            let array2 = random_number;
    
            let array = [...array1,...array2];

            myCounter = findDuplicates(array).length;

            document.getElementById("correct_no3").innerHTML = myCounter;






        } else if ( history.length === 4 ) {
            num = history[3];
            document.getElementById("number-4").innerHTML = num;
        } else if ( history.length === 5 ) {
            num = history[4];
            document.getElementById("number-5").innerHTML = num;
        } else if ( history.length === 6 ) {
            num = history[5];
            document.getElementById("number-6").innerHTML = num;
        } else if ( history.length === 7 ) {
            num = history[6];
            document.getElementById("number-7").innerHTML = num;
        } else if ( history.length === 8 ) {
            num = history[7];
            document.getElementById("number-8").innerHTML = num;
        } else if ( history.length === 9 ) {
            num = history[8];
            document.getElementById("number-9").innerHTML = num;
        } else if ( history.length === 10 ) {
            num = history[9];
            document.getElementById("number-10").innerHTML = num;
        }
        /*}*/

            
        /*console.log(history);*/
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



