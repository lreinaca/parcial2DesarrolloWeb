// =====================================================
// TIEMPO-EXPERIENCIA.JS — Paso 4: Tiempo de Experiencia
// =====================================================
// Maneja dinámicamente:
// 1. Calcular tiempo total de experiencia
// 2. Agregar/eliminar detalles de experiencia por ocupación
// 3. Carga dinámica de países, departamentos y municipios
// 4. Previsualización

// =====================================================
// REFERENCIAS AL DOM
// =====================================================
const btnAgregarDetalle = document.getElementById("btnAgregarDetalle");
const tablaDetalleExp = document.querySelector("#tablaDetalleExp tbody");
const emptyDetalleExp = document.getElementById("emptyDetalleExp");
const btnPreview = document.getElementById("btnPreview");
const panelPreview = document.getElementById("previewTiempo");

// Campos de resumen (calculados automáticamente)
const tiempoPublicoField = document.getElementById("tiempoPublico");
const tiempoPrivadoField = document.getElementById("tiempoPrivado");
const tiempoIndependienteField = document.getElementById("tiempoIndependiente");
const tiempoTotalField = document.getElementById("tiempoTotal");

// Arreglos para almacenar datos
let experienciasLaboral = [];
let detallesExperiencia = [];

// =====================================================
// FUNCIÓN: Cargar experiencias del paso 3 y datos dinámicos
// =====================================================
function cargarExperienciasDelPaso3() {
  // Obtener experiencias guardadas en sessionStorage del paso 3
  const expGuardadas = sessionStorage.getItem("experienciasLaboral");
  if (expGuardadas) {
    experienciasLaboral = JSON.parse(expGuardadas);
    calcularTiempoTotal();
  }

  // ===================================================
  // CARGAR SELECTES DE PAÍS, DEPARTAMENTO Y MUNICIPIO
  // ===================================================
  // Los utilizamos en la sección "Detalle de Experiencia por Ocupación"
  // para permitir agregar registros con información geográfica específica

  // Listar países principales (similar a experiencia-laboral)
  const paisesDetalle = [
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

  // Nota: Si existieran selectes de país/depto/municipio en esta página,
  // aquí se cargarían. Por ahora, la funcionalidad está en experiencia-laboral.js
}


// =====================================================
// FUNCIÓN: Calcular tiempo en años y meses
// =====================================================
function calcularTiempoAñosMeses(fechaInicio, fechaFin) {
  const inicio = new Date(fechaInicio);
  const fin = fechaFin ? new Date(fechaFin) : new Date();

  let años = fin.getFullYear() - inicio.getFullYear();
  let meses = fin.getMonth() - inicio.getMonth();

  if (meses < 0) {
    años--;
    meses += 12;
  }

  return { años, meses };
}

// =====================================================
// FUNCIÓN: Calcular tiempo total desde experiencias
// =====================================================
function calcularTiempoTotal() {
  let tiempoPublico = { años: 0, meses: 0 };
  let tiempoPrivado = { años: 0, meses: 0 };
  let tiempoIndependiente = { años: 0, meses: 0 };

  // Recorrer experiencias del paso 3
  experienciasLaboral.forEach(function(exp) {
    const tiempo = calcularTiempoAñosMeses(exp.fechaIngreso, exp.fechaRetiro === "Actual" ? null : exp.fechaRetiro);

    if (exp.tipo === "Pública") {
      tiempoPublico.años += tiempo.años;
      tiempoPublico.meses += tiempo.meses;
    } else if (exp.tipo === "Privada") {
      tiempoPrivado.años += tiempo.años;
      tiempoPrivado.meses += tiempo.meses;
    } else if (exp.tipo === "Independiente") {
      tiempoIndependiente.años += tiempo.años;
      tiempoIndependiente.meses += tiempo.meses;
    }
  });

  // Normalizar meses (convertir 12 meses a 1 año)
  [tiempoPublico, tiempoPrivado, tiempoIndependiente].forEach(function(t) {
    t.años += Math.floor(t.meses / 12);
    t.meses = t.meses % 12;
  });

  // Calcular total
  const tiempoTotalAños = tiempoPublico.años + tiempoPrivado.años + tiempoIndependiente.años;
  const tiempoTotalMeses = tiempoPublico.meses + tiempoPrivado.meses + tiempoIndependiente.meses;
  let totalAños = tiempoTotalAños;
  let totalMeses = tiempoTotalMeses;
  if (totalMeses >= 12) {
    totalAños += Math.floor(totalMeses / 12);
    totalMeses = totalMeses % 12;
  }

  // Actualizar campos
  tiempoPublicoField.value = `${tiempoPublico.años} años, ${tiempoPublico.meses} meses`;
  tiempoPrivadoField.value = `${tiempoPrivado.años} años, ${tiempoPrivado.meses} meses`;
  tiempoIndependienteField.value = `${tiempoIndependiente.años} años, ${tiempoIndependiente.meses} meses`;
  tiempoTotalField.value = `${totalAños} años, ${totalMeses} meses`;

  // Actualizar previsualización
  document.getElementById("prevPublico").textContent = `${tiempoPublico.años} años, ${tiempoPublico.meses} meses`;
  document.getElementById("prevPrivado").textContent = `${tiempoPrivado.años} años, ${tiempoPrivado.meses} meses`;
  document.getElementById("prevIndep").textContent = `${tiempoIndependiente.años} años, ${tiempoIndependiente.meses} meses`;
  document.getElementById("prevTotal").textContent = `${totalAños} años, ${totalMeses} meses`;
}

// =====================================================
// FUNCIÓN: Agregar Detalle de Experiencia
// =====================================================
btnAgregarDetalle.addEventListener("click", function() {
  const ocupacion = document.getElementById("ocupacion").value.trim();
  const sector = document.getElementById("sectorDetalle").value;
  const empresa = document.getElementById("empresaDetalle").value.trim();
  const fechaInicio = document.getElementById("fechaInicioDetalle").value;
  const fechaFin = document.getElementById("fechaFinDetalle").value;

  // Obtener texto del sector
  const textoSector = document.getElementById("sectorDetalle").options[document.getElementById("sectorDetalle").selectedIndex].text;

  // Validar campos obligatorios
  if (!ocupacion || !sector || !empresa || !fechaInicio) {
    alert("⚠️ Complete todos los campos obligatorios del detalle.");
    return;
  }

  // Calcular tiempo
  const tiempo = calcularTiempoAñosMeses(fechaInicio, fechaFin);
  const tiempoTexto = `${tiempo.años} años, ${tiempo.meses} meses`;

  // Crear objeto de detalle
  const nuevoDetalle = {
    id: Date.now(),
    ocupacion: ocupacion,
    sector: textoSector,
    empresa: empresa,
    fechaInicio: fechaInicio,
    fechaFin: fechaFin || "Actual",
    tiempo: tiempoTexto
  };

  // Agregar al arreglo
  detallesExperiencia.push(nuevoDetalle);

  // Agregar fila a tabla
  agregarFilaDetalle(nuevoDetalle);

  // Limpiar campos
  document.getElementById("ocupacion").value = "";
  document.getElementById("sectorDetalle").value = "";
  document.getElementById("empresaDetalle").value = "";
  document.getElementById("fechaInicioDetalle").value = "";
  document.getElementById("fechaFinDetalle").value = "";
  document.getElementById("tiempoCalculado").value = "--";

  // Actualizar tabla
  actualizarTablaDetalles();
});

// =====================================================
// EVENTO: Calcular tiempo en tiempo real
// =====================================================
document.getElementById("fechaInicioDetalle").addEventListener("change", calcularTiempoDetalle);
document.getElementById("fechaFinDetalle").addEventListener("change", calcularTiempoDetalle);

function calcularTiempoDetalle() {
  const fechaInicio = document.getElementById("fechaInicioDetalle").value;
  if (!fechaInicio) return;

  const fechaFin = document.getElementById("fechaFinDetalle").value;
  const tiempo = calcularTiempoAñosMeses(fechaInicio, fechaFin);
  document.getElementById("tiempoCalculado").value = `${tiempo.años} años, ${tiempo.meses} meses`;
}

// =====================================================
// FUNCIÓN: Agregar fila a tabla de detalles
// =====================================================
function agregarFilaDetalle(detalle) {
  const fila = document.createElement("tr");
  fila.dataset.id = detalle.id;
  fila.innerHTML =
    `<td>${detallesExperiencia.length}</td>` +
    `<td>${detalle.ocupacion}</td>` +
    `<td>${detalle.empresa}</td>` +
    `<td>${detalle.sector}</td>` +
    `<td>${detalle.fechaInicio}</td>` +
    `<td>${detalle.fechaFin}</td>` +
    `<td>${detalle.tiempo}</td>` +
    `<td>
      <button type="button" class="btn btn-danger btn-sm btn-eliminar-detalle" data-id="${detalle.id}">
        🗑️ Eliminar
      </button>
    </td>`;

  tablaDetalleExp.appendChild(fila);
}

// =====================================================
// FUNCIÓN: Actualizar tabla de detalles
// =====================================================
function actualizarTablaDetalles() {
  emptyDetalleExp.style.display = detallesExperiencia.length === 0 ? "block" : "none";
  const filas = tablaDetalleExp.querySelectorAll("tr");
  filas.forEach((fila, index) => {
    fila.cells[0].textContent = index + 1;
  });
}

// =====================================================
// EVENTO: Eliminar detalle (delegación)
// =====================================================
tablaDetalleExp.addEventListener("click", function(e) {
  if (e.target.closest(".btn-eliminar-detalle")) {
    const id = parseInt(e.target.closest(".btn-eliminar-detalle").dataset.id);
    detallesExperiencia = detallesExperiencia.filter(d => d.id !== id);
    document.querySelector(`tr[data-id="${id}"]`).remove();
    actualizarTablaDetalles();
  }
});

// =====================================================
// PREVISUALIZACIÓN
// =====================================================
btnPreview.addEventListener("click", function() {
  panelPreview.classList.toggle("visible");
});

// =====================================================
// VALIDACIÓN ANTES DE AVANZAR AL PASO 5
// =====================================================
const btnSiguiente = document.querySelector(".form-actions .btn-primary");
btnSiguiente.addEventListener("click", function(e) {
  // Guardar detalles en sessionStorage para paso 5
  sessionStorage.setItem("tiempoExperiencia", tiempoTotalField.value);
  sessionStorage.setItem("detallesExperiencia", JSON.stringify(detallesExperiencia));

  alert("✅ Tiempo de experiencia registrado correctamente.\nContinuando al siguiente paso...");
  window.location.href = "certificacion.html";
});
