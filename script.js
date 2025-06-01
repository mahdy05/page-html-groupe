// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const paragraphe = document.getElementById("paragraphe");

  // Create a button dynamically
  const bouton = document.createElement("button");
  bouton.textContent = "Changer le texte";

  // Add click event to the button
  bouton.addEventListener("click", function () {
    paragraphe.textContent = "Le texte a été modifié par JavaScript !";
  });

  // Add the button to the body
  document.body.appendChild(bouton);
});
