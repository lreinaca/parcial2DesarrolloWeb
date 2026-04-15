// =====================================================
// TIEMPO-EXPERIENCIA.JS — Paso 4: Tiempo de Experiencia
// =====================================================
// Maneja dinámicamente:
// 1. Calcular tiempo total de experiencia
// 2. Previsualización

// =====================================================
// REFERENCIAS AL DOM
// =====================================================
const btnPreview = document.getElementById("btnPreview");
const panelPreview = document.getElementById("previewTiempo");

// Campos de resumen (calculados automáticamente)
const tiempoPublicoField = document.getElementById("tiempoPublico");
const tiempoPrivadoField = document.getElementById("tiempoPrivado");
const tiempoIndependienteField = document.getElementById("tiempoIndependiente");
const tiempoTotalField = document.getElementById("tiempoTotal");

// Arreglos para almacenar datos
let experienciasLaboral = [];

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
}

// Ejecutar al cargar la página
window.addEventListener("load", cargarExperienciasDelPaso3);


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
// PREVISUALIZACIÓN: llenar datos
// =====================================================
function llenarPreview() {
  calcularTiempoTotal();
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
  sessionStorage.setItem("tiempoExperiencia", tiempoTotalField.value);
  window.location.href = "certificacion.html";
});

// =====================================================
// BOTÓN SIGUIENTE: validar → alert → previsualización
// =====================================================
const btnSiguiente = document.getElementById("btnSiguiente");
btnSiguiente.addEventListener("click", function() {
  alert("A continuación se mostrará la previsualización de sus datos.\nPor favor verifique que la información sea correcta antes de continuar a la siguiente sección.");
  llenarPreview();
  panelPreview.classList.add("visible");
  panelPreview.scrollIntoView({ behavior: "smooth", block: "center" });
});
