//initial count
var count = 0;

//selecting buttons
var value = document.querySelector("h2");
var buttons = document.querySelectorAll("button.btn");


//for count
buttons.forEach(function (btn) {
    //console.log(btn);
    btn.addEventListener("click", function (event) {
        const classes = event.currentTarget.classList;
        if (classes.contains("inc")) {
            count++;
        } else if (classes.contains("dec")) {
            count--;
        } else {
            count = 0;
        } if (count > 0) {
            value.style.color = "green";
            value.textContent = count;
        } else if (count < 0) {
            value.style.color = "red";
            value.textContent = count;
        } else {
            value.style.color = "black";
            value.textContent = count;
        }
    });
});
