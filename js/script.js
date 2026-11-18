// Hitta knappen. Samma JavaScript-fil används på alla fyra sidor.
const textKnapp = document.querySelector("#textstorlek");
let storText = false;

if (textKnapp) {
    textKnapp.hidden = false;

    // Kör funktionen när besökaren klickar på knappen.
    textKnapp.addEventListener("click", function () {
        if (storText === false) {
            // rem i CSS utgår från textstorleken på html-elementet.
            document.documentElement.style.fontSize = "20px";
            textKnapp.textContent = "Normal text";
            textKnapp.setAttribute("aria-pressed", "true");
            storText = true;
        } else {
            // Tomt värde återställer webbläsarens vanliga textstorlek.
            document.documentElement.style.fontSize = "";
            textKnapp.textContent = "Större text";
            textKnapp.setAttribute("aria-pressed", "false");
            storText = false;
        }
    });
}
