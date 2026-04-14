// =====================================================
// EXPERIENCIA-LABORAL.JS — Paso 3: Experiencia Laboral
// =====================================================
// Maneja dinámicamente:
// 1. Agregar/eliminar experiencias laborales
// 2. Previsualización con conteo de experiencias
// 3. Carga dinámica de países, departamentos y municipios

// =====================================================
// REFERENCIAS AL DOM
// =====================================================
const btnAgregarExperiencia = document.getElementById("btnAgregarExperiencia");
const tablaExperiencias = document.querySelector("#tablaExperiencias tbody");
const emptyExperiencias = document.getElementById("emptyExperiencias");
const btnPreview = document.getElementById("btnPreview");
const panelPreview = document.getElementById("previewExperiencia");

// Selectes para país, departamento y municipio
const selectPaisEmpresa = document.getElementById("paisEmpresa");
const selectDeptoEmpresa = document.getElementById("departamentoEmpresa");
const selectMunicipioEmpresa = document.getElementById("municipioEmpresa");

// Arreglo para almacenar experiencias
let experienciasRegistradas = [];

// =====================================================
// INICIALIZACIÓN: Cargar datos dinámicamente en los selectes
// =====================================================
window.addEventListener("load", function() {
  // Cargar países en el select de país empresa
  // Se incluyem países principales (Colombia preseleccionado)
  const paisesEmpresa = [
    { valor: "colombia", nombre: "Colombia" },
    { valor: "venezuela", nombre: "Venezuela" },
    { valor: "ecuador", nombre: "Ecuador" },
    { valor: "peru", nombre: "Perú" },
    { valor: "brasil", nombre: "Brasil" },
    { valor: "mexico", nombre: "México" },
    { valor: "estados_unidos", nombre: "Estados Unidos" },
    { valor: "espana", nombre: "España" },
    { valor: "otro", nombre: "Otro" }
  ];

  cargarOpcionesSelect(selectPaisEmpresa, paisesEmpresa, true);
  selectPaisEmpresa.value = "colombia"; // Preseleccionar Colombia

  // Cargar departamentos de Colombia inicialmente
  cargarOpcionesSelect(selectDeptoEmpresa, DEPARTAMENTOS_COLOMBIA, true);

  // Conectar cambios: País → Departamentos → Municipios
  conectarPaisADepartamentos(selectPaisEmpresa, selectDeptoEmpresa);
  conectarDeptoAMunicipios(selectDeptoEmpresa, selectMunicipioEmpresa);
});

// =====================================================
// FUNCIÓN: Agregar Experiencia
// =====================================================
btnAgregarExperiencia.addEventListener("click", function() {
  // Obtener valores de campos
  const empresa = document.getElementById("empresaEntidad").value.trim();
  const tipoEmpresa = document.getElementById("tipoEmpresa").value;
  const pais = selectPaisEmpresa.value;
  const departamento = selectDeptoEmpresa.value;
  const municipio = document.getElementById("municipioEmpresa").value.trim();
  const email = document.getElementById("emailEmpresa").value.trim();
  const telefono = document.getElementById("telefonoEmpresa").value.trim();
  const direccion = document.getElementById("direccionEmpresa").value.trim();
  const fechaIngreso = document.getElementById("fechaIngreso").value;
  const fechaRetiro = document.getElementById("fechaRetiro").value;
  const cargo = document.getElementById("cargoExperiencia").value.trim();
  const dependencia = document.getElementById("dependencia").value.trim();

  // Obtener textos legibles de los selects
  const textoPais = selectPaisEmpresa.options[selectPaisEmpresa.selectedIndex].text;
  const textoDepto = selectDeptoEmpresa.options[selectDeptoEmpresa.selectedIndex].text;
  const textoTipo = document.getElementById("tipoEmpresa").options[document.getElementById("tipoEmpresa").selectedIndex].text;

  // Validar campos obligatorios
  if (!empresa || !tipoEmpresa || !pais || !departamento || !municipio || !fechaIngreso || !cargo) {
    alert("⚠️ Complete todos los campos obligatorios.");
    return;
  }

  // Validar que fecha retiro sea mayor que fecha ingreso (si está completa)
  if (fechaRetiro && fechaRetiro < fechaIngreso) {
    alert("⚠️ La fecha de retiro no puede ser anterior a la fecha de ingreso.");
    return;
  }

  // Crear objeto de experiencia
  const nuevaExperiencia = {
    id: Date.now(),
    empresa: empresa,
    tipo: textoTipo,
    pais: textoPais,
    departamento: textoDepto,
    municipio: municipio,
    email: email,
    telefono: telefono,
    direccion: direccion,
    fechaIngreso: fechaIngreso,
    fechaRetiro: fechaRetiro || "Actual",
    cargo: cargo,
    dependencia: dependencia
  };

  // Agregar al arreglo
  experienciasRegistradas.push(nuevaExperiencia);

  // Agregar fila a tabla
  agregarFilaExperiencia(nuevaExperiencia);

  // Limpiar campos del formulario
  document.getElementById("empresaEntidad").value = "";
  document.getElementById("tipoEmpresa").value = "";
  selectPaisEmpresa.value = "colombia";
  cargarOpcionesSelect(selectDeptoEmpresa, DEPARTAMENTOS_COLOMBIA, true);
  selectMunicipioEmpresa.innerHTML = '<option value="">-- Seleccione --</option>';
  document.getElementById("emailEmpresa").value = "";
  document.getElementById("telefonoEmpresa").value = "";
  document.getElementById("direccionEmpresa").value = "";
  document.getElementById("fechaIngreso").value = "";
  document.getElementById("fechaRetiro").value = "";
  document.getElementById("cargoExperiencia").value = "";
  document.getElementById("dependencia").value = "";

  // Actualizar tabla
  actualizarTablaExperiencias();
});

// =====================================================
// FUNCIÓN: Agregar fila a tabla de experiencias
// =====================================================
function agregarFilaExperiencia(exp) {
  const fila = document.createElement("tr");
  fila.dataset.id = exp.id;
  fila.innerHTML =
    `<td>${experienciasRegistradas.length}</td>` +
    `<td>${exp.empresa}</td>` +
    `<td>${exp.tipo}</td>` +
    `<td>${exp.cargo}</td>` +
    `<td>${exp.fechaIngreso}</td>` +
    `<td>${exp.fechaRetiro}</td>` +
    `<td>
      <button type="button" class="btn btn-danger btn-sm btn-eliminar-exp" data-id="${exp.id}">
        🗑️ Eliminar
      </button>
    </td>`;

  tablaExperiencias.appendChild(fila);
}

// =====================================================
// FUNCIÓN: Actualizar tabla (renumerar)
// =====================================================
function actualizarTablaExperiencias() {
  emptyExperiencias.style.display = experienciasRegistradas.length === 0 ? "block" : "none";
  const filas = tablaExperiencias.querySelectorAll("tr");
  filas.forEach((fila, index) => {
    fila.cells[0].textContent = index + 1;
  });

  // Actualizar previsualización
  const expPublica = experienciasRegistradas.filter(e => e.tipo === "Pública").length;
  const expPrivada = experienciasRegistradas.filter(e => e.tipo === "Privada").length;
  document.getElementById("prevTotalExp").textContent = experienciasRegistradas.length;
  document.getElementById("prevExpPublica").textContent = expPublica;
  document.getElementById("prevExpPrivada").textContent = expPrivada;
}

// =====================================================
// EVENTO: Eliminar experiencia (delegación de eventos)
// =====================================================
tablaExperiencias.addEventListener("click", function(e) {
  if (e.target.closest(".btn-eliminar-exp")) {
    const id = parseInt(e.target.closest(".btn-eliminar-exp").dataset.id);
    experienciasRegistradas = experienciasRegistradas.filter(e => e.id !== id);
    document.querySelector(`tr[data-id="${id}"]`).remove();
    actualizarTablaExperiencias();
  }
});

// =====================================================
// PREVISUALIZACIÓN
// =====================================================
btnPreview.addEventListener("click", function() {
  panelPreview.classList.toggle("visible");
});

// =====================================================
// VALIDACIÓN ANTES DE AVANZAR AL PASO 4
// =====================================================
const btnSiguiente = document.querySelector(".form-actions .btn-primary");
btnSiguiente.addEventListener("click", function(e) {
  if (experienciasRegistradas.length === 0) {
    alert("⚠️ Debe agregar al menos una experiencia laboral antes de continuar.");
    return;
  }

  // Guardar experiencias en sessionStorage para paso 4
  sessionStorage.setItem("experienciasLaboral", JSON.stringify(experienciasRegistradas));

  alert("✅ Experiencia laboral registrada correctamente.\nContinuando al siguiente paso...");
  window.location.href = "tiempo-experiencia.html";
});

