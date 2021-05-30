var affirmations =[
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don\'t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
];

var receiveMsgForm = document.getElementById("receive-message-form");
var receiveMsgBtn = document.getElementById("receive-message-button");
var infoAddMsgBtn = document.getElementById("add-message-button");
var meditateImg = document.getElementById("meditate-img");
var messageTxt = document.getElementById("message-txt");
var newMsgForm = document.getElementById("new-message-form");
var submitBtn = document.getElementById("submit-button");
var errorMsg = document.getElementById("error-message");
var messageFld = document.getElementById("message-field");

receiveMsgForm.addEventListener("submit", preventDflt);
newMsgForm.addEventListener("submit", preventDflt);
receiveMsgBtn.addEventListener("click", showRandomMsg);
infoAddMsgBtn.addEventListener("click", showNewMsgForm);
submitBtn.addEventListener("click", addNewMsg);

function preventDflt(event) {
  event.preventDefault();
};

function getRandomText(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function showErrorMessage(msg) {
  errorMsg.innerHTML = msg;
  errorMsg.classList.remove("hidden");
}

function hideErrorMessage() {
  errorMsg.classList.add("hidden");
}

function showNewMsgForm() {
  newMsgForm.classList.remove("hidden");
  meditateImg.classList.add("hidden");
  messageTxt.classList.add("hidden");
};

function setMessage(text) {
  messageTxt.innerHTML = text;
  newMsgForm.classList.add("hidden");
  meditateImg.classList.add("hidden");
  messageTxt.classList.remove("hidden");
};

function getSelectedType(name){
  var radios = document.querySelectorAll(`input[name='${name}']`);
  var selectedType;
  for(var i = 0; i < radios.length; i++ ) {
    if (radios[i].checked) {
      selectedType = radios[i].value;
      break;
    }
  }
  return selectedType;
};

function clearRadios(name) {
  var radios = document.querySelectorAll(`input[name='${name}']`);
  for(var i = 0; i < radios.length; i++ ) {
    radios[i].checked = false;
  }
};

function showRandomMsg() {
  var selectedType = getSelectedType("type")
  if(!selectedType) {
    return;
  }
  var selectedText;
  if (selectedType === "affirmations") {
    selectedText = getRandomText(affirmations);
  } else {
    selectedText = getRandomText(mantras);
  }
  setMessage(selectedText);
};

function addNewMsg() {
  var selectedType = getSelectedType("new-type");
  if(!selectedType) {
    showErrorMessage("Error: Please select affirmations or mantra!");
    return;
  }
  var newMessage = messageFld.value;
  if (!newMessage) {
    showErrorMessage("Error: Please add message!");
    return;
  }
  hideErrorMessage();
  if(selectedType === "affirmations") {
    affirmations.push(newMessage);
  } else {
    mantras.push(newMessage);
  }
  setMessage(newMessage);
  messageFld.value = "";
  clearRadios("new-type");
};
