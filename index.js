// Login button event handler
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function (){
  const loginArea = document.getElementById('login');
  loginArea.style.display = 'none';
  const transactionArea = document.getElementById('transaction');
  transactionArea.style.display = 'block';
})

// Deposit button event handler
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
  const depositNumber = getInputNumber('deposit-amount');
  updateAmount('deposit-balance', depositNumber);
  updateAmount('current-balance', depositNumber);
  document.getElementById('deposit-amount').value = "";
})

// Withdraw button event handler
const withdrawBtn = document.getElementById('withdraw-btn');
  withdrawBtn.addEventListener('click', function(){
  const withdrawNumber = getInputNumber('withdraw-amount');
  updateAmount('withdraw-balance', withdrawNumber);
  updateAmount('current-balance', -1 * withdrawNumber);
  document.getElementById('withdraw-amount').value = "";
})

// Get input function
function getInputNumber (id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  console.log(amountNumber);
  return amountNumber;
}

// Update amount function
function updateAmount (id, depositNumber){
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}