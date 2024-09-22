//Show the cash out form>>>>>
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
   
    //show cash out button
    console.log('cash out clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
//Show add Money Button>>>>>
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    console.log('clicked add');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
})