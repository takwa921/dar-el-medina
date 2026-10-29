const modalPlat = document.getElementById("modalPlat");

modalPlat.addEventListener("show.bs.modal", (event) => {
  const bouton = event.relatedTarget; // bouton cliqué
  const nom = bouton.getAttribute("data-nom"); // attribut data-nom
  modalPlat.querySelector(".modal-title").textContent = nom;
  // à compléter : image, description, prix
});
