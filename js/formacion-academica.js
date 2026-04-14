// =====================================================
// FORMACION-ACADEMICA.JS — Paso 2: Formación Académica
// =====================================================
// Maneja dinámicamente:
// 1. Agregar/eliminar estudios de educación superior
// 2. Agregar/eliminar idiomas
// 3. Previsualización de datos

// =====================================================
// REFERENCIAS AL DOM
// =====================================================
const formFormacion = document.getElementById("formFormacion");
const btnAgregarEstudio = document.getElementById("btnAgregarEstudio");
const btnAgregarIdioma = document.getElementById("btnAgregarIdioma");
const tablaEstudios = document.querySelector("#tablaEstudios tbody");
const tablaIdiomas = document.querySelector("#tablaIdiomas tbody");
const emptyEstudios = document.getElementById("emptyEstudios");
const emptyIdiomas = document.getElementById("emptyIdiomas");
const btnPreview = document.getElementById("btnPreview");
const panelPreview = document.getElementById("previewFormacion");

// Arreglos para almacenar registros
let estudiosRegistrados = [];
let idiomasRegistrados = [];

// =====================================================
// FUNCIÓN: mostrar/ocultar campo "Otra Institución"
// =====================================================
const selectInstitucion = document.querySelector('select[name="institucionEducativa"]');
const inputOtraInstitucion = document.getElementById("otraInstitucion");

selectInstitucion.addEventListener("change", function() {
  if (this.value === "otra") {
    inputOtraInstitucion.classList.remove("hidden");
  } else {
    inputOtraInstitucion.classList.add("hidden");
    inputOtraInstitucion.value = "";
  }
});

// =====================================================
// FUNCIÓN: Agregar Estudio
// =====================================================
btnAgregarEstudio.addEventListener("click", function() {
  // Obtener valores de campos
  const modalidad = document.getElementById("modalidadAcademica").value;
  const semestres = document.getElementById("semestresAprobados").value;
  const graduado = document.getElementById("graduado").value;
  const institucion = selectInstitucion.value;
  const institucionTexto = institucion === "otra" ? inputOtraInstitucion.value : selectInstitucion.options[selectInstitucion.selectedIndex].text;
  const titulo = document.getElementById("tituloObtenido").value;
  const fecha = document.getElementById("fechaTerminacion").value;
  const tarjeta = document.getElementById("tarjetaProfesional").value;

  // Obtener texto de la modalidad
  const textoModalidad = document.getElementById("modalidadAcademica").options[document.getElementById("modalidadAcademica").selectedIndex].text;

  // Validar campos obligatorios
  if (!modalidad || !semestres || !graduado || !institucion || !institucionTexto.trim() || !titulo) {
    alert("⚠️ Complete todos los campos obligatorios del estudio.");
    return;
  }

  // Crear objeto de estudio
  const nuevoEstudio = {
    id: Date.now(),
    modalidad: textoModalidad,
    semestres: semestres,
    graduado: graduado === "si" ? "Sí" : "No",
    institucion: institucionTexto,
    titulo: titulo,
    fecha: fecha || "---",
    tarjeta: tarjeta || "---"
  };

  // Agregar al arreglo
  estudiosRegistrados.push(nuevoEstudio);

  // Agregar fila a tabla
  agregarFilaEstudio(nuevoEstudio);

  // Limpiar campos
  document.getElementById("modalidadAcademica").value = "";
  document.getElementById("semestresAprobados").value = "";
  document.getElementById("graduado").value = "";
  selectInstitucion.value = "";
  inputOtraInstitucion.value = "";
  inputOtraInstitucion.classList.add("hidden");
  document.getElementById("tituloObtenido").value = "";
  document.getElementById("fechaTerminacion").value = "";
  document.getElementById("tarjetaProfesional").value = "";

  // Actualizar tabla
  actualizarTablaEstudios();
});

// =====================================================
// FUNCIÓN: Agregar fila a tabla de estudios
// =====================================================
function agregarFilaEstudio(estudio) {
  const fila = document.createElement("tr");
  fila.dataset.id = estudio.id;
  fila.innerHTML =
    `<td>${estudiosRegistrados.length}</td>` +
    `<td>${estudio.modalidad}</td>` +
    `<td>${estudio.institucion}</td>` +
    `<td>${estudio.titulo}</td>` +
    `<td>${estudio.semestres}</td>` +
    `<td>${estudio.graduado}</td>` +
    `<td>
      <button type="button" class="btn btn-danger btn-sm btn-eliminar-estudio" data-id="${estudio.id}">
        🗑️ Eliminar
      </button>
    </td>`;

  tablaEstudios.appendChild(fila);
}

// =====================================================
// FUNCIÓN: Actualizar tabla de estudios (renumerar)
// =====================================================
function actualizarTablaEstudios() {
  emptyEstudios.style.display = estudiosRegistrados.length === 0 ? "block" : "none";
  const filas = tablaEstudios.querySelectorAll("tr");
  filas.forEach((fila, index) => {
    fila.cells[0].textContent = index + 1;
  });
}

// =====================================================
// EVENTO: Eliminar estudio (delegación)
// =====================================================
tablaEstudios.addEventListener("click", function(e) {
  if (e.target.closest(".btn-eliminar-estudio")) {
    const id = parseInt(e.target.closest(".btn-eliminar-estudio").dataset.id);
    estudiosRegistrados = estudiosRegistrados.filter(e => e.id !== id);
    document.querySelector(`tr[data-id="${id}"]`).remove();
    actualizarTablaEstudios();
  }
});

