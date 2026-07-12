//Galería de arte

// Captura de los elementos del HTML en variables
let boton = document.querySelector("#mostrar");
let diseño = document.querySelector("#diseño");
let galeria = document.querySelector("#contenedor");

diseño.style.display = 'none';


boton.addEventListener('click', function(e){

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

    boton.style.display = "none";

    diseño.style.display = 'block';
});

diseño.addEventListener('click', function(){

    // Obtiene todas los elementos(contenedores) de la galería
    let obras = document.querySelectorAll(".obra");

    // Recorre cada de esos contenedores
    for(let i = 0; i < obras.length; i++){

        // Cambia el color de fondo de cada contenedor
        obras[i].style.background = 'purple';
    }

    diseño.style.display = 'none';
});

//Dato curioso al azar

let botonDato = document.querySelector("#dato");
let respuesta = document.querySelector("#resultado");
let datosCuriosos = [
    "una formación universitaria en química física.",
    "más de 70 países donde se han exhibido sus obras.",
    "instalaciones que responden a la participación del público.",
    "un fuerte interés por la relación entre arte y tecnología.",
    "obras que utilizan sensores biométricos y datos en tiempo real.",
    "el premio Golden Nica del festival Ars Electronica.",
    "intervenciones artísticas realizadas en edificios y espacios públicos.",
    "proyectos que exploran temas como la identidad, la memoria y la vigilancia.",
    "obras en las que la luz y el sonido cambian según la interacción de los visitantes.",
    "una trayectoria reconocida internacionalmente dentro del arte contemporáneo."
];
let numRandom = 0;

botonDato.addEventListener('click', function(){
    numRandom = Math.floor(Math.random() * 10);
    respuesta.innerText = `Rafael Lozano-Hemmer tiene ${datosCuriosos[numRandom]}`;
});