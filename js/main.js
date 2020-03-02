// Start login button event handler
const logInBtn = document.getElementById("login");
logInBtn.addEventListener("click", function(){
    const logInArea = document.getElementById("log-Area");
    logInArea.style.display="none";
    const accountArea = document.getElementById("Account-Area");
    accountArea.style.display="block";
})
// End login button event handler
// Start deposit button event handler
const addDeposit = document.getElementById("deposit-Btn");
    addDeposit.addEventListener("click",function(){
        const depositAmount = document.getElementById("deposit-amount").value;
        const depositNumber = parseFloat(depositAmount);


        const currentDeposit = document.getElementById("current-deposit").innerText;
        currentDepositNumber = parseFloat(currentDeposit);

        const TotalDeposit = depositNumber + currentDepositNumber;

        document.getElementById("current-deposit").innerText = TotalDeposit;


        const CurrentBalance = document.getElementById("current-balance").innerText;
        const CurrentBalanceNumber = parseFloat(CurrentBalance);

        const TotalBalance = CurrentBalanceNumber + depositNumber;


        document.getElementById("current-balance").innerText = TotalBalance;

        document.getElementById("deposit-amount").value = "";
        


})