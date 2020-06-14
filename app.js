//Listen to submit
document.getElementById('loan-form').addEventListener('submit',function(e){
    //hide result
    document.getElementById('results').style.display='none';
    //show loader
    document.getElementById('loading').style.display='block';
    //loader timeout
    setTimeout(calculate,2000);
    e.preventDefault();
});
//calculate function
function calculate(){
   let principle=document.getElementById('amount').value;
   let rate=document.getElementById('interest').value/100;
   let time=document.getElementById('years').value;
   const monthly=document.getElementById('monthly-payment');
   const total=document.getElementById('total-payment');
   const totalInterest=document.getElementById('total-interest');
   const emiint=document.getElementById('emi-interest');
   const emiprin=document.getElementById('emi-principle');
   //computing payments
   if(principle=='' || rate=='' || time==''){
       errorhandlings('Please check your values');
   }else{
   
   principle=parseFloat(principle);
   rate=parseFloat(rate);
   time=parseFloat(time);
   const x=parseFloat(principle*rate*time);
   totalInterest.value=x.toFixed(2);
   emiint.value=(x/(12*time)).toFixed(2);
   emiprin.value=(principle/(12*time)).toFixed(2);
   monthly.value=((x/(12*time))+(principle/(12*time))).toFixed(2);
   total.value=(x+parseFloat(principle)).toFixed(2);
   //show result
   document.getElementById('results').style.display='block';
   //hide loader
   document.getElementById('loading').style.display='none';
   }
}
//defining error function
function errorhandlings(error){
     //hide result
   document.getElementById('results').style.display='none';
   //hide loader
   document.getElementById('loading').style.display='none';
    //create div
   const errDiv=document.createElement('div');
   //getting elements
   const card=document.querySelector('.card');
   const heading=document.querySelector('.heading');
   //add class
   errDiv.className='alert alert-danger';
   //apent text node to div
   errDiv.appendChild(document.createTextNode(error));
   //addind to DOM
   card.insertBefore(errDiv,heading);
   //clear error after 3 sec
   setTimeout(clearerror,3000);
}
//clear error
function clearerror(){
    document.querySelector('.alert').remove();
}
//clear all button
const clrbtn=document.getElementById('clear-button');
clrbtn.addEventListener('click',function(){
    //hide result
   document.getElementById('results').style.display='none';
   document.getElementById('amount').value='';
   document.getElementById('interest').value='';
   document.getElementById('years').value='';
})