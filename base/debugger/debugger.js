const inputs = document.querySelectorAll("input");

const btnCal = document.querySelector("#cal-btn");
btnCal.addEventListener("click", ()=>{
    console.log(inputs[0].value);
    const val1 = inputs[0].value;
    const val2 = inputs[1].value;
    if (!val1 || !val2) {
        conosole.error("please input number");
    }
    
    const resEle = document.querySelector("#resut-display");
    resEle.innerHTML = Number(val1) + Number(val2);
});