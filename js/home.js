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
});