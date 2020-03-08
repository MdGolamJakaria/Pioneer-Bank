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
        const depositNumber = getInputNumber("deposit-amount")

        UpdateSpanText("current-deposit", depositNumber );
        UpdateSpanText("current-balance", depositNumber );

        emptyText = emptyInputBox("deposit-amount");
})

// Start withdraw button event handler
    const withdrawBtn = document.getElementById("withdraw-Btn");
        withdrawBtn.addEventListener("click",function(){
        const withdrawNumber = getInputNumber("withdraw-amount");

        UpdateSpanText("current-withdraw", withdrawNumber) 
        UpdateSpanText("current-balance", -1 * withdrawNumber);

        emptyText = emptyInputBox("withdraw-amount");
    })


// input box cleaning function
    function emptyInputBox(id){
        document.getElementById(id).value = "";
    }

// get input Number Function
    function getInputNumber(id){
        const amount = document.getElementById(id).value;
        const Number = parseFloat(amount);
        return Number;
    }


// get span number function 

function UpdateSpanText(id, depositNumber){
        const Current = document.getElementById(id).innerText;
        const CurrentNumber = parseFloat(Current);
        const TotalAmount = CurrentNumber + depositNumber;
        document.getElementById(id).innerText = TotalAmount;
}

