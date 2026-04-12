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
const selectNacionalidad = document.getElementById("nacionalidad");
const grupoPais = document.getElementById("grupoPaisExtranjero");
// selectPaisNac ya fue declarado arriba junto con las demás referencias

// Escuchar cada vez que cambia la selección de nacionalidad
selectNacionalidad.addEventListener("change", function() {
  if (this.value === "extranjera") {
    // Si eligió "Extranjera", mostrar el campo de país (quitar clase .hidden)
    grupoPais.classList.remove("hidden");
    // Sincronizar país de nacimiento con el país extranjero seleccionado
    selectPaisNac.value = selectPais.value;
    // Poner "Extranjero" como único opción en departamento
    selectDeptoNac.innerHTML = '<option value="">-- Seleccione --</option>';
    const optExtranjero = document.createElement("option");
    optExtranjero.value = "extranjero";
    optExtranjero.textContent = "Extranjero";
    optExtranjero.selected = true;
    selectDeptoNac.appendChild(optExtranjero);
    // Limpiar municipio (no aplica para extranjeros)
    selectMunicipioNac.innerHTML = '<option value="">-- No aplica --</option>';
  } else if (this.value === "colombiana") {
    // Si eligió "Colombiana", ocultar campo país extranjero y limpiar
    grupoPais.classList.add("hidden");
    selectPais.value = "";
    // Establecer automáticamente Colombia como país de nacimiento
    selectPaisNac.value = "colombia";
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
    selectDeptoNac.innerHTML = '<option value="">-- Seleccione --</option>';
    selectMunicipioNac.innerHTML = '<option value="">-- Seleccione --</option>';
  }
});

// Cuando cambia el país extranjero, sincronizar con país de nacimiento
selectPais.addEventListener("change", function() {
  selectPaisNac.value = this.value;
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
// PREVISUALIZACIÓN DE DATOS
// =====================================================
// Función auxiliar: obtiene el texto visible de un <select>
function textoSelect(select) {
  return select.selectedIndex > 0 ? select.options[select.selectedIndex].text : "---";
}

const btnPreview = document.getElementById("btnPreview");
const panelPreview = document.getElementById("previewDatos");

btnPreview.addEventListener("click", function() {
  // Nombre completo: Primer Apellido + Segundo Apellido + Primer Nombre + Segundo Nombre
  const nombre = [
    document.getElementById("primerApellido").value,
    document.getElementById("segundoApellido").value,
    document.getElementById("primerNombre").value,
    document.getElementById("segundoNombre").value
  ].filter(function(val) { return val.trim() !== ""; }).join(" ");
  document.getElementById("prevNombre").textContent = nombre || "---";

  // Documento: Tipo + Número
  const tipoDoc = textoSelect(selectDoc);
  const numDoc = document.getElementById("numeroDocumento").value;
  document.getElementById("prevDocumento").textContent =
    numDoc ? tipoDoc + " " + numDoc : "---";

  // Fecha de nacimiento (formatear de YYYY-MM-DD a DD/MM/YYYY)
  const fechaRaw = document.getElementById("fechaNacimiento").value;
  if (fechaRaw) {
    const partes = fechaRaw.split("-"); // ["YYYY", "MM", "DD"]
    document.getElementById("prevFechaNac").textContent =
      partes[2] + "/" + partes[1] + "/" + partes[0];
  } else {
    document.getElementById("prevFechaNac").textContent = "---";
  }

  // Nacionalidad + país si es extranjera
  const nac = textoSelect(selectNacionalidad);
  const paisExtra = selectNacionalidad.value === "extranjera" ? " - " + textoSelect(selectPais) : "";
  document.getElementById("prevNacionalidad").textContent =
    nac !== "---" ? nac + paisExtra : "---";

  // Celular
  const celular = document.getElementById("celular").value;
  document.getElementById("prevCelular").textContent = celular || "---";

  // Correo electrónico
  const email = document.getElementById("email").value;
  document.getElementById("prevEmail").textContent = email || "---";

  // Dirección de correspondencia
  const direccion = document.getElementById("direccionCorrespondencia").value;
  document.getElementById("prevDireccion").textContent = direccion || "---";

  // Lugar de nacimiento: País, Departamento, Municipio
  const paisNac = textoSelect(selectPaisNac);
  const deptoNac = textoSelect(selectDeptoNac);
  const muniNac = textoSelect(selectMunicipioNac);
  const partes = [paisNac, deptoNac, muniNac].filter(function(val) { return val !== "---"; });
  document.getElementById("prevLugarNac").textContent = partes.length > 0 ? partes.join(", ") : "---";

  // Mostrar u ocultar el panel (toggle)
  panelPreview.classList.toggle("visible");
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
const btnSiguiente = document.getElementById("btnSiguiente");
btnSiguiente.addEventListener("click", function() {
  if (validarFormulario()) {
    // Todo correcto, ir al paso 2
    window.location.href = "formacion-academica.html";
  } else {
    // Hacer scroll al primer campo con error
    const primerError = document.querySelector(".form-group .error");
    if (primerError) {
      primerError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});
