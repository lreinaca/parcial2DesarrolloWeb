// =====================================================
// FORMACION-ACADEMICA.JS — Paso 2: Formación Académica
// =====================================================
// Maneja dinámicamente:
// 1. Títulos de educación básica dinámicos según grado seleccionado
// 2. Mostrar/ocultar educación superior según grado (>= 9)
// 3. Modalidades académicas condicionales (grado 9-10 vs 11)
// 4. Agregar/eliminar estudios de educación superior
// 5. Agregar/eliminar idiomas (opcional, pero niveles obligatorios al agregar)
// 6. Fechas máximas: no permite fechas futuras
// 7. Previsualización de datos

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
// FUNCIÓN: Educación básica → título dinámico + educación superior condicional
// =====================================================
// Al cambiar el grado aprobado:
// - Se cargan los títulos correspondientes en selectTituloBasica
//   (grado 1-10: un solo título auto-seleccionado; grado 11: 5 opciones de bachiller)
// - Se muestra/oculta la sección de educación superior (grado >= 9)
// - Se cargan las modalidades según el grado (9-10: básicas; 11: todas)

const selectEducBasica = document.getElementById("educacionBasica");
const seccionSuperior = document.getElementById("seccionEducacionSuperior");
const selectModalidad = document.getElementById("modalidadAcademica");
const selectTituloBasica = document.getElementById("tituloBasica");

// Diccionario: grado → títulos disponibles
const titulosPorGrado = {
  1: [{ valor: "certificado_1", nombre: "Certificado 1° Primaria" }],
  2: [{ valor: "certificado_2", nombre: "Certificado 2° Primaria" }],
  3: [{ valor: "certificado_3", nombre: "Certificado 3° Primaria" }],
  4: [{ valor: "certificado_4", nombre: "Certificado 4° Primaria" }],
  5: [{ valor: "certificado_primaria", nombre: "Certificado de Educación Básica Primaria" }],
  6: [{ valor: "certificado_6", nombre: "Certificado 6° Secundaria" }],
  7: [{ valor: "certificado_7", nombre: "Certificado 7° Secundaria" }],
  8: [{ valor: "certificado_8", nombre: "Certificado 8° Secundaria" }],
  9: [{ valor: "certificado_basica", nombre: "Certificado de Educación Básica Secundaria" }],
  10: [{ valor: "certificado_10", nombre: "Certificado 10° Media" }],
  11: [
    { valor: "bachiller_academico", nombre: "Bachiller Académico" },
    { valor: "bachiller_tecnico", nombre: "Bachiller Técnico" },
    { valor: "bachiller_comercial", nombre: "Bachiller Comercial" },
    { valor: "bachiller_industrial", nombre: "Bachiller Industrial" },
    { valor: "bachiller_agropecuario", nombre: "Bachiller Agropecuario" }
  ]
};

// Carga las opciones de título en el select según el grado.
// Si solo hay una opción (grados 1-10), la auto-selecciona.
function cargarTitulosBasica(grado) {
  selectTituloBasica.innerHTML = '<option value="">-- Seleccione --</option>';
  const titulos = titulosPorGrado[grado];
  if (!titulos) return;
  titulos.forEach(function(item) {
    const opt = document.createElement("option");
    opt.value = item.valor;
    opt.textContent = item.nombre;
    selectTituloBasica.appendChild(opt);
  });
  if (titulos.length === 1) {
    selectTituloBasica.value = titulos[0].valor;
  }
}

// Opciones completas de modalidad académica (grado 11)
const todasLasModalidades = [
  { valor: "tecnico", nombre: "Técnico" },
  { valor: "tecnologo", nombre: "Tecnólogo" },
  { valor: "tecnologo_especializado", nombre: "Tecnólogo Especializado" },
  { valor: "profesional", nombre: "Profesional / Universitario" },
  { valor: "especializacion", nombre: "Especialización" },
  { valor: "maestria", nombre: "Maestría" },
  { valor: "doctorado", nombre: "Doctorado" }
];

// Opciones reducidas de modalidad (grados 9-10: solo niveles técnicos)
const modalidadesBasicas = [
  { valor: "tecnico", nombre: "Técnico" },
  { valor: "tecnologo", nombre: "Tecnólogo" },
  { valor: "tecnologo_especializado", nombre: "Tecnólogo Especializado" }
];

// Carga las opciones de modalidad en el select de educación superior
function cargarModalidades(lista) {
  selectModalidad.innerHTML = '<option value="">-- Seleccione --</option>';
  lista.forEach(function(item) {
    const opt = document.createElement("option");
    opt.value = item.valor;
    opt.textContent = item.nombre;
    selectModalidad.appendChild(opt);
  });
}

// Listener: al cambiar grado → cargar títulos + mostrar/ocultar superior + modalidades
selectEducBasica.addEventListener("change", function() {
  const grado = parseInt(this.value);

  // Cargar títulos correspondientes al grado
  cargarTitulosBasica(grado);

  if (grado < 9) {
    seccionSuperior.classList.add("hidden");
  } else {
    seccionSuperior.classList.remove("hidden");
    if (grado === 11) {
      cargarModalidades(todasLasModalidades);
    } else {
      cargarModalidades(modalidadesBasicas);
    }
  }
});

// =====================================================
// FECHA MÁXIMA: No permitir fechas futuras
// =====================================================
const hoyISO = new Date().toISOString().split("T")[0];
document.getElementById("fechaGradoBasica").setAttribute("max", hoyISO);
document.getElementById("fechaTerminacion").setAttribute("max", hoyISO);

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
// FUNCIÓN: mostrar/ocultar Fecha y Tarjeta según graduado
// =====================================================
const selectGraduado = document.getElementById("graduado");
const grupoFecha = document.getElementById("grupoFechaTerminacion");
const grupoTarjeta = document.getElementById("grupoTarjetaProfesional");

selectGraduado.addEventListener("change", function() {
  if (this.value === "no") {
    grupoFecha.classList.add("hidden");
    grupoTarjeta.classList.add("hidden");
    document.getElementById("fechaTerminacion").value = "";
    document.getElementById("tarjetaProfesional").value = "";
  } else {
    grupoFecha.classList.remove("hidden");
    grupoTarjeta.classList.remove("hidden");
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
// FUNCIÓN: mostrar/ocultar campo "Otro Idioma"
// =====================================================
const selectIdiomaRef = document.getElementById("idioma");
const inputOtroIdioma = document.getElementById("otroIdioma");

// Lista de idiomas del select original (para evitar duplicados con "Otro")
const idiomasDelSelect = ["inglés", "francés", "alemán", "portugués", "italiano", "mandarín", "japonés", "coreano", "árabe"];

selectIdiomaRef.addEventListener("change", function() {
  if (this.value === "otro") {
    inputOtroIdioma.classList.remove("hidden");
  } else {
    inputOtroIdioma.classList.add("hidden");
    inputOtroIdioma.value = "";
  }
});

// Formatear idioma: primera letra mayúscula, resto minúscula (ej: "INGLÉS" → "Inglés")
function formatearIdioma(texto) {
  const limpio = texto.trim();
  if (!limpio) return "";
  return limpio.charAt(0).toUpperCase() + limpio.slice(1).toLowerCase();
}

// Al perder foco en "Otro idioma", formatear el texto automáticamente
inputOtroIdioma.addEventListener("blur", function() {
  this.value = formatearIdioma(this.value);
});

// =====================================================
// FUNCIÓN: Agregar Idioma
// =====================================================
btnAgregarIdioma.addEventListener("click", function() {
  const idioma = document.getElementById("idioma").value;
  const habla = document.getElementById("nivelHabla").value;
  const lectura = document.getElementById("nivelLectura").value;
  const escritura = document.getElementById("nivelEscritura").value;

  // Validar campos obligatorios
  if (!idioma || !habla || !lectura || !escritura) {
    alert("⚠️ Complete todos los campos del idioma.");
    return;
  }

  // Si es "otro", validar el campo de texto
  let textoIdioma;
  let valorIdioma;
  if (idioma === "otro") {
    const otroValor = formatearIdioma(inputOtroIdioma.value);
    if (!otroValor) {
      alert("⚠️ Ingrese el nombre del idioma.");
      return;
    }
    // Validar que no sea un idioma que ya está en la lista
    if (idiomasDelSelect.includes(otroValor.toLowerCase())) {
      alert("⚠️ Ese idioma ya existe en la lista. Selecciónelo directamente del menú.");
      return;
    }
    // Validar que no esté ya agregado en la tabla
    if (idiomasRegistrados.some(i => i.idioma.toLowerCase() === otroValor.toLowerCase())) {
      alert("⚠️ Ese idioma ya fue agregado.");
      return;
    }
    textoIdioma = otroValor;
    valorIdioma = "otro_" + otroValor.toLowerCase().replace(/ /g, "_");
  } else {
    textoIdioma = document.getElementById("idioma").options[document.getElementById("idioma").selectedIndex].text;
    valorIdioma = idioma;
  }

  // Obtener textos legibles de los niveles
  const textoHabla = document.getElementById("nivelHabla").options[document.getElementById("nivelHabla").selectedIndex].text;
  const textoLectura = document.getElementById("nivelLectura").options[document.getElementById("nivelLectura").selectedIndex].text;
  const textoEscritura = document.getElementById("nivelEscritura").options[document.getElementById("nivelEscritura").selectedIndex].text;

  // Crear objeto de idioma
  const nuevoIdioma = {
    id: Date.now(),
    idiomaValor: valorIdioma,
    idioma: textoIdioma,
    habla: textoHabla,
    lectura: textoLectura,
    escritura: textoEscritura
  };

  // Agregar al arreglo
  idiomasRegistrados.push(nuevoIdioma);

  // Agregar fila a tabla
  agregarFilaIdioma(nuevoIdioma);

  // Eliminar el idioma del select (para no repetir) — solo si no es "otro"
  const selectIdioma = document.getElementById("idioma");
  if (idioma !== "otro") {
    const optionSeleccionada = selectIdioma.querySelector(`option[value="${idioma}"]`);
    if (optionSeleccionada) optionSeleccionada.remove();
  }

  // Limpiar campos
  selectIdioma.value = "";
  inputOtroIdioma.value = "";
  inputOtroIdioma.classList.add("hidden");
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
    // Buscar el idioma eliminado para restaurarlo en el select
    const idiomaEliminado = idiomasRegistrados.find(i => i.id === id);
    if (idiomaEliminado) {
      const selectIdioma = document.getElementById("idioma");
      const option = document.createElement("option");
      option.value = idiomaEliminado.idiomaValor;
      option.textContent = idiomaEliminado.idioma;
      // Insertar antes de "Otro" si existe, o al final
      const optionOtro = selectIdioma.querySelector('option[value="otro"]');
      if (optionOtro) {
        selectIdioma.insertBefore(option, optionOtro);
      } else {
        selectIdioma.appendChild(option);
      }
    }
    idiomasRegistrados = idiomasRegistrados.filter(i => i.id !== id);
    document.querySelector(`tr[data-id="${id}"]`).remove();
    actualizarTablaIdiomas();
  }
});

// =====================================================
// PREVISUALIZACIÓN: llenar datos
// =====================================================
function llenarPreview() {
  const educBasica = document.getElementById("educacionBasica").options[document.getElementById("educacionBasica").selectedIndex].text;
  const tituloBasica = selectTituloBasica.value
    ? selectTituloBasica.options[selectTituloBasica.selectedIndex].text
    : "---";

  document.getElementById("prevEducBasica").textContent = educBasica !== "-- Seleccione --" ? educBasica : "---";
  document.getElementById("prevTituloBasica").textContent = tituloBasica;
  document.getElementById("prevTotalEstudios").textContent = estudiosRegistrados.length;
  document.getElementById("prevTotalIdiomas").textContent = idiomasRegistrados.length;
}

btnPreview.addEventListener("click", function() {
  llenarPreview();
  panelPreview.classList.toggle("visible");
});

// =====================================================
// BOTONES DE PREVISUALIZACIÓN: Corregir y Confirmar
// =====================================================
const btnCorregir = document.getElementById("btnCorregir");
const btnConfirmar = document.getElementById("btnConfirmar");

btnCorregir.addEventListener("click", function() {
  panelPreview.classList.remove("visible");
  document.querySelector("form").scrollIntoView({ behavior: "smooth", block: "start" });
});

btnConfirmar.addEventListener("click", function() {
  if (validarFormacion()) {
    window.location.href = "experiencia-laboral.html";
  } else {
    panelPreview.classList.remove("visible");
  }
});

// =====================================================
// VALIDACIÓN: Requisitos mínimos para avanzar al paso 3
// =====================================================
// - Educación básica: obligatoria siempre
// - Educación superior: obligatoria solo si grado >= 9
// - Idiomas: NO obligatorio (opcional)
function validarFormacion() {
  const educBasica = document.getElementById("educacionBasica").value;

  if (!educBasica) {
    alert("⚠️ Debe seleccionar el nivel de educación básica antes de continuar.");
    return false;
  }

  if (parseInt(educBasica) >= 9 && estudiosRegistrados.length === 0) {
    alert("⚠️ Debe agregar al menos un estudio de educación superior antes de continuar.");
    return false;
  }

  return true;
}

// =====================================================
// BOTÓN SIGUIENTE: validar → alert → previsualización
// =====================================================
const btnSiguiente = document.getElementById("btnSiguiente");
btnSiguiente.addEventListener("click", function() {
  if (validarFormacion()) {
    alert("A continuación se mostrará la previsualización de sus datos.\nPor favor verifique que la información sea correcta antes de continuar a la siguiente sección.");
    llenarPreview();
    panelPreview.classList.add("visible");
    panelPreview.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
