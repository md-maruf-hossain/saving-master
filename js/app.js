document.getElementById("btn-calculate").addEventListener("click", function () {
  // input area
  const incomeField = document.getElementById("income-field");
  const incomeFieldStirng = incomeField.value;
  const income = parseFloat(incomeFieldStirng);

  // food area
  const foodField = document.getElementById("food-field");
  const foodFieldStirng = foodField.value;
  const food = parseFloat(foodFieldStirng);

  // rent-field
  const rentField = document.getElementById("rent-field");
  const rentFieldStirng = rentField.value;
  const rent = parseFloat(rentFieldStirng);

  // clothes field
  const clothField = document.getElementById("clothes-field");
  const clothFieldStirng = clothField.value;
  const cloth = parseFloat(rentFieldStirng);

  // total expense
  const totalExpenseField = document.getElementById("total-expense");
  const totalExpenseFieldString = totalExpenseField.innerText;
  const totalExpense = parseFloat(totalExpenseFieldString);

  // calculation of total eexpense
  const sumOfExpense = food + rent + cloth;
  totalExpenseField.innerText = sumOfExpense;

  // total balance
  const totalBalanceField = document.getElementById("total-balance");
  const totalBalanceFieldString = totalBalanceField.innerText;
  const totalBalance = parseFloat(totalBalanceFieldString);

  // calculation of balance
  const calculationOfBalance = income - sumOfExpense;
  totalBalanceField.innerText = calculationOfBalance;

  if (isNaN(calculationOfBalance)) {
    alert("Please enter a valid number");
    incomeField.value = "";
    foodField.value = "";
    rentField.value = "";
    clothField.value = "";
    totalExpenseField.innerText = 0;
    totalBalanceField.innerText = 0;
    return;
  }
});

document.getElementById("btn-saving").addEventListener("click", function () {
  // saving input field area
  const savingElement = document.getElementById("saving-input-field");
  const savingElementString = savingElement.value;
  const savingElementValue = parseFloat(savingElementString);

  // saving amount area
  const savingAmount = document.getElementById("total-saving-amount");
  const savingAmountString = savingAmount.innerText;
  const savingAmountValue = parseFloat(savingAmountString);

  // remaining balance area
  const remainingBalanceAmount = document.getElementById("total-remaining-amount");
  const remainingBalanceAmountString = remainingBalanceAmount.innerText;
  const remainingBalanceAmountValue = parseFloat(remainingBalanceAmountString);

  // input area
  const incomeField = document.getElementById("income-field");
  const incomeFieldStirng = incomeField.value;
  const income = parseFloat(incomeFieldStirng);

  const savingAmountTotal = (income * savingElementValue) / 100;
  savingAmount.innerText = savingAmountTotal;

  // food area
  const foodField = document.getElementById("food-field");
  const foodFieldStirng = foodField.value;
  const food = parseFloat(foodFieldStirng);

  // rent-field
  const rentField = document.getElementById("rent-field");
  const rentFieldStirng = rentField.value;
  const rent = parseFloat(rentFieldStirng);

  // clothes field
  const clothField = document.getElementById("clothes-field");
  const clothFieldStirng = clothField.value;
  const cloth = parseFloat(rentFieldStirng);

  // total expense
  const totalExpenseField = document.getElementById("total-expense");
  const totalExpenseFieldString = totalExpenseField.innerText;
  const totalExpense = parseFloat(totalExpenseFieldString);

  // calculation of total eexpense
  const sumOfExpense = food + rent + cloth;
  totalExpenseField.innerText = sumOfExpense;

  // total balance
  const totalBalanceField = document.getElementById("total-balance");
  const totalBalanceFieldString = totalBalanceField.innerText;
  const totalBalance = parseFloat(totalBalanceFieldString);

  // calculation of balance
  const calculationOfBalance = income - sumOfExpense;
  totalBalanceField.innerText = calculationOfBalance;

  const remainingBalance = calculationOfBalance - savingAmountTotal;
  remainingBalanceAmount.innerText = remainingBalance;

  if (isNaN(calculationOfBalance)) {
    alert("Please enter a valid number");
    incomeField.value = "";
    foodField.value = "";
    rentField.value = "";
    clothField.value = "";
    savingElement.value = "";
    savingAmount.innerText = 0;
    remainingBalanceAmount.innerText = 0;
    totalExpenseField.innerText = 0;
    totalBalanceField.innerText = 0;
    return;
  }
});
