var receiveMsgForm = document.getElementById("receive-message-form");
var receiveMsgBtn = document.getElementById("receive-message-button");
var infoAddMsgBtn = document.getElementById("add-message-button");
var meditateImg = document.getElementById("meditate-img");
var messageTxt = document.getElementById("message-txt");
var newMsgForm = document.getElementById("new-message-form");
var submitBtn = document.getElementById("submit-button");
var errorMsg = document.getElementById("error-message");


receiveMsgForm.addEventListener("submit", function(event) {
  event.preventDefault();
});
receiveMsgBtn.addEventListener("click",function() {
  var radios = document.querySelectorAll("input[name='type']");
  var selectedType;
  for(var i = 0; i < radios.length; i++ ) {
    if (radios[i].checked) {
      selectedType = radios[i].value;
      break;
    }
  }
  if(!selectedType) {
    return;
  }
  var selectedText;
  if (selectedType === "affirmations") {
    selectedText = getRandomText(affirmations);
  } else {
    selectedText = getRandomText(mantras);
  }
  messageTxt.innerHTML = selectedText;
  messageTxt.classList.remove("hidden");
  meditateImg.classList.add("hidden");
  newMsgForm.classList.add("hidden");
});

newMsgForm.addEventListener("submit", function(event) {
  event.preventDefault();
});

infoAddMsgBtn.addEventListener("click", function() {
  newMsgForm.classList.remove("hidden");
  meditateImg.classList.add("hidden");
  messageTxt.classList.add("hidden");

});

submitBtn.addEventListener("click", function() {
  var radios = document.querySelectorAll("input[name='new-type']");
  var selectedType;
  for(var i = 0; i < radios.length; i++ ) {
    if (radios[i].checked) {
      selectedType = radios[i].value;
      break;
    }
  }
  if(!selectedType) {
    errorMsg.classList.remove("hidden");
    return;
  }
  errorMsg.classList.add("hidden");

})


function getRandomText(array) {
  return array[Math.floor(Math.random() * array.length)];
};



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
  'Don’t let yesterday take up too much of today.',
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
