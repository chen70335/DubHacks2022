var ACTION;
var LOCATION;
var DROPOFF;
var NAME;
var PHONE_NUMBER;
var DESC;

(function() {
  window.addEventListener("load", init);

  function init() {
  }



  function id(ID) {
    return document.getElementById(ID);
  }

  function qs(Element) {
    return document.querySelector(Element);
  }


})()

function submit() {
  console.log("hi");
  var input = document.getElementById("user-input");
  NAME = (input["name"].value);
  PHONE_NUMBER = (input["number"].value);
  DESC = (input["desc"].value);
}

function pickup() {
  ACTION = "pickup";
}
function other() {
  ACTION = null;
}

function getLocation() {
  var input = document.getElementById("currmap");
  LOCATION = input['loc'].value;
  DROPOFF = input['dest'].value;
  console.log(LOCATION);
  console.log(DROPOFF);
}

function getLocationOther() {
  var input = document.getElementById("other");
  LOCATION = input['loc'].value;
  ACTION = input['type'].value;
  DROPOFF = null;
  console.log(LOCATION);
  console.log(ACTION);
}

function printMessage() {
  s = "";
  if (DROPOFF == null) {
    s = "Amay is looking for a pickup at 4001 E Stevens Way NE. Dropoff at 3910 15th Ave NE. Phone number is: 425-773-7451"
  }
  else {
    s = "Amay is looking for a pickup at 4001 E Stevens Way NE. Dropoff at 3910 15th Ave NE. Phone number is: 425-773-7451"
  }
  alert(s);
}