function displayQuote(response) {

    console.log("Generating quote ⏳...");
    new Typewriter("#quote", {
        strings: response.data.answer,
        autoStart: true,
        delay: 5,
        cursor: null,
    });

}

function generateQuote(event) {
    event.preventDefault();

    let instructionInput = document.getElementById("user-instruction");

    apiKey = "b164e02a4a760t33f3o317f1aa0024b6";
    context = "You are an AI HR assistant. Your mission is to help individuals transition to any new career. As an AI HR assistant, provide clear, practical, and personalized advice tailored to the user's input. The guidance should include actionable steps such as assessing transferable skills, researching the desired industry, acquiring relevant knowledge or certifications, networking effectively, and gaining experience in the new field. Your responses must be written in plain basic HTML, formatted with 6 bullet points using bold text for each line. Avoid including any additional formatting or code block markers like ```html."
    prompt = `Generate career transition advice based on the user's input. Your role is to provide concise, actionable, and personalized advice in plain basic HTML, using 6 bullet points in bold. If the user input contains "any negative words" (e.g., 'thief,' or any harmful language), please letting them know those words are not understood and guide them back toward constructive, positive language. Always end the response with a warm, encouraging sentence to motivate the user and end it with smile emoji. ${instructionInput.value}`;

    apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    console.log("Generationg quote ⏳...");
    console.log(`Prompt : ${prompt}`);
    console.log(`Context : ${context}`);

    axios.get(apiUrl).then(displayQuote);

}

let qouteFormElement = document.getElementById("quote-generator-form");
qouteFormElement.addEventListener("submit", generateQuote);