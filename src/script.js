function displayCareer(response) {

    console.log("Generating response ⏳...");

    //Ensure #career-generator" element exists before initializing typewritter
    const careerElement = document.querySelector("#career-generator");
    if (!careerElement) {
        console.log("ERROR : Couldn't find container element with ID career");
        return;
    }

    // Check if the API returned valid response
    if (response.data && response.data.answer) {
        //Use typewriter library to display the response dynamically
        new Typewriter("#career-generator", {
            strings: response.data.answer,
            autoStart: true,
            delay: 5,
            cursor: null,
        });
    } else {
        careerElement.innerHTML = `Apologies, we are unable to generate the response. Kindly try again! `
    }
}

function generateCareer(event) {
    event.preventDefault();

    let instructionInput = document.getElementById("user-instruction");
    let careerElement = document.getElementById("career-generator");

    if (!instructionInput.value.trim()) {
        careerElement.classList.remove("hidden");
        careerElement.innerHTML = "Please enter a valid career transition goal!";
        return;
    }

    apiKey = "b164e02a4a760t33f3o317f1aa0024b6";
    context = "You are an experimented and talented AI HR assistant. Your mission is to help individuals transition to any new career. As an AI HR assistant you need to provide clear, practical, and personalized advice tailored to the user's input. The guidance should include actionable steps such as assessing transferable skills, user(s) values , researching the desired industry, acquiring relevant knowledge or certifications , networking effectively, and gaining experience in the new field. Your responses must be written in plain basic HTML, formatted with 7 bullet points using bold text for each line. Avoid using code block markers (e.g., ```html) or links with white backgrounds, as they can hinder accessibility."

    prompt = `Generate career transition advice based on the user's input. Your response should be human centered, concise, actionable, and personalized advice that prioritizing individual needs, wittern in plain HTML. If the user input contains "any negative words" (e.g., 'thief,', 'failure' or any harmful language), gently letting them know those words are not understood and guide them back toward constructive, positive language. End the response with a warm, motivating sentence with smile emoji and add emoji that related to the career transition. ${instructionInput.value}`;

    apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`

    //Display a loading message
    careerElement.classList.remove("hidden");
    careerElement.innerHTML = ` Generating response about ${instructionInput.value}. Please wait... <span class="generating"> ⏳ </span>`;

    axios
        .get(apiUrl)
        .then(displayCareer)
        .catch((error) => {
            console.log("API error : ", error);
            careerElement.innerHTML = "Opps... Something went wrong while generating advice, Kindly try again!"
        })
}

// Add event listener to the form
let careerFormElement = document.getElementById("career-generator-form");
careerFormElement.addEventListener("submit", generateCareer);
