function commitChanges() {
  const newCode = document.getElementById("liveEditArea").value;
  localStorage.setItem("customLogic", newCode);
  eval(newCode); // Safely execute new transfer or routing code

  document.getElementById("statusLog").innerText =
    "✅ Logic committed. Applied globally.";
}

// Apply committed logic on load
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("customLogic");
  if (saved) eval(saved);
});

