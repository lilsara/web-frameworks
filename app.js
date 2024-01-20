function problemOne(event) {
  const target = event.target;
  target.remove();
}

let elementOne = document.querySelector('#remove-me');
elementOne.addEventListener('click', problemOne);


function problemTwo(event) {
  const target = event.target;

  if (target.classList.contains('child')) {
    target.remove();
  }
}

let removeMyChildrenContainer = document.querySelector('#remove-my-children');
removeMyChildrenContainer.addEventListener('click', problemTwo);

function problemThree(event) {
  const target = event.target;

  
  if (target.classList.contains('child')) {
    target.remove();

    
    if (document.querySelectorAll('#remove-my-children-then-me .child').length === 0) {
      document.querySelector('#remove-my-children-then-me').remove();
    }
  }
}

let removeMyChildrenThenMeContainer = document.querySelector('#remove-my-children-then-me');
removeMyChildrenThenMeContainer.addEventListener('click', problemThree);


function problemFour() {
 
  const newChild = document.createElement('div');

 
  newChild.textContent = 'New Child';
  newChild.classList.add('child');

  document.querySelector('#add-children').appendChild(newChild);
}

let addChildrenContainer = document.querySelector('#add-children');
addChildrenContainer.addEventListener('click', problemFour);

function problemFive(event) {
  const target = event.target;
  const parent = target.parentNode;

  parent.appendChild(target);
}

let toTheBackContainer = document.querySelector('#to-the-back');
toTheBackContainer.addEventListener('click', problemFive);




function problemSix(event) {
  const target = event.target;

  let currentValue = parseInt(target.textContent);
  target.textContent = currentValue + 1;
}

let incrementChildContainer = document.querySelector('#increment-child');
incrementChildContainer.addEventListener('click', problemSix);


function problemSeven(event) {
  const target = event.target;

  if (event.shiftKey) {
    target.textContent = parseInt(target.textContent) - 1;
  } else {
   
    target.textContent = parseInt(target.textContent) + 1;
  }
}

let incrementDecrementContainer = document.querySelector('#increment-decrement');
incrementDecrementContainer.addEventListener('click', problemSeven);


function problemEight(event) {
  const inputElement = event.target;
  const userInputCopy = document.querySelector('.user-input-copy');

  userInputCopy.textContent = inputElement.value;
}

let echoUserInputContainer = document.querySelector('#echo-user-input input');
echoUserInputContainer.addEventListener('keyup', problemEight);


function problemNine(event) {
  event.preventDefault();
  const inputElement = event.target;

  const reversedText = inputElement.value.split('').reverse().join('');

  inputElement.value = reversedText;
}

let pasteInReverseContainer = document.querySelector('#paste-in-reverse input');
pasteInReverseContainer.addEventListener('paste', problemNine);


function problemTen(event) {
  const checkboxElement = event.target;
  const targetElement = document.querySelector('.target-element');

  targetElement.classList.toggle('hidden', !checkboxElement.checked);
}

let toggleCheckboxContainer = document.querySelector('#toggle-checkbox input');
toggleCheckboxContainer.addEventListener('change', problemTen);


function problemEleven(event) {
  event.preventDefault();

  const formElement = document.querySelector('#signin-form');
  const emailInput = formElement.querySelector('input[name="user[email]"]');
  const passwordInput = formElement.querySelector('input[name="user[password]"]');
  const userEmailSpan = document.querySelector('.user-email');
  const userPasswordSpan = document.querySelector('.user-password');

  userEmailSpan.textContent = 'Email: ' + emailInput.value;
  userPasswordSpan.textContent = 'Password: ' + passwordInput.value;
}

let preventSubmitContainer = document.querySelector('#prevent-submit form');
preventSubmitContainer.addEventListener('submit', problemEleven);

function problemTwelve() {
  
  const formElement = document.createElement('form');

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Name';
  formElement.appendChild(nameInput);

  const addressInput = document.createElement('input');
  addressInput.type = 'text';
  addressInput.placeholder = 'Address';
  formElement.appendChild(addressInput);

  const phoneInput = document.createElement('input');
  phoneInput.type = 'text';
  phoneInput.placeholder = 'Phone Number';
  formElement.appendChild(phoneInput);


  const submitButton = document.createElement('button');
  submitButton.type = 'button'; 
  submitButton.textContent = 'Submit';


  submitButton.addEventListener('click', function() {

    alert(
      'Name: ' + nameInput.value + '\n' +
      'Address: ' + addressInput.value + '\n' +
      'Phone Number: ' + phoneInput.value
    );

   
    nameInput.value = '';
    addressInput.value = '';
    phoneInput.value = '';
  });

  formElement.appendChild(submitButton);
  document.querySelector('#target-for-form-template').appendChild(formElement);
}

problemTwelve();
