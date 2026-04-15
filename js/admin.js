// =====================================================
// ARREGLO DE HOJAS DE VIDA POR DEFECTO
// =====================================================
const hojasDeVida = [
  {
    id: 1,
    usuario: "jgarcia",
    primerNombre: "Juan",
    segundoNombre: "Carlos",
    primerApellido: "García",
    segundoApellido: "López",
    tipoDocumento: "Cédula de ciudadania",
    numeroDocumento: "1234567890",
    sexo: "Masculino",
    fechaNacimiento: "1990-05-15",
    nacionalidad: "Colombiana",
    email: "juan.garcia@email.com",
    celular: "3001234567",
    direccion: "Calle 123 #45-67, Bogotá",
    paisNacimiento: "Colombia",
    departamentoNac: "Bogotá D.C.",
    municipioNac: "Suba",
    departamentoCorr: "Bogotá D.C.",
    municipioCorr: "Chapinero",
    estudio: "Ing. de Sistemas - Universidad Nacional",
    totalEstudios: 2,
    idiomas: "Inglés (Bien), Francés (Regular)",
    totalExperiencias: 3,
    tiempoTotal: "5 años, 3 meses",
    fechaDiligenciamiento: "2026-04-01",
    estado: "diligenciada"
  },
  {
    id: 2,
    usuario: "mrodriguez",
    primerNombre: "María",
    segundoNombre: "Fernanda",
    primerApellido: "Rodríguez",
    segundoApellido: "Pérez",
    tipoDocumento: "Cédula de ciudadania",
    numeroDocumento: "9876543210",
    sexo: "Femenino",
    fechaNacimiento: "1988-11-22",
    nacionalidad: "Colombiana",
    email: "maria.rod@email.com",
    celular: "3109876543",
    direccion: "Carrera 7 #80-12, Medellín",
    paisNacimiento: "Colombia",
    departamentoNac: "Antioquia",
    municipioNac: "Medellín",
    departamentoCorr: "Antioquia",
    municipioCorr: "Envigado",
    estudio: "Contaduría Pública - Universidad de Antioquia",
    totalEstudios: 3,
    idiomas: "Inglés (Muy Bien)",
    totalExperiencias: 5,
    tiempoTotal: "8 años, 1 mes",
    fechaDiligenciamiento: "2026-03-28",
    estado: "aceptada"
  },
  {
    id: 3,
    usuario: "cmartinez",
    primerNombre: "Carlos",
    segundoNombre: "Andrés",
    primerApellido: "Martínez",
    segundoApellido: "Rivera",
    tipoDocumento: "Cédula de ciudadania",
    numeroDocumento: "5566778899",
    sexo: "Masculino",
    fechaNacimiento: "1995-03-10",
    nacionalidad: "Colombiana",
    email: "carlos.m@email.com",
    celular: "3205566778",
    direccion: "Av. 6N #23-45, Cali",
    paisNacimiento: "Colombia",
    departamentoNac: "Valle del Cauca",
    municipioNac: "Cali",
    departamentoCorr: "Valle del Cauca",
    municipioCorr: "Palmira",
    estudio: "Derecho - Universidad del Valle",
    totalEstudios: 1,
    idiomas: "Inglés (Regular)",
    totalExperiencias: 1,
    tiempoTotal: "1 año, 6 meses",
    fechaDiligenciamiento: "2026-03-25",
    estado: "rechazada"
  },
  {
    id: 4,
    usuario: "ltorres",
    primerNombre: "Laura",
    segundoNombre: "Sofía",
    primerApellido: "Torres",
    segundoApellido: "Gómez",
    tipoDocumento: "Cédula de extranjeria",
    numeroDocumento: "E-112233445",
    sexo: "Femenino",
    fechaNacimiento: "1992-08-04",
    nacionalidad: "Extranjera - Venezuela",
    email: "laura.torres@email.com",
    celular: "3158899001",
    direccion: "Calle 50 #10-30, Barranquilla",
    paisNacimiento: "Venezuela",
    departamentoNac: "---",
    municipioNac: "---",
    departamentoCorr: "Atlántico",
    municipioCorr: "Barranquilla",
    estudio: "Medicina - Universidad Central de Venezuela",
    totalEstudios: 2,
    idiomas: "Inglés (Bien), Portugués (Regular)",
    totalExperiencias: 4,
    tiempoTotal: "6 años, 9 meses",
    fechaDiligenciamiento: "2026-04-05",
    estado: "diligenciada"
  }
];

// =====================================================
// REFERENCIAS A ELEMENTOS DEL DOM
// =====================================================
const tbody = document.querySelector("#tablaHojasVida tbody");
const contadorTotal = document.getElementById("contadorTotal");
const inputBuscar = document.getElementById("buscarHV");
const panelDetalle = document.getElementById("panelDetalleHV");

// =====================================================
// FUNCIÓN: obtener clase y texto del badge según estado
// =====================================================
function badgeEstado(estado) {
  if (estado === "diligenciada") return '<span class="badge badge-warning">⏳ Diligenciada</span>';
  if (estado === "aceptada") return '<span class="badge badge-success">✅ Aceptada</span>';
  if (estado === "rechazada") return '<span class="badge badge-error">❌ Rechazada</span>';
  return '<span class="badge badge-info">Desconocido</span>';
}

// =====================================================
// FUNCIÓN: nombre completo de una hoja de vida
// =====================================================
function nombreCompleto(hv) {
  return [hv.primerApellido, hv.segundoApellido, hv.primerNombre, hv.segundoNombre]
    .filter(function(v) { return v && v.trim() !== ""; }).join(" ");
}

// =====================================================
// FUNCIÓN: renderizar la tabla con el arreglo (filtrado o completo)
// =====================================================
function renderTabla(lista) {
  tbody.innerHTML = "";
  lista.forEach(function(hv, index) {
    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + (index + 1) + "</td>" +
      "<td>" + hv.usuario + "</td>" +
      "<td>" + nombreCompleto(hv) + "</td>" +
      "<td>" + hv.tipoDocumento.split(" ")[0] + " " + hv.numeroDocumento + "</td>" +
      "<td>" + hv.email + "</td>" +
      "<td>" + hv.fechaDiligenciamiento + "</td>" +
      "<td>" + badgeEstado(hv.estado) + "</td>" +
      '<td><div class="actions-cell">' +
        '<button type="button" class="btn btn-primary btn-sm btn-ver" data-id="' + hv.id + '">Ver</button>' +
        '<button type="button" class="btn btn-secondary btn-sm btn-estado" data-id="' + hv.id + '">Cambiar Estado</button>' +
      '</div></td>';
    tbody.appendChild(tr);
  });
  contadorTotal.textContent = "Total: " + lista.length + " hojas de vida";
}

// =====================================================
// FUNCIÓN: mostrar detalle de una hoja de vida
// =====================================================
function mostrarDetalle(hv) {
  document.getElementById("detNombre").textContent = nombreCompleto(hv);
  document.getElementById("detDocumento").textContent = hv.tipoDocumento + " " + hv.numeroDocumento;
  document.getElementById("detSexo").textContent = hv.sexo;
  document.getElementById("detFechaNac").textContent = hv.fechaNacimiento;
  document.getElementById("detNacionalidad").textContent = hv.nacionalidad;
  document.getElementById("detEmail").textContent = hv.email;
  document.getElementById("detCelular").textContent = hv.celular;
  document.getElementById("detDireccion").textContent = hv.direccion;
  document.getElementById("detEstudio").textContent = hv.estudio;
  document.getElementById("detTotalEst").textContent = hv.totalEstudios;
  document.getElementById("detIdiomas").textContent = hv.idiomas;
  document.getElementById("detTotalExp").textContent = hv.totalExperiencias;
  document.getElementById("detTiempoTotal").textContent = hv.tiempoTotal;

  // Seleccionar el estado actual en el <select>
  document.getElementById("nuevoEstado").value = hv.estado;
  document.getElementById("observaciones").value = "";

  // Mostrar el panel y hacer scroll
  panelDetalle.classList.remove("hidden");
  panelDetalle.scrollIntoView({ behavior: "smooth", block: "start" });

  // Guardar referencia a la hoja actual para cambiar estado
  panelDetalle.dataset.hvId = hv.id;
}

// =====================================================
// RENDERIZAR LA TABLA AL CARGAR LA PÁGINA
// =====================================================
renderTabla(hojasDeVida);

// =====================================================
// EVENTOS: clic en botones "Ver" y "Cambiar Estado" (delegación)
// =====================================================
tbody.addEventListener("click", function(e) {
  var boton = e.target;

  if (boton.classList.contains("btn-ver") || boton.classList.contains("btn-estado")) {
    var id = parseInt(boton.dataset.id);
    var hv = hojasDeVida.find(function(h) { return h.id === id; });
    if (hv) mostrarDetalle(hv);
  }
});

// =====================================================
// EVENTO: guardar cambio de estado
// =====================================================
var btnGuardar = document.getElementById("btnGuardarEstado");
btnGuardar.addEventListener("click", function() {
  var id = parseInt(panelDetalle.dataset.hvId);
  var nuevoEstado = document.getElementById("nuevoEstado").value;

  if (!nuevoEstado) {
    alert("Seleccione un estado antes de guardar.");
    return;
  }

  // Buscar y actualizar el estado en el arreglo
  var hv = hojasDeVida.find(function(h) { return h.id === id; });
  if (hv) {
    hv.estado = nuevoEstado;
    renderTabla(hojasDeVida);
    alert("Estado actualizado a: " + nuevoEstado.charAt(0).toUpperCase() + nuevoEstado.slice(1));
  }
});

// =====================================================
// EVENTO: cerrar panel de detalle
// =====================================================
var btnCerrar = document.getElementById("btnCerrarDetalle");
btnCerrar.addEventListener("click", function() {
  panelDetalle.classList.add("hidden");
  document.querySelector("#tablaHojasVida").scrollIntoView({ behavior: "smooth", block: "start" });
});

// =====================================================
// FILTRO COMBINADO: por estado + por texto de búsqueda
// =====================================================
var filtroEstadoActual = "todas"; // Estado activo del filtro

// Función que aplica ambos filtros (estado + texto) y re-renderiza
function aplicarFiltros() {
  var texto = inputBuscar ? inputBuscar.value.toLowerCase().trim() : "";
  var filtradas = hojasDeVida.filter(function(hv) {
    // Filtro por estado
    var coincideEstado = filtroEstadoActual === "todas" || hv.estado === filtroEstadoActual;
    // Filtro por texto
    var coincideTexto = texto === "" ||
      nombreCompleto(hv).toLowerCase().indexOf(texto) !== -1 ||
      hv.numeroDocumento.toLowerCase().indexOf(texto) !== -1 ||
      hv.email.toLowerCase().indexOf(texto) !== -1;
    return coincideEstado && coincideTexto;
  });
  renderTabla(filtradas);
}

// Botones de filtro por estado
var botonesFiltr = document.querySelectorAll(".filter-btn");
botonesFiltr.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // Alternar clase .active
    botonesFiltr.forEach(function(b) { b.classList.remove("active"); });
    this.classList.add("active");
    // Actualizar filtro y re-renderizar
    filtroEstadoActual = this.dataset.filter;
    aplicarFiltros();
  });
});

// Buscar por texto (combinado con el filtro de estado)
if (inputBuscar) {
  inputBuscar.addEventListener("input", function() {
    aplicarFiltros();
  });
}
