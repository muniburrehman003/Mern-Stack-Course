function calculate(){
    let price = Number(document.getElementById("cart").value);
    let tax =price * 0.10;
    let totalwithtax = price  + tax;

    let delivery = 0;
    let deliveryText = "";
if(price){
    alert("enter price first");
    return;
}
    if(totalwithtax >= 50){
        deliveryText ="delivery is free";
    }
    else{
        delivery = 5;
        deliveryText = "delivery fees : $5"

    }

    let finalAmount = totalwithtax + delivery;
    document.getElementById("display").innerHTML= `Tax (10%): $${tax.toFixed(2)} <br>
    status : ${deliveryText} <br>
    Grand total : $${finalAmount.toFixed(2)}`;
}