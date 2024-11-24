let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#resetbuttn")
let msgcont = document.querySelector(".msg")

 let tuenO = true;
  const winptt = [
[0,1,2],
[0,3,6], 
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetgame = () =>{
    tuenO = true;
    enableboxes();
    msgcont.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{

if(tuenO){box.innerText = "0";
    tuenO = false;
}else {
    box.innerText= 'x';
    tuenO =true;
}
box.disabled = true;
check();
});
}
);

const disableboxes = () =>{
    for(let box of  boxes){
        box.disabled=true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner= (winner) =>{
msg.innerText = `congratulations , Winner is ${winner}`;
msgcont.classList.remove("hide");
disableboxes();
}

const check = () =>{
    for(let pattern of winptt){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos2 ===pos3){
            if(pos1 === pos2 && pos2===pos3){
                
                showwinner(pos1);
            }
            
        }
 
    }
}

rest.addEventListener("click",resetgame);