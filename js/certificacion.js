// =====================================================
// CERTIFICACION.JS — Paso 5: Certificación y Envío Final
// =====================================================
// Maneja:
// 1. Validación de las dos preguntas obligatorias
// 2. Previsualización del resumen
// 3. Envío final del formulario

// =====================================================
// REFERENCIAS AL DOM
// =====================================================
const formCertificacion = document.getElementById("formCertificacion");
const btnPreview = document.getElementById("btnPreview");
const panelPreview = document.getElementById("previewResumen");
const radiosVeridicos = document.querySelectorAll('input[name="datosVeridicos"]');
const radiosInhabilitado = document.querySelectorAll('input[name="inhabilitado"]');

// =====================================================
// LLENAR PREVISUALIZACIÓN CON DATOS GUARDADOS
// =====================================================
window.addEventListener("load", function() {
  // Aquí idealmente traerías los datos de sessionStorage o localStorage
  // Para este MVP, mostraremos un resumen genérico
  // En una aplicación real se guardarían todos los datos en sessionStorage

  llenarPreviewResumen();
});

// =====================================================
// FUNCIÓN: Llenar panel de previsualización
// =====================================================
function llenarPreviewResumen() {
  document.getElementById("resNombre").textContent = "---";
  document.getElementById("resDocumento").textContent = "---";
  document.getElementById("resEstudios").textContent = "0";
  document.getElementById("resExperiencias").textContent = "0";
  document.getElementById("resTotalExp").textContent = sessionStorage.getItem("tiempoExperiencia") || "0 años, 0 meses";
  document.getElementById("resEstado").textContent = "Diligenciada";
}

// =====================================================
// FUNCIÓN: Mostrar/Ocultar previsualización
// =====================================================
btnPreview.addEventListener("click", function() {
  llenarPreviewResumen();
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
  if (!validarFormularioCertificacion()) {
    panelPreview.classList.remove("visible");
    return;
  }

  alert("✅ ¡Hoja de Vida enviada correctamente!\n\nLa información ha sido registrada en el sistema.\nEl administrador revisará su solicitud pronto.\n\nEstado: Diligenciada ⏳");
  sessionStorage.clear();
  window.location.href = "index.html";
});

// =====================================================
// VALIDACIÓN DE PREGUNTAS OBLIGATORIAS
// =====================================================
const grupoVeridicos = document.querySelector('input[name="datosVeridicos"]').closest(".form-group");
const errorVeridicos = grupoVeridicos.querySelector(".error-msg");
const grupoInhabilitado = document.querySelector('input[name="inhabilitado"]').closest(".form-group");
const errorInhabilitado = grupoInhabilitado.querySelector(".error-msg");

// =====================================================
// FUNCIÓN: Validar formulario
// =====================================================
function validarFormularioCertificacion() {
  let esValido = true;

  // Validar pregunta 1: ¿Los datos son verídicos?
  const veridicos = document.querySelector('input[name="datosVeridicos"]:checked');
  if (!veridicos) {
    errorVeridicos.style.display = "block";
    esValido = false;
  } else {
    errorVeridicos.style.display = "none";
    // IMPORTANTE: Si responde "No", no permitir envío
    if (veridicos.value === "no") {
      alert("❌ No puede continuar. Debe confirmar que los datos son verídicos.");
      return false;
    }
  }

  // Validar pregunta 2: ¿Está inhabilitado?
  const inhabilitado = document.querySelector('input[name="inhabilitado"]:checked');
  if (!inhabilitado) {
    errorInhabilitado.style.display = "block";
    esValido = false;
  } else {
    errorInhabilitado.style.display = "none";
    // IMPORTANTE: Si responde "Sí" (está inhabilitado), no permitir envío
    if (inhabilitado.value === "si") {
      alert("❌ No puede continuar. No puede estar inhabilitado(a).");
      return false;
    }
  }

  return esValido;
}

// =====================================================
// LIMPIAR ERRORES AL SELECCIONAR OPCIONES
// =====================================================
radiosVeridicos.forEach(function(radio) {
  radio.addEventListener("change", function() {
    errorVeridicos.style.display = "none";
  });
});

radiosInhabilitado.forEach(function(radio) {
  radio.addEventListener("change", function() {
    errorInhabilitado.style.display = "none";
  });
});

// =====================================================
// ENVÍO DEL FORMULARIO
// =====================================================
const btnEnviar = document.querySelector('button[type="submit"]');

btnEnviar.addEventListener("click", function(e) {
  e.preventDefault();

  // Validar antes de mostrar previsualización
  if (!validarFormularioCertificacion()) {
    return;
  }

  // Si las validaciones pasaron, mostrar previsualización
  alert("A continuación se mostrará la previsualización de sus datos.\nPor favor verifique que la información sea correcta antes de enviar.");
  llenarPreviewResumen();
  panelPreview.classList.add("visible");
  panelPreview.scrollIntoView({ behavior: "smooth", block: "center" });
});

// =====================================================
// PRECARGAR ESTADO DE LA HOJA DE VIDA
// =====================================================
// En una aplicación real, aquí consultarías la BD/API
// para saber el estado actual de la hoja de vida
window.addEventListener("load", function() {
  // Por ahora, mostrar estado por defecto
  const estadoBadge = document.getElementById("estadoHV");
  estadoBadge.textContent = "⏳ Diligenciada";
  estadoBadge.className = "badge badge-warning";
});

// =====================================================
// LISTENERS PARA LIMPIAR ERRORES
// =====================================================
radiosVeridicos.forEach(function(radio) {
  radio.addEventListener("change", function() {
    // Validar que sea "sí" inmediatamente
    if (this.value === "no") {
      this.checked = false;
      alert("❌ Debe confirmar que los datos son verídicos para continuar.");
    }
  });
});

radiosInhabilitado.forEach(function(radio) {
  radio.addEventListener("change", function() {
    // Validar que sea "no" inmediatamente
    if (this.value === "si") {
      this.checked = false;
      alert("❌ No puede estar inhabilitado(a) para continuar.");
    }
  });
});
