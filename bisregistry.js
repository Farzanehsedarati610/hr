const businessRegistry = await fetch("https://yourcdn.com/businesses.json")
  .then(res => res.json());

const iframe = document.getElementById("msAssistant");
iframe.src = `https://assistant.microsoft.com/hr?business=${locationCode}`;

