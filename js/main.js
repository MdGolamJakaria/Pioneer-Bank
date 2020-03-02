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

        UpdateSpanText("current-deposit", depositNumber );
        UpdateSpanText("current-balance", depositNumber );
        document.getElementById("deposit-amount").value = "";

        
})

// Start withdraw button event handler
    const withdrawBtn = document.getElementById("withdraw-Btn");
        const withdrawBtn.addEventListener("click",function(){
        const withdrawAmount = document.getElementById("withdraw-amount").value;
        const withrawNumber = parseFloat(withdrawAmount);
        
        const currentWithdraw = document.getElementById("current-withdraw").innerText;


    })
    




function UpdateSpanText(id, depositNumber){
        const Current = document.getElementById(id).innerText;
        const CurrentNumber = parseFloat(Current);
        const TotalAmount = CurrentNumber + depositNumber;
        document.getElementById(id).innerText = TotalAmount;
}

