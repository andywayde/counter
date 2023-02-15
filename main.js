const counter = document.querySelector('#counter');

let value = 0

function setCounterColor() {
    if(value < 0) {
        counter.style.color = "red";
    } else if(value > 0) {
        counter.style.color = "green";
    } else {
        counter.style.color = "black";
    }
}

const btns = document.querySelectorAll("button");
console.log(btns);

btns.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id == "decrease") {
            value--;            
        } else if (button.id == "increase") {
            value++;
        } else {
            value = 0;
        }
        counter.textContent = value;
        setCounterColor();
    })    
})