// =====================================================
// ARREGLOS
// =====================================================
// Cada elemento tiene: valor (value del option) y nombre (texto visible)
const paises = [
  { valor: "afghanistan", nombre: "Afganistán" },
  { valor: "alemania", nombre: "Alemania" },
  { valor: "argentina", nombre: "Argentina" },
  { valor: "australia", nombre: "Australia" },
  { valor: "bolivia", nombre: "Bolivia" },
  { valor: "brasil", nombre: "Brasil" },
  { valor: "canada", nombre: "Canadá" },
  { valor: "chile", nombre: "Chile" },
  { valor: "china", nombre: "China" },
  { valor: "corea_del_sur", nombre: "Corea del Sur" },
  { valor: "costa_rica", nombre: "Costa Rica" },
  { valor: "cuba", nombre: "Cuba" },
  { valor: "ecuador", nombre: "Ecuador" },
  { valor: "egipto", nombre: "Egipto" },
  { valor: "el_salvador", nombre: "El Salvador" },
  { valor: "espana", nombre: "España" },
  { valor: "estados_unidos", nombre: "Estados Unidos" },
  { valor: "francia", nombre: "Francia" },
  { valor: "guatemala", nombre: "Guatemala" },
  { valor: "haiti", nombre: "Haití" },
  { valor: "honduras", nombre: "Honduras" },
  { valor: "india", nombre: "India" },
  { valor: "italia", nombre: "Italia" },
  { valor: "japon", nombre: "Japón" },
  { valor: "mexico", nombre: "México" },
  { valor: "nicaragua", nombre: "Nicaragua" },
  { valor: "panama", nombre: "Panamá" },
  { valor: "paraguay", nombre: "Paraguay" },
  { valor: "peru", nombre: "Perú" },
  { valor: "portugal", nombre: "Portugal" },
  { valor: "puerto_rico", nombre: "Puerto Rico" },
  { valor: "reino_unido", nombre: "Reino Unido" },
  { valor: "republica_dominicana", nombre: "República Dominicana" },
  { valor: "rusia", nombre: "Rusia" },
  { valor: "uruguay", nombre: "Uruguay" },
  { valor: "venezuela", nombre: "Venezuela" }
];

const departamentos = [
  { valor: "amazonas", nombre: "Amazonas" },
  { valor: "antioquia", nombre: "Antioquia" },
  { valor: "arauca", nombre: "Arauca" },
  { valor: "atlantico", nombre: "Atlántico" },
  { valor: "bolivar", nombre: "Bolívar" },
  { valor: "boyaca", nombre: "Boyacá" },
  { valor: "caldas", nombre: "Caldas" },
  { valor: "caqueta", nombre: "Caquetá" },
  { valor: "casanare", nombre: "Casanare" },
  { valor: "cauca", nombre: "Cauca" },
  { valor: "cesar", nombre: "Cesar" },
  { valor: "choco", nombre: "Chocó" },
  { valor: "cordoba", nombre: "Córdoba" },
  { valor: "cundinamarca", nombre: "Cundinamarca" },
  { valor: "guainia", nombre: "Guainía" },
  { valor: "guaviare", nombre: "Guaviare" },
  { valor: "huila", nombre: "Huila" },
  { valor: "laguajira", nombre: "La Guajira" },
  { valor: "magdalena", nombre: "Magdalena" },
  { valor: "meta", nombre: "Meta" },
  { valor: "narino", nombre: "Nariño" },
  { valor: "nortedesantander", nombre: "Norte de Santander" },
  { valor: "putumayo", nombre: "Putumayo" },
  { valor: "quindio", nombre: "Quindío" },
  { valor: "risaralda", nombre: "Risaralda" },
  { valor: "sanandres", nombre: "San Andrés y Providencia" },
  { valor: "santander", nombre: "Santander" },
  { valor: "sucre", nombre: "Sucre" },
  { valor: "tolima", nombre: "Tolima" },
  { valor: "valledelcauca", nombre: "Valle del Cauca" },
  { valor: "vaupes", nombre: "Vaupés" },
  { valor: "vichada", nombre: "Vichada" },
  { valor: "bogota", nombre: "Bogotá D.C." }
];

// Municipios por departamento (5 por cada uno)
const municipios = {
  amazonas: ["Leticia", "Puerto Nariño", "La Chorrera", "Tarapacá", "La Pedrera"],
  antioquia: ["Medellín", "Bello", "Envigado", "Itagüí", "Rionegro"],
  arauca: ["Arauca", "Tame", "Saravena", "Fortul", "Arauquita"],
  atlantico: ["Barranquilla", "Soledad", "Malambo", "Sabanalarga", "Galapa"],
  bolivar: ["Cartagena", "Magangué", "Turbaco", "Arjona", "El Carmen de Bolívar"],
  boyaca: ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá", "Paipa"],
  caldas: ["Manizales", "Villamaría", "La Dorada", "Chinchiná", "Anserma"],
  caqueta: ["Florencia", "San Vicente del Caguán", "El Doncello", "Puerto Rico", "Belén de los Andaquíes"],
  casanare: ["Yopal", "Aguazul", "Villanueva", "Tauramena", "Paz de Ariporo"],
  cauca: ["Popayán", "Santander de Quilichao", "Puerto Tejada", "Piendamó", "El Tambo"],
  cesar: ["Valledupar", "Aguachica", "Codazzi", "Bosconia", "La Jagua de Ibirico"],
  choco: ["Quibdó", "Istmina", "Tadó", "Condoto", "Bahía Solano"],
  cordoba: ["Montería", "Cereté", "Lorica", "Sahagún", "Planeta Rica"],
  cundinamarca: ["Zipaquirá", "Facatativá", "Chía", "Fusagasugá", "Girardot"],
  guainia: ["Inírida", "Barrancominas", "San Felipe", "Puerto Colombia", "Cacahual"],
  guaviare: ["San José del Guaviare", "Calamar", "El Retorno", "Miraflores", "Morichal"],
  huila: ["Neiva", "Pitalito", "Garzón", "La Plata", "Campoalegre"],
  laguajira: ["Riohacha", "Maicao", "Uribia", "Manaure", "San Juan del Cesar"],
  magdalena: ["Santa Marta", "Ciénaga", "Fundación", "El Banco", "Plato"],
  meta: ["Villavicencio", "Acacías", "Granada", "Puerto López", "San Martín"],
  narino: ["Pasto", "Tumaco", "Ipiales", "Túquerres", "La Unión"],
  nortedesantander: ["Cúcuta", "Ocaña", "Pamplona", "Los Patios", "Villa del Rosario"],
  putumayo: ["Mocoa", "Puerto Asís", "Orito", "Valle del Guamuez", "Villagarzón"],
  quindio: ["Armenia", "Calarcá", "Montenegro", "La Tebaida", "Circasia"],
  risaralda: ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia", "Marsella"],
  sanandres: ["San Andrés", "Providencia", "Santa Catalina", "La Loma", "San Luis"],
  santander: ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barrancabermeja"],
  sucre: ["Sincelejo", "Corozal", "San Marcos", "Tolú", "Sampués"],
  tolima: ["Ibagué", "Espinal", "Melgar", "Honda", "Líbano"],
  valledelcauca: ["Cali", "Buenaventura", "Palmira", "Tuluá", "Cartago"],
  vaupes: ["Mitú", "Carurú", "Taraira", "Papunaua", "Yavaraté"],
  vichada: ["Puerto Carreño", "Cumaribo", "La Primavera", "Santa Rosalía", "San José de Ocuné"],
  bogota: ["Usaquén", "Chapinero", "Santa Fe", "Kennedy", "Suba"]
};

const tipo_docs = [
  { valor: "cedula_ciudadania", nombre: "Cédula de ciudadania"},
  { valor: "cedula_cextranjeria", nombre: "Cédula de extranjeria"},
  { valor: "pasaporte", nombre: "Pasaporte"}
];

const listaSexo = [
  { valor: "femenino", nombre: "Femenino"},
  { valor: "masculino", nombre: "Masculino"}
];

const listaDistritos = [
  { valor: "1", nombre: "Distrito 1 - Bogotá"},
  { valor: "2", nombre: "Distrito 2 - Tunja"},
  { valor: "3", nombre: "Distrito 3 - Sogamoso" },
  { valor: "4", nombre: "Distrito 4 - Bucaramanga" },
  { valor: "5", nombre: "Distrito 5 - Cúcuta" },
  { valor: "6", nombre: "Distrito 6 - Medellín" },
  { valor: "7", nombre: "Distrito 7 - Manizales" },
  { valor: "8", nombre: "Distrito 8 - Pereira" },
  { valor: "9", nombre: "Distrito 9 - Neiva" },
  { valor: "10", nombre: "Distrito 10 - Ibagué" },
  { valor: "11", nombre: "Distrito 11 - Cali" },
  { valor: "12", nombre: "Distrito 12 - Popayán" },
  { valor: "13", nombre: "Distrito 13 - Pasto" },
  { valor: "14", nombre: "Distrito 14 - Barranquilla" },
  { valor: "15", nombre: "Distrito 15 - Cartagena" },
  { valor: "16", nombre: "Distrito 16 - Santa Marta" },
  { valor: "17", nombre: "Distrito 17 - Montería" },
  { valor: "18", nombre: "Distrito 18 - Villavicencio" },
  { valor: "19", nombre: "Distrito 19 - Florencia" },
  { valor: "20", nombre: "Distrito 20 - Quibdó" }
]

const listaClaseLibr = [
  { valor: "primera", nombre: "Primera" },
  { valor: "segunda", nombre: "Segunda" }
  ]

// Referencia al <select>
const selectPais = document.getElementById("paisExtranjero");
const selectDoc = document.getElementById("tipoDocumento")
const selectSexo = document.getElementById("sexo")
const selectDistrito = document.getElementById("distritoMilitar")
const selectClaseLibr = document.getElementById("claseLibreta")
const selectPaisNac = document.getElementById("paisNacimiento")
const selectDeptoNac = document.getElementById("departamentoNacimiento")
const selectMunicipioNac = document.getElementById("municipioNacimiento")
const selectDeptoCorre = document.getElementById("departamentoCorrespondencia")
const selectMunicipioCorr = document.getElementById("municipioCorrespondencia")


// Recorrer el arreglo y crear un <option> por cada país
paises.forEach(function(pais) {
  const option = document.createElement("option"); // Crear elemento <option>
  option.value = pais.valor;   // Asignar el value (ej: "mexico")
  option.textContent = pais.nombre; // Asignar el texto visible (ej: "México")
  selectPais.appendChild(option);   // Agregarlo al <select>
});

// Recorrer el arreglo y crear un <option> por tipo de documento
tipo_docs.forEach(function(tipoDocumento) {
  const option = document.createElement("option"); // Crear elemento <option>
  option.value = tipoDocumento.valor; 
  option.textContent = tipoDocumento.nombre; 
  selectDoc.appendChild(option);   // Agregarlo al <select>
});

// Recorrer el arreglo y crear un <option> por sexo
listaSexo.forEach(function(sexo) {
  const option = document.createElement("option"); // Crear elemento <option>
  option.value = sexo.valor; 
  option.textContent = sexo.nombre; 
  selectSexo.appendChild(option);   // Agregarlo al <select>
});

// Recorrer el arreglo y crear un <option> por cada distrito militar 
listaDistritos.forEach(function(distritoMilitar){
  const option = document.createElement("option"); // Crear elemento <option>
  option.value = distritoMilitar.valor; // Asignar el value al option por cada distrito
  option.textContent = distritoMilitar.nombre; // Asignar el texto visible
  selectDistrito.appendChild(option) // Agregarlo al <select>
}
)

// Recorrer el arreglo y crear un <option> por cada tipo de libreta 
listaClaseLibr.forEach(function(claseLibreta){
  const option = document.createElement("option"); // Crear elemento <option>
  option.value = claseLibreta.valor; // Asignar el value al option por cada tipo de libreta
  option.textContent = claseLibreta.nombre; // Asignar el texto visible
  selectClaseLibr.appendChild(option) // Agregarlo al <select>
})

// Cargar dinámicamente el <select> de País de Nacimiento
// Se agrega Colombia primero (ya que es el valor por defecto) y luego todos los países del arreglo
const optionColombia = document.createElement("option");
optionColombia.value = "colombia";
optionColombia.textContent = "Colombia";
optionColombia.selected = true; // Seleccionado por defecto
selectPaisNac.appendChild(optionColombia);

paises.forEach(function(pais) {
  const option = document.createElement("option");
  option.value = pais.valor;
  option.textContent = pais.nombre;
  selectPaisNac.appendChild(option);
});

// Cargar dinámicamente el <select> de Departamento de Nacimiento
departamentos.forEach(function(depto) {
  const option = document.createElement("option");
  option.value = depto.valor;
  option.textContent = depto.nombre;
  selectDeptoNac.appendChild(option);
});

// Cargar dinámicamente el <select> de Departamento de Correspondencia (solo Colombia)
departamentos.forEach(function(depto) {
  const option = document.createElement("option");
  option.value = depto.valor;
  option.textContent = depto.nombre;
  selectDeptoCorre.appendChild(option);
});

// Cuando cambia el departamento de correspondencia, cargar sus municipios
selectDeptoCorre.addEventListener("change", function() {
  cargarMunicipios(selectMunicipioCorr, this.value);
});

// =====================================================
// TIPO DE DOCUMENTO → NACIONALIDAD AUTOMÁTICA
// =====================================================
// Si elige "Cédula de ciudadanía" → nacionalidad Colombiana (no editable)
// Si elige otro documento → nacionalidad Extranjera (no editable)
const selectNacionalidad = document.getElementById("nacionalidad");

selectDoc.addEventListener("change", function() {
  if (this.value === "cedula_ciudadania") {
    // Cédula de ciudadanía = Colombiana obligatoriamente
    selectNacionalidad.value = "colombiana";
    selectNacionalidad.disabled = true;
  } else if (this.value !== "") {
    // Cédula de extranjería o Pasaporte = Extranjera obligatoriamente
    selectNacionalidad.value = "extranjera";
    selectNacionalidad.disabled = true;
  } else {
    // No ha seleccionado tipo de documento, habilitar nacionalidad
    selectNacionalidad.value = "";
    selectNacionalidad.disabled = false;
  }
  // Disparar el evento "change" de nacionalidad para ejecutar su lógica
  // (mostrar/ocultar país extranjero, sincronizar departamentos, etc.)
  selectNacionalidad.dispatchEvent(new Event("change"));
});

// =====================================================
// CARGAR MUNICIPIOS según el departamento seleccionado
// =====================================================
// Función reutilizable que limpia un <select> y carga nuevos municipios
function cargarMunicipios(selectMunicipio, departamentoValor) {
  // Limpiar opciones anteriores (dejar solo el placeholder)
  selectMunicipio.innerHTML = '<option value="">-- Seleccione --</option>';
  // Buscar los municipios del departamento en el objeto municipios
  const listaMunicipios = municipios[departamentoValor];
  if (listaMunicipios) {
    listaMunicipios.forEach(function(nombre) {
      const option = document.createElement("option");
      option.value = nombre.toLowerCase().replace(/ /g, "_");
      option.textContent = nombre;
      selectMunicipio.appendChild(option);
    });
  }
}

// Cuando cambia el departamento de nacimiento, cargar sus municipios
selectDeptoNac.addEventListener("change", function() {
  cargarMunicipios(selectMunicipioNac, this.value);
});

// =====================================================
// MOSTRAR/OCULTAR el campo País cuando se elige
// "Extranjera" en el select de Nacionalidad
// + SINCRONIZAR con el <select> de País de Nacimiento
// =====================================================
// selectNacionalidad ya fue declarado arriba (sección Tipo de Documento)
const grupoPais = document.getElementById("grupoPaisExtranjero");
// selectPaisNac ya fue declarado arriba junto con las demás referencias

// Escuchar cada vez que cambia la selección de nacionalidad
selectNacionalidad.addEventListener("change", function() {
  if (this.value === "extranjera") {
    // Si eligió "Extranjera", mostrar el campo de país (quitar clase .hidden)
    grupoPais.classList.remove("hidden");
    // Sincronizar país de nacimiento con el país extranjero seleccionado
    selectPaisNac.value = selectPais.value;
    selectPaisNac.disabled = true; // No editable, se sincroniza con país extranjero
    // Ocultar departamento y municipio (no aplica para extranjeros)
    document.getElementById("grupoDeptoNac").classList.add("hidden");
    document.getElementById("grupoMuniNac").classList.add("hidden");
    selectDeptoNac.innerHTML = '<option value="">-- Seleccione --</option>';
    selectMunicipioNac.innerHTML = '<option value="">-- Seleccione --</option>';
  } else if (this.value === "colombiana") {
    // Si eligió "Colombiana", ocultar campo país extranjero y limpiar
    grupoPais.classList.add("hidden");
    selectPais.value = "";
    // Establecer automáticamente Colombia como país de nacimiento (no editable)
    selectPaisNac.value = "colombia";
    selectPaisNac.disabled = true;
    // Mostrar departamento y municipio (aplica para colombianos)
    document.getElementById("grupoDeptoNac").classList.remove("hidden");
    document.getElementById("grupoMuniNac").classList.remove("hidden");
    // Recargar los departamentos de Colombia
    selectDeptoNac.innerHTML = '<option value="">-- Seleccione --</option>';
    departamentos.forEach(function(depto) {
      const option = document.createElement("option");
      option.value = depto.valor;
      option.textContent = depto.nombre;
      selectDeptoNac.appendChild(option);
    });
    // Limpiar municipio (se cargará al seleccionar departamento)
    selectMunicipioNac.innerHTML = '<option value="">-- Seleccione --</option>';
  } else {
    // Si no seleccionó nada, ocultar y limpiar
    grupoPais.classList.add("hidden");
    selectPais.value = "";
    selectPaisNac.value = "";
    selectPaisNac.disabled = false; // Habilitar si no hay nacionalidad seleccionada
    // Mostrar departamento y municipio por defecto
    document.getElementById("grupoDeptoNac").classList.remove("hidden");
    document.getElementById("grupoMuniNac").classList.remove("hidden");
    selectDeptoNac.innerHTML = '<option value="">-- Seleccione --</option>';
    selectMunicipioNac.innerHTML = '<option value="">-- Seleccione --</option>';
  }
});

// Cuando cambia el país extranjero, sincronizar con país de nacimiento
selectPais.addEventListener("change", function() {
  selectPaisNac.value = this.value;
});

// =====================================================
// FECHA DE NACIMIENTO: restricción de mayor de edad (18+)
// =====================================================
const inputFechaNac = document.getElementById("fechaNacimiento");
// Calcular la fecha máxima permitida (hoy menos 18 años)
const hoy = new Date();
const fechaMaxima = new Date(hoy.getFullYear() - 18, hoy.getMonth(), hoy.getDate());
// Formato YYYY-MM-DD para el atributo max del input date
const maxISO = fechaMaxima.toISOString().split("T")[0];
inputFechaNac.setAttribute("max", maxISO);

// Validar en tiempo real: si el usuario escribe o selecciona una fecha inválida
inputFechaNac.addEventListener("change", function() {
  const grupo = this.closest(".form-group");
  const errorMsg = grupo ? grupo.querySelector(".error-msg") : null;

  if (this.value) {
    const nacimiento = new Date(this.value);
    if (nacimiento > fechaMaxima) {
      // Fecha inválida: menor de 18 años → borrar y mostrar error
      this.value = "";
      this.classList.add("error");
      if (errorMsg) {
        errorMsg.textContent = "Debe ser mayor de 18 años";
        errorMsg.style.display = "block";
      }
    } else {
      // Fecha válida → limpiar error
      this.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
    }
  }
});

// =====================================================
// MOSTRAR/OCULTAR la sección Libreta Militar según
// el radio button "tieneLibreta" (Sí / No)
// =====================================================
const seccionLibreta = document.getElementById("seccionLibretaMilitar");
const radiosLibreta = document.querySelectorAll('input[name="tieneLibreta"]');

// Escuchar cada vez que cambia la selección del radio button
radiosLibreta.forEach(function(radio) {
  radio.addEventListener("change", function() {
    if (this.value === "si") {
      // Si eligió "Sí", mostrar la sección de libreta militar
      seccionLibreta.classList.remove("hidden");
    } else {
      // Si eligió "No", ocultar la sección y limpiar sus campos
      seccionLibreta.classList.add("hidden");
      document.getElementById("numeroLibreta").value = "";
      document.getElementById("distritoMilitar").value = "";
      document.getElementById("claseLibreta").value = "";
    }
  });
});

// =====================================================
// PREVISUALIZACIÓN DE DATOS (enfoque data-driven)
// =====================================================
// Función auxiliar: obtiene el texto visible de un <select>
function textoSelect(select) {
  return select.selectedIndex > 0 ? select.options[select.selectedIndex].text : "---";
}

// Arreglo que define qué mostrar en la previsualización
// Cada objeto tiene: idPreview (span destino) y valor (función que retorna el texto)
const camposPreview = [
  {
    idPreview: "prevNombre",
    valor: function() {
      return [
        document.getElementById("primerApellido").value,
        document.getElementById("segundoApellido").value,
        document.getElementById("primerNombre").value,
        document.getElementById("segundoNombre").value
      ].filter(function(v) { return v.trim() !== ""; }).join(" ") || "---";
    }
  },
  {
    idPreview: "prevDocumento",
    valor: function() {
      var num = document.getElementById("numeroDocumento").value;
      return num ? textoSelect(selectDoc) + " " + num : "---";
    }
  },
  {
    idPreview: "prevSexo",
    valor: function() { return textoSelect(selectSexo); }
  },
  {
    idPreview: "prevFechaNac",
    valor: function() {
      var raw = document.getElementById("fechaNacimiento").value;
      if (!raw) return "---";
      var p = raw.split("-");
      return p[2] + "/" + p[1] + "/" + p[0];
    }
  },
  {
    idPreview: "prevNacionalidad",
    valor: function() {
      var nac = textoSelect(selectNacionalidad);
      if (nac === "---") return "---";
      var extra = selectNacionalidad.value === "extranjera" ? " - " + textoSelect(selectPais) : "";
      return nac + extra;
    }
  },
  {
    idPreview: "prevLugarNac",
    valor: function() {
      var partes = [textoSelect(selectPaisNac), textoSelect(selectDeptoNac), textoSelect(selectMunicipioNac)]
        .filter(function(v) { return v !== "---"; });
      return partes.length > 0 ? partes.join(", ") : "---";
    }
  },
  {
    idPreview: "prevCelular",
    valor: function() { return document.getElementById("celular").value || "---"; }
  },
  {
    idPreview: "prevEmail",
    valor: function() { return document.getElementById("email").value || "---"; }
  },
  {
    idPreview: "prevDireccion",
    valor: function() { return document.getElementById("direccionCorrespondencia").value || "---"; }
  },
  {
    idPreview: "prevCorrespondencia",
    valor: function() {
      var partes = [textoSelect(selectDeptoCorre), textoSelect(selectMunicipioCorr)]
        .filter(function(v) { return v !== "---"; });
      return partes.length > 0 ? partes.join(", ") : "---";
    }
  }
];

// Función que llena todos los campos de la previsualización
function llenarPreview() {
  camposPreview.forEach(function(campo) {
    document.getElementById(campo.idPreview).textContent = campo.valor();
  });
}

const panelPreview = document.getElementById("previewDatos");

// Botón "Previsualizar" → solo muestra/oculta el panel
const btnPreview = document.getElementById("btnPreview");
btnPreview.addEventListener("click", function() {
  llenarPreview();
  panelPreview.classList.toggle("visible");
});

// Botón "Corregir datos" → cierra el panel y hace scroll al inicio del formulario
const btnCorregir = document.getElementById("btnCorregir");
btnCorregir.addEventListener("click", function() {
  panelPreview.classList.remove("visible");
  document.querySelector("form").scrollIntoView({ behavior: "smooth", block: "start" });
});

// Botón "Confirmar datos" → navega al paso 2
const btnConfirmar = document.getElementById("btnConfirmar");
btnConfirmar.addEventListener("click", function() {
  window.location.href = "formacion-academica.html";
});

// =====================================================
// VALIDACIÓN DE CAMPOS OBLIGATORIOS
// =====================================================
// Lista de campos obligatorios: { id, tipo }
// tipo: "input" (text/date/email/tel), "select", "radio"
const camposObligatorios = [
  { id: "primerApellido", tipo: "input" },
  { id: "primerNombre", tipo: "input" },
  { id: "tipoDocumento", tipo: "select" },
  { id: "numeroDocumento", tipo: "input" },
  { id: "sexo", tipo: "select" },
  { id: "nacionalidad", tipo: "select" },
  { id: "fechaNacimiento", tipo: "input" },
  { id: "paisNacimiento", tipo: "select" },
  { id: "departamentoNacimiento", tipo: "select" },
  { id: "municipioNacimiento", tipo: "select" },
  { id: "direccionCorrespondencia", tipo: "input" },
  { id: "departamentoCorrespondencia", tipo: "select" },
  { id: "municipioCorrespondencia", tipo: "select" },
  { id: "celular", tipo: "input" },
  { id: "email", tipo: "input" }
];

// Función que valida todos los campos obligatorios
// Retorna true si todo está correcto, false si hay errores
function validarFormulario() {
  let esValido = true;

  // Si la nacionalidad es extranjera, también validar el país de origen
  const esExtranjera = selectNacionalidad.value === "extranjera";

  camposObligatorios.forEach(function(campo) {
    const elemento = document.getElementById(campo.id);
    const grupo = elemento.closest(".form-group");
    const errorMsg = grupo ? grupo.querySelector(".error-msg") : null;

    // Si es extranjera, omitir departamento y municipio de nacimiento (están ocultos)
    if (esExtranjera && (campo.id === "departamentoNacimiento" || campo.id === "municipioNacimiento")) {
      elemento.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
      return; // Saltar este campo
    }

    let vacio = false;
    if (campo.tipo === "input") {
      vacio = elemento.value.trim() === "";
    } else if (campo.tipo === "select") {
      vacio = elemento.value === "";
    }

    if (vacio) {
      // Marcar campo con error
      elemento.classList.add("error");
      if (errorMsg) errorMsg.style.display = "block";
      esValido = false;
    } else {
      // Limpiar error si el campo está lleno
      elemento.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
    }
  });

  // Validar que la fecha de nacimiento sea de mayor de edad (18+)
  const inputFecha = document.getElementById("fechaNacimiento");
  const grupoFecha = inputFecha.closest(".form-group");
  const errorFecha = grupoFecha ? grupoFecha.querySelector(".error-msg") : null;
  if (inputFecha.value) {
    const nacimiento = new Date(inputFecha.value);
    const hoyVal = new Date();
    let edad = hoyVal.getFullYear() - nacimiento.getFullYear();
    const mesDiff = hoyVal.getMonth() - nacimiento.getMonth();
    if (mesDiff < 0 || (mesDiff === 0 && hoyVal.getDate() < nacimiento.getDate())) {
      edad--;
    }
    if (edad < 18) {
      inputFecha.classList.add("error");
      if (errorFecha) {
        errorFecha.textContent = "Debe ser mayor de 18 años";
        errorFecha.style.display = "block";
      }
      esValido = false;
    }
  }

  // Validar país extranjero solo si eligió nacionalidad extranjera
  if (esExtranjera) {
    const errorPais = selectPais.closest(".form-group").querySelector(".error-msg");
    if (selectPais.value === "") {
      selectPais.classList.add("error");
      if (errorPais) errorPais.style.display = "block";
      esValido = false;
    } else {
      selectPais.classList.remove("error");
      if (errorPais) errorPais.style.display = "none";
    }
  }

  return esValido;
}

// Limpiar error de un campo cuando el usuario lo modifica
camposObligatorios.forEach(function(campo) {
  const elemento = document.getElementById(campo.id);
  const evento = campo.tipo === "select" ? "change" : "input";
  elemento.addEventListener(evento, function() {
    const grupo = this.closest(".form-group");
    const errorMsg = grupo ? grupo.querySelector(".error-msg") : null;
    this.classList.remove("error");
    if (errorMsg) errorMsg.style.display = "none";
  });
});

// Botón "Siguiente" → validar antes de navegar al paso 2
// Si la validación es correcta, muestra la previsualización para confirmación
const btnSiguiente = document.getElementById("btnSiguiente");
btnSiguiente.addEventListener("click", function() {
  if (validarFormulario()) {
    // Validación OK → avisar al usuario y mostrar previsualización
    alert("A continuación se mostrará la previsualización de sus datos.\nPor favor verifique que la información sea correcta antes de continuar a la siguiente sección.");
    llenarPreview();
    panelPreview.classList.add("visible");
    panelPreview.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    // Hacer scroll al primer campo con error
    const primerError = document.querySelector(".form-group .error");
    if (primerError) {
      primerError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});
