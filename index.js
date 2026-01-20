function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "3c4ba37b00dacafa6bo5t89fa3684eff";
  let prompt = `User instruction: Generate a kid friendly poem in English about ${instructionInput.value}`;
  let context =
    "You are a poet and love to write funny kid friendly short poems. Your mission is to generate a six lines poem without a title in basic HTML and seperate each line with a <br/> and do not mention html on the page. Make sure to follow user instructions. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
