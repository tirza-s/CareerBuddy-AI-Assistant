function generateQuote(event) {
    event.preventDefault();

    new Typewriter("#quote", {
        strings: "Stay hungry, stay foolish.",
        autoStart: true,
        delay: 10,
        cursor: null,
    });

}

let qouteFormElement = document.getElementById("quote-generator-form");
qouteFormElement.addEventListener("submit", generateQuote);