// from trackers page

//add expence 
document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName && !isNaN(expenseAmount)) {
        addExpense(expenseName, expenseAmount);
        updateTotalAmount();
        clearForm();
    }
});

function addExpense(name, amount) {
    const expenseList = document.getElementById('expense-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>₹${amount.toFixed(2)}</td>
        <td><button onclick="removeExpense(this, ${amount})">Remove</button></td>
    `;

    expenseList.appendChild(row);
}

function removeExpense(button, amount) {
    const row = button.parentElement.parentElement;
    row.remove();
    updateTotalAmount(-amount);
}

function updateTotalAmount(amountToAdd = 0) {
    const totalAmountElement = document.getElementById('total-amount');
    const currentTotal = parseFloat(totalAmountElement.textContent) || 0;
    const newTotal = currentTotal + amountToAdd;

    totalAmountElement.textContent = newTotal.toFixed(2);
}

function clearForm() {
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
}
``
//profit loss calculator
function Calculate() {
    const CP = parseFloat(document.querySelector(".cost__price").value);
    const SP = parseFloat(document.querySelector(".selling__price").value);
    const profit__loss = document.querySelector(".profit__loss");
    const percentage = document.querySelector(".profit__loss__percentage");
    const nothing = document.querySelector(".nothing");

    profit__loss.innerHTML = "";
    percentage.innerHTML = "";
    nothing.innerHTML = "";

    if (SP > CP) {
        const profit = SP - CP;
        const profit_percent = ((profit / CP) * 100).toFixed(2);
        profit__loss.innerHTML = `Profit: ${profit}`;
        percentage.innerHTML = `Profit Percentage: ${profit_percent}%`;
    } else if (SP < CP) {
        const loss = CP - SP;
        const loss_percent = ((loss / CP) * 100).toFixed(2);
        profit__loss.innerHTML = `Loss: ${loss}`;
        percentage.innerHTML = `Loss Percentage: ${loss_percent}%`;
    } else {
        nothing.innerHTML = "No Profit No Loss";
    }
}
