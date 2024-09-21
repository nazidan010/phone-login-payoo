// console.log('login page added');

//HW: google/ChatGPT search form reloading the page
//step 1: set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    //step 2: prevent default behavior (prevent reloading browsers)
    event.preventDefault();
    console.log('login button clicked');
    //step 3: get the phone number and pin number
    const phoneNumber=document.getElementById('phone-number').value
    const pinNumber=document.getElementById('pin').value;
    console.log(phoneNumber,pinNumber);
    //step 4: validate phone and pin
    if(phoneNumber==='5'&& pinNumber==='1234'){
        console.log('you are logged in');
        window.location.href='/home.html';
        alert('Are you sure login')
    }
    else{
        alert('Opps! Wrong your Phone number and Pin number');
    }
});
// document.getElementById('btn-login').addEventListener('click', function(event){
//     event.preventDefault();
// console.log('button clicked');
// });