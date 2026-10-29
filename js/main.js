const modalPlat = document.getElementById("modalPlat");

modalPlat.addEventListener("show.bs.modal", (event) => {
  const bouton = event.relatedTarget; // bouton cliqué
  const nom = bouton.getAttribute("data-nom"); // attribut data-nom
  modalPlat.querySelector(".modal-title").textContent = nom;
  // à compléter : image, description, prix
});

const liste = document.getElementById('liste-plats');

fetch('data/plats.json')
  .then((reponse) => reponse.json())
  .then((plats) => {
    liste.innerHTML = plats.map((plat) => `
      <div class="col">
        <div class="card h-100 shadow-sm">

        <div class="position-relative">
            <img src="${plat.image}" class="card-img-top" alt="${plat.nom}">
            
        
            ${plat.nouveau ? '<span class="badge bg-danger position-absolute top-0 end-0 m-2">Nouveau</span>' : ''}
          </div>
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${plat.nom}</h5>
            <p class="card-text text-muted">${plat.description}</p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <span class="fw-bold text-danger">${plat.prix}</span>
              <button type="button" 
                      class="btn btn-primary btn-sm" 
                      data-bs-toggle="modal" 
                      data-bs-target="#modalPlat"
                      data-nom="${plat.nom}"
                      data-image="${plat.image}"
                      data-description="${plat.description}"
                      data-prix="${plat.prix}">
                  Voir le détail
              </button>
            </div>
          </div>
        </div>
      </div>`).join('');
  })
  .catch((erreur) => {
   
    liste.innerHTML = `
      <div class="alert alert-danger text-center w-100" role="alert">
        Erreur lors du chargement des plats ! Veuillez réessayer plus tard.
      </div>
    `;
  });