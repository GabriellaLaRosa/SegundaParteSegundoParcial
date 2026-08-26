//Galería de arte

// Captura de los elementos del HTML en variables
let diseño = document.querySelector("#diseño");
let galeria = document.querySelector("#contenedor");

diseño.style.display = 'none';


window.addEventListener('load', function(e){

    // Inserta el código HTML de la galería dentro del contenedor
    galeria.innerHTML = `
    <div class="obra">
        <label for="1">Black Hole - 2026</label>
        <img src="img/galeria/black_hole.jpg" alt="Black Hole - 2026" id="1">
    </div>

    <div class="obra">
        <label for="2">Broken Mirror Poets - 2025</label>
        <img src="img/galeria/broken_mirror_poets.jpg" alt="Broken Mirror Poets - 2025" id="2">
    </div>

    <div class="obra">
        <label for="3">Pulse Voronoi - 2024</label>
        <img src="img/galeria/pulse_voronoi.jpg" alt="Pulse Voronoi - 2024" id="3">
    </div>

    <div class="obra">
        <label for="4">Recurrent Lloyd Wright - 2024</label>
        <img src="img/galeria/recurrent_lloyd_wright.jpg" alt="Recurrent Lloyd Wright - 2024" id="4">
    </div>

    <div class="obra">
        <label for="5">Spectral Subjects - 2024</label>
        <img src="img/galeria/spectral_subjects.jpg" alt="Spectral Subjects - 2024" id="5">
    </div>
    `;

    diseño.style.display = 'block';
});

diseño.addEventListener('click', function(){

    // Obtiene todas los elementos(contenedores) de la galería
    let obras = document.querySelectorAll(".obra");

    // Recorre cada de esos contenedores
    for(let i = 0; i < obras.length; i++){

        // Cambia el color de fondo de cada contenedor
        obras[i].style.background = 'rgba(2, 93, 116, 0.5)';
    }

    diseño.style.display = 'none';
});

//Dato curioso al azar

let botonDato = document.querySelector("#dato");
let respuesta = document.querySelector("#resultado");
respuesta.style.display = "none";
let datosCuriosos = [
    "Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos.",
    "Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real.",
    "En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet.",
    "Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz.",
    "Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia.",
    "Ha expuesto sus obras en más de 70 países alrededor del mundo.",
    "Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico.",
    "Sus instalaciones suelen involucrar la participación activa del público para activar la obra.",
    "Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte.",
    "Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia."
];
let numRandom = 0;

botonDato.addEventListener('click', function(){
    respuesta.style.display = "block";
    numRandom = Math.floor(Math.random() * 10);
    respuesta.innerText = `${datosCuriosos[numRandom]}`;
});