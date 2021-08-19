let button = document.querySelector("button");
button.addEventListener("click", calculateTotal);

function calculateTotal() {
    // Collect the data from the web page
    let mealCost = Number(document.getElementById("cost").value) || Number(25.99);
    let tip = Number(document.getElementById("tip").value) || Number(0.15);
    let numberOfPeople = Number(document.getElementById("numGroup").value) || Number(1);
    
    // Calculate the total meal cost
    let tipAmount = mealCost * tip;
    let total = mealCost + tipAmount;

    let para = document.querySelector("p");
    para.textContent = `Your meal cost was $${mealCost}, and with a tip of $${tipAmount.toFixed(2)}, 
    comes to $${total.toFixed(2)}. Your share is $${(total/numberOfPeople).toFixed(2)}. Hope it was delicious!`;

}