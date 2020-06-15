let allButtonArray = document.querySelectorAll(".buttons")
let screen = document.querySelector(".row0")
let currentText = '';


function addAllListeners(param){
    for(let i =0; i < param.length; i++){
        if(param[i].innerHTML === '='){
            param[i].addEventListener('click',equalclick)
        } else{
            param[i].addEventListener('click',change)
        
        } 
            
    }
}

addAllListeners(allButtonArray)


function change(param){
    if(param === undefined){
        screen.innerHTML = 'Do Math';
    } else {
        currentText = currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }   
   
}
 

// let sum = 0;
//     for(i = 0; i < nums.length ; i++){
//         sum = sum + parseInt(nums[i]); 
//     }
//     screen.innerHTML= sum;


function add(strParam){
    let nums = strParam.split('+');
    
    let add = parseInt(nums[0]) + parseInt(nums[1]);
    screen.innerHTML = add;
}


function subtract(strParam){
    let nums = strParam.split('-')
   
    let sub = parseInt(nums[0]) - parseInt(nums[1]);
    screen.innerHTML = sub;

}



function multiply(strParam){
    let nums = strParam.split('*')

    let answer = parseInt(nums[0]) * parseInt(nums[1]);
    screen.innerHTML = answer;
    
}


function divide(strParam){
    let nums = strParam.split('/')
    
    let quo = parseInt(nums[0]) / parseInt(nums[1]);
    screen.innerHTML = quo;

}





function equalclick(){
 console.log(currentText)
    
    if(currentText.indexOf("*") > -1){
        multiply(currentText)
        
    }  else if(currentText.indexOf("/")> -1){
        divide(currentText)

    } else if(currentText.indexOf("+")> -1){
        add(currentText)

    }  else if(currentText.indexOf("-")> -1){
        subtract(currentText)

    } else if(currentText.indexOf("=")> -1){
        equals(currentText)
    }

}
