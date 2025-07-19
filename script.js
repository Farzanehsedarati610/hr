function processChat() {
  const input = document.getElementById("chatInput").value;
  const response = interpretChat(input);
  document.getElementById("statusLog").innerText = response;
}

function interpretChat(msg) {
  if (msg.includes("Terre Haute")) {
    return "Connected to First Financial Bank backend 🏦";
  } else if (msg.includes("Detroit")) {
    return "Crane Credit Union activated with SWIFT routing 🔁";
  }
  return "Location or system not mapped.";
}

