//Add money to the account
//add and even handler to the add money

//step 1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    //prevent page reload after form submit
    event.preventDefault(); ///this event use page not reload
    //step 2: get money to be added to te account
    const addMoney=document.getElementById('input-add-money').value;
    console.log(addMoney);
    // Check the confirm pin>>>>>>>
    const surePin=document.getElementById('input-pin').value;
    console.log(surePin);
    //step 3: Verify pin number
    //wrong way to pin number
    if(surePin==='1234'){
        console.log('add money to your account');
        //step 4: get the current balance
        const balance=document.getElementById('current-balance').innerText;
        // console.log(balance);
        //step 5: add and add money Input with balance
        const addMoneyNumber=parseFloat(addMoney);
        const addBalance=parseFloat(balance);
        const currentBalance=addMoneyNumber+addBalance;
        console.log(currentBalance);
        //step 6: Update the balance in the UI/DOM
        const addMoneyDisplay=document.getElementById('current-balance').innerText=currentBalance;
    }
    else{
        alert('Failed to add money! Please try again')
    }
   
});