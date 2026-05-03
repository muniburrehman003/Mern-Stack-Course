let products = ["Laptop","Mobile","Airpods","Charger","Laptop"];

function searchbtn(){
    let items = document.getElementById("product").value
    let display = document.getElementById("display");

 if (products.includes(items)) {
                display.innerText = "First found at : " + products.indexOf(items) + "<br>" +"Last found at  : " + products.lastIndexOf(items);
            } else {
                display.innerText = "Not in stock";
            }
}