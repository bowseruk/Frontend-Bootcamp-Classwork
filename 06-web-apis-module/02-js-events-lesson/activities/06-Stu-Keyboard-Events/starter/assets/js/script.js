function keydownAction(event) {
  // TODO: Complete keydown function
  document.getElementById("key").textContent = event.key
  document.getElementById("code").textContent = event.code
  document.getElementById("status").textContent =  "KEYDOWN Event"
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction)
