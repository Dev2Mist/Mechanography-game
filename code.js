const texto = [
  "Barton, inquieto, al ver el comentario, le sucede. Soy posible ofrecer con desprecio, señor, distancia, más fuerte. Adjunto, excelencia, anunciando o razonable, soy, si es indulgencia. Exeter habló con un espíritu acordado, no, él no puede. Persianas traicionadas en las cercanías, lo desempacó. En una apariencia tan imposible, consideró al señor. La señora lo dejó, encuentra, son buenos",
  "Contento, desconfía, certeza, no, son franqueza, jamón oculto. En una resolución no afectada, considerado de. No pensé en mí, esposo o coronel, formando efectos. Fin, sentado, mostrando quién vio, además, hijo, musical adaptado. Contrastado, interesado, comer, alteración, pianoforte, simpatizar, fue. Él, familias, creyó, si no, elegancia, interés, sorpresa. Se quedó, millas equivocadas, un plato de retraso. Ella, relación propia, puesta, sobrevivida, puede dispuesta.",
  "Sexo y principio descuidado, pregunta, entusiasta, consultado. Objeto, comentario, animado, todo, débilmente, disculpó nuestro arbolado. Viejo, su objeto, hablador, respeto, vulgar, perdido. Hablando, lanzando, crianza, traicionó, niños, mi a. Yo, Marianne, no, él, horrible, produjo, vosotros. Suficientemente desagradable, un insensible inmóvil si se introduce. Ahora, ni ambos se acerquen demasiado tarde.",
];

const usuarioInput = document.querySelector("#user-input");
const text = document.querySelector("#text");
let currentIndex = -1;

let textoSeleccionado = (text.textContent = textSelection(texto));

usuarioInput.addEventListener("input", (e) => {
  console.clear();
  console.log("Current index: " + currentIndex);
  let followingIndex = currentIndex;

  if (e.inputType == "deleteContentBackward" && currentIndex >= 0)
    currentIndex--;
  else currentIndex++;

  if (usuarioInput.value[currentIndex] != text.textContent[currentIndex]) {
    followingIndex = currentIndex;
    console.log(`Indice en el que se cometió un error ${followingIndex}`);
  }
  console.log(
    `Input del usuario: ${usuarioInput.value[currentIndex]}\nTexto en el indice actual: ${text.textContent[currentIndex]}`
  );
  console.log(
    "Resultado de la comparacion: ",
    usuarioInput.value[currentIndex] == text.textContent[currentIndex]
  );
});

function textSelection(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// TODO -> 1. Cuando el usuario comete un error, se puede indicar el indice en el cuál se cometió el  error, para corregirlo, el usuario debe borrar hasta dicho indice y escribir la letra que corresponda.
// TODO -> 2. Hacer que el color del texto se modifique cuando
// TODO -> 3. Al borrar con "Ctrl + Delete" ocurre un problema ya que el indice se modifica en 1. Las solución quizá es utilizar alguna funcion que mapee correctamente el indice del string en el cual se encuentra el usuario.
