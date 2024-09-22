document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut=document.getElementById('input-cash-out').value;
    const pinSet=document.getElementById('input-cash-out-pin').value;
    //wrong to verify to pin number
    if(pinSet==='1234'){
       const balance=document.getElementById('current-balance').innerText;
       //converted string to float number
       const cashOutNumber=parseFloat(cashOut);
       const balanceNumber=parseFloat(balance);
       //Cash Out Balance >>>>>>
       const cashOutBalance=balanceNumber-cashOutNumber;
       console.log(cashOutBalance);
       //Update the display with Balance Board
       const displayBalance=document.getElementById('current-balance').innerText=cashOutBalance;
       
    }
    else{
        alert('Trans section Failed! try again later')
    } 
})