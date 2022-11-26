// selecccionamos los elementos con el id
const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");

// funcion callback que se ejecuta cuando el elemento entra al threshold espeficicado
const cargarImagen = (entradas, observador) => {
  // console.log(entradas)
  // console.log(observador)

  //   Cuando el elemento entre al threshold agregamos la clase css visible y cuando salga la removemos
  //   "isIntersecting" es un tipo de dato Boolean
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    } else {
      entrada.target.classList.remove("visible");
    }
  });
};

// el observador es quien vigila la entrada de los elementos al viewport
const observador = new IntersectionObserver(cargarImagen, {
  // con el root en null hacemos referencia al viewport y no a algun elemento interno
  root: null,
  //   rootMargin nos permite agregarle o quitarle margen a nuetro observador
  rootMargin: "0px 0px 0px 0px",
  //   threshold nos permite indicarle cuando queremos que ejecute el codigo,
  //    es decir, si queremos que se ejecute cuando toda la imagen esta dentro del viewport
  //    o solo una parte (valores permitidos desde 0.0 hasra 1.0)
  threshold: 1.0,
});

observador.observe(imagen1);
observador.observe(imagen2);
