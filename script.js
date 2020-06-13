let allButtonArray = document.querySelectorAll(".buttons")
let screen = document.querySelector(".row0")
let currentText = '';


function addAllListeners(param){
    for(let i =0; i < param.length; i++){
        param[i].addEventListener('click',change)
        console.log(param[i]);
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
 

function add(strParam){
    let nums = strParam.split('+');
    let sum = 0;
    for(i = 0; i < nums.length ; i++){
        sum = sum + parseInt(nums[i]); 
    }
    return sum;
}


function subtract(strParam){
    let nums = strParam.split('-')
   
    let sub = parseInt(nums[0]) - parseInt(nums[1]);
    return sub

}



function multiply(strParam){
    let nums = strParam.split('*')

    let answer = parseInt(nums[0]) * parseInt(nums[1]);
    return answer
    
}


function divide(strParam){
    let nums = strParam.split('/')
    
    let quo = parseInt(nums[0]) / parseInt(nums[1]);
    return quo

}

function equal(strParam){
    let num = strParam.split('=')
    
    
}




function whichOpp(screentext){

    
    if(screentext.indexOf("*") > -1){
         return multiply(screentext)
        
    }  else if(screentext.indexOf("/")> -1){
        return divide(screentext)

    } else if(screentext.indexOf("+")> -1){
        return add(screentext)

    }  else if(screentext.indexOf("-")> -1){
        return subtract(screentext)

    } else if(screentext.indexOf("=")> -1){
        return equals(screentext)
    }

}
