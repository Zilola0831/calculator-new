let sum=""
let clr=document.getElementById("clr");
let del=document.getElementById("del");
let input1=document.getElementById("input1")
let seven=document.getElementById("seven");
let eight=document.getElementById("eight")
let nine=document.getElementById("nine");
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six")
let zero=document.getElementById("zero");
let add=document.getElementById("add");
let act=document.getElementById("act");
let multiply=document.getElementById("multiply")
let subtraction=document.getElementById("subtraction")
let equality=document.getElementById("equality");


function calculator(){
    del.addEventListener("click", function(){
        sum=sum.slice(0, sum.length-1);
        input1.value=sum;
    })
    clr.addEventListener("click", function(){
        sum=sum.slice(0, sum.length-1);
        sum="";
        input1.value="";
    })
    seven.addEventListener("click", function(){
        input1.value=sum+"7";
        sum=input1.value;
        console.log(sum);
    })
    eight.addEventListener("click", function(){
        input1.value=sum+"8";
        sum=input1.value;
        console.log(sum);
    })
    nine.addEventListener("click", function(){
        input1.value=sum+"9";
        sum=input1.value;
        console.log(sum);
    })
    one.addEventListener("click", function(){
        input1.value=sum+"1";
        sum=input1.value;
        console.log(sum);
    })
    two.addEventListener("click", function(){
        input1.value=sum+"2";
        sum=input1.value;
        console.log(sum);
    })
    three.addEventListener("click", function(){
        input1.value=sum+"3";
        sum=input1.value;
        console.log(sum);
    })
    four.addEventListener("click", function(){
        input1.value=sum+"4";
        sum=input1.value;
        console.log(sum);
    })
    five.addEventListener("click", function(){
        input1.value=sum+"5";
        sum=input1.value;
        console.log(sum);
    })
    six.addEventListener("click", function(){
        input1.value=sum+"6";
        sum=input1.value;
        console.log(sum);
    })
    zero.addEventListener("click", function(){
        input1.value=sum+"0";
        sum=input1.value;
        console.log(sum);
    })
    add.addEventListener("click", function(){
        if(sum.length>0){
           input1.value=sum+"+";
           sum=input1.value;
        }
    })
    subtraction.addEventListener("click", function(){
        if(sum.length>0){
           input1.value=sum+"-";
           sum=input1.value;
        }
    })
    multiply.addEventListener("click", function(){
        if(sum.length>0){
           input1.value=sum+"x";
           sum=input1.value;
        }
    })
    equality.addEventListener("click", function(){
        input1.value=sum+"=";
        sum=input1.value;
    })

    
}
calculator()