// =====================================================
// FUNCIÓN: Agregar Idioma
// =====================================================
btnAgregarIdioma.addEventListener("click", function() {
  const idioma = document.getElementById("idioma").value;
  const habla = document.getElementById("nivelHabla").value;
  const lectura = document.getElementById("nivelLectura").value;
  const escritura = document.getElementById("nivelEscritura").value;

  // Obtener textos legibles de los selects
  const textoIdioma = document.getElementById("idioma").options[document.getElementById("idioma").selectedIndex].text;
  const textoHabla = document.getElementById("nivelHabla").options[document.getElementById("nivelHabla").selectedIndex].text;
  const textoLectura = document.getElementById("nivelLectura").options[document.getElementById("nivelLectura").selectedIndex].text;
  const textoEscritura = document.getElementById("nivelEscritura").options[document.getElementById("nivelEscritura").selectedIndex].text;

  // Validar campos obligatorios
  if (!idioma || !habla || !lectura || !escritura) {
    alert("⚠️ Complete todos los campos del idioma.");
    return;
  }

  // Crear objeto de idioma
  const nuevoIdioma = {
    id: Date.now(),
    idioma: textoIdioma,
    habla: textoHabla,
    lectura: textoLectura,
    escritura: textoEscritura
  };

  // Agregar al arreglo
  idiomasRegistrados.push(nuevoIdioma);

  // Agregar fila a tabla
  agregarFilaIdioma(nuevoIdioma);

  // Limpiar campos
  document.getElementById("idioma").value = "";
  document.getElementById("nivelHabla").value = "";
  document.getElementById("nivelLectura").value = "";
  document.getElementById("nivelEscritura").value = "";

  // Actualizar tabla
  actualizarTablaIdiomas();
});

// =====================================================
// FUNCIÓN: Agregar fila a tabla de idiomas
// =====================================================
function agregarFilaIdioma(idioma) {
  const fila = document.createElement("tr");
  fila.dataset.id = idioma.id;
  fila.innerHTML =
    `<td>${idiomasRegistrados.length}</td>` +
    `<td>${idioma.idioma}</td>` +
    `<td>${idioma.habla}</td>` +
    `<td>${idioma.lectura}</td>` +
    `<td>${idioma.escritura}</td>` +
    `<td>
      <button type="button" class="btn btn-danger btn-sm btn-eliminar-idioma" data-id="${idioma.id}">
        🗑️ Eliminar
      </button>
    </td>`;

  tablaIdiomas.appendChild(fila);
}

// =====================================================
// FUNCIÓN: Actualizar tabla de idiomas (renumerar)
// =====================================================
function actualizarTablaIdiomas() {
  emptyIdiomas.style.display = idiomasRegistrados.length === 0 ? "block" : "none";
  const filas = tablaIdiomas.querySelectorAll("tr");
  filas.forEach((fila, index) => {
    fila.cells[0].textContent = index + 1;
  });
}

// =====================================================
// EVENTO: Eliminar idioma (delegación)
// =====================================================
tablaIdiomas.addEventListener("click", function(e) {
  if (e.target.closest(".btn-eliminar-idioma")) {
    const id = parseInt(e.target.closest(".btn-eliminar-idioma").dataset.id);
    idiomasRegistrados = idiomasRegistrados.filter(i => i.id !== id);
    document.querySelector(`tr[data-id="${id}"]`).remove();
    actualizarTablaIdiomas();
  }
});

// =====================================================
// PREVISUALIZACIÓN
// =====================================================
btnPreview.addEventListener("click", function() {
  const educBasica = document.getElementById("educacionBasica").options[document.getElementById("educacionBasica").selectedIndex].text;
  const tituloBasica = document.getElementById("tituloBasica").value || "---";

  document.getElementById("prevEducBasica").textContent = educBasica !== "-- Seleccione --" ? educBasica : "---";
  document.getElementById("prevTituloBasica").textContent = tituloBasica;
  document.getElementById("prevTotalEstudios").textContent = estudiosRegistrados.length;
  document.getElementById("prevTotalIdiomas").textContent = idiomasRegistrados.length;

  panelPreview.classList.toggle("visible");
});

// =====================================================
// VALIDACIÓN ANTES DE AVANZAR AL PASO 3
// =====================================================
const btnSiguiente = document.querySelector(".form-actions .btn-primary");
btnSiguiente.addEventListener("click", function(e) {
  const educBasica = document.getElementById("educacionBasica").value;

  if (!educBasica) {
    alert("⚠️ Debe seleccionar el nivel de educación básica antes de continuar.");
    return;
  }

  if (estudiosRegistrados.length === 0) {
    alert("⚠️ Debe agregar al menos un estudio de educación superior antes de continuar.");
    return;
  }

  if (idiomasRegistrados.length === 0) {
    alert("⚠️ Debe agregar al menos un idioma antes de continuar.");
    return;
  }

  // Si todo está correcto, mostrar previsualización
  alert("✅ Formación académica registrada correctamente.\nContinuando al siguiente paso...");
  window.location.href = "experiencia-laboral.html";
});
