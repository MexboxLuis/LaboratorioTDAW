const mouseover = (event) => {
  const {pageX, pageY, target: { src }} = event;
  const imgFlotante = document.createElement("img");
  imgFlotante.src = src;
  imgFlotante.style.width = "200px";
  imgFlotante.style.position = "absolute";
  imgFlotante.style.top = `${pageY}px`;
  imgFlotante.style.left = `${25 + pageX}px`;
  imgFlotante.classList.add("imgFlotante");
  document.body.appendChild(imgFlotante);
};

const mouseout = () => {
const ultimaImagenAgregada = document.querySelector(".imgFlotante");
  ultimaImagenAgregada.remove();
};

const imagenes = document.querySelectorAll(".imagen");
imagenes.forEach((img) => {
  img.addEventListener("mouseover", mouseover);
  img.addEventListener("mouseout", mouseout);
});

const editButtons = document.querySelectorAll('button');

editButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const row = button.parentElement.parentElement;
    const image = row.querySelector('img').src;
    const title = row.querySelectorAll('td')[2].textContent;
    const artist = row.querySelectorAll('td')[3].textContent;
    const year = row.querySelectorAll('td')[4].textContent;
    const genre = row.querySelectorAll('td')[5].textContent;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2> Editar </h2>
        <img src="${image}">
        <p> ${title} </p>
        <p> ${artist}</p>
        <p> ${year} </p>
        <p> ${genre} </p>
      </div>
    `;
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function() {
      modal.remove();
    });

    document.body.appendChild(modal);
  });
});

const filterBtn = document.querySelector('#set input[value="Filtrar"]');
const filterSelect = document.querySelector('#set select[name="filter"]');
const artworks = document.querySelectorAll('.artwork');

filterBtn.addEventListener('click', () => {
  const selectedGenre = filterSelect.value;
  artworks.forEach((artwork) => {
    if (selectedGenre === '5') {
      artwork.style.display = 'block';
    } else {
      const artworkGenre = artwork.dataset.genre;
      artwork.style.display = artworkGenre === selectedGenre ? 'block' : 'none';
    }
  });
});

const elements = document.querySelectorAll(".genero");
var filter = document.getElementById("filtro");
var form = document.getElementById("formulario");
form.onsubmit = function () {
  const selectedFilter = filter.options[filter.selectedIndex].text;
  for (let element of elements) {
    if (element.innerHTML === selectedFilter) {
    } else {
      element.parentNode.style.display = "none";
    }
  }
};






