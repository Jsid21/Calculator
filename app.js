let input = document.getElementById("dis");
let buttons = document.querySelectorAll("button");
let opsbtn = document.getElementsByClassName("opbtn");
let string = "";
let arr1 = Array.from(buttons);
arr1.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            let disp = eval(string);
            if(disp == string){
                alert("Invalid operation");
            }
            else{
                input.value=disp;
            }
            
            
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }    
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
        

    });
})
