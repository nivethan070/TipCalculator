const billInput = document.querySelector('#bill-value'); //get input bill value
const peopleInput = document.querySelector('#sharing'); //get input value for numbers of share
const percentageInput = document.querySelector('#dropdown'); //get input service value

document.querySelector('#calculate').addEventListener('click', function () {
  const billValue = Number(billInput.value);
  const peopleShare = Number(peopleInput.value);
  const percentage = Number(percentageInput.value);
//use nested methods here
  if (billValue == '' || peopleShare == '' || percentage == '') {
    if (billValue == '') { // if bill value is null show red here
      billInput.style.background = 'red'; 
    } else if (peopleShare == '') {
      peopleInput.style.background = 'red';
    } else if (percentage == '') {
      percentageInput.style.background = 'red';
    }
  } else {
    billInput.style.background = '#fff';
    peopleInput.style.background = '#fff';
    percentageInput.style.background = '#fff';
    const tipValue = billValue * (percentage / 100); //calculate tip
    const totalAmt = tipValue + billValue; //calculate total
    const shareValue = totalAmt / peopleShare; // calculte share amount
//Print Calculations
    document.querySelector('.result').classList.remove('hidden');
    document.querySelector('#tip').textContent = tipValue; // print tip billValue*(percentage/100)
    document.querySelector('#total').textContent = totalAmt; // print total tip+billValue
    document.querySelector('#shares').textContent = shareValue; //print share total/people
  }
});
//New Button
document.querySelector('#btn-new').addEventListener('click', function () { //after hit the new button all values are cleared
  document.querySelector('.result').classList.add('hidden');
  billInput.value = '';
  peopleInput.value = '';
  percentageInput.value = '';
});