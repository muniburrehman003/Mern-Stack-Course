let avaiablecity = ["karachi", "lahore", "islamabad", "kashmir", "Quette"];

function checkcity() {
    let input = document.getElementById("city").value;
    let display = document.getElementById("display");

    if (!input) {
        alert("City is required!");
        return;
    }
    if (avaiablecity.includes(input)) {
        display.innerText = input + " is available !";
    }
    else {
        display.innerHTML = input + " is not avaiable "
    }
}