// VARIABLES
const botonAñadir = document.querySelectorAll('#boton')[0];

//  FUNCIONES
function anadirTarea() {
  const tarea = document.querySelectorAll('#input')[0].value;

  document.querySelectorAll('#contenedor')[0].append(tarea + '<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>'
</div>)
}


// BINDS Y EVENTOS
botonAñadir.addEventListener('click', function() {
  anadirTarea();
})
