// ARREGLOS DE OPCIONES PARA LOS SELECT
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

// MUNICIPIOS POR DEPARTAMENTO
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

// REFERENCIAS A LOS SELECT (para acceder fácilmente desde JavaScript)
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
const selectPaisCorr = document.getElementById("paisCorrespondencia")

// FUNCIÓN REUTILIZABLE: agregar opciones a un select desde un arreglo
function agregarOpciones(select, arreglo) {
  arreglo.forEach(function(item) {
    const option = document.createElement("option");
    option.value = item.valor;
    option.textContent = item.nombre;
    select.appendChild(option);
  });
}

// CARGAR OPCIONES EN CADA SELECT
agregarOpciones(selectPais, paises);
agregarOpciones(selectDoc, tipo_docs);
agregarOpciones(selectSexo, listaSexo);
agregarOpciones(selectDistrito, listaDistritos);
agregarOpciones(selectClaseLibr, listaClaseLibr);

// PAÍS DE NACIMIENTO: Colombia + otros países
const optionColombia = document.createElement("option");
optionColombia.value = "colombia";
optionColombia.textContent = "Colombia";
optionColombia.selected = true;
selectPaisNac.appendChild(optionColombia);
agregarOpciones(selectPaisNac, paises);

// DEPARTAMENTOS DE NACIMIENTO
agregarOpciones(selectDeptoNac, departamentos);

// DEPARTAMENTOS DE CORRESPONDENCIA
agregarOpciones(selectDeptoCorre, departamentos);

// PAÍS DE CORRESPONDENCIA: ahora permite cambiar de país
function cargarPaisesCorrespondencia() {
  selectPaisCorr.innerHTML = '<option value="">-- Seleccione --</option>';
  const optionCol = document.createElement("option");
  optionCol.value = "colombia";
  optionCol.textContent = "Colombia";
  optionCol.selected = true;
  selectPaisCorr.appendChild(optionCol);
  agregarOpciones(selectPaisCorr, paises);
}
cargarPaisesCorrespondencia();

// CUANDO CAMBIA EL PAÍS DE CORRESPONDENCIA
selectPaisCorr.addEventListener("change", function() {
  selectDeptoCorre.innerHTML = '<option value="">-- Seleccione --</option>';
  selectMunicipioCorr.innerHTML = '<option value="">-- Seleccione --</option>';

  if (this.value === "colombia") {
    // Si selecciona Colombia, mostrar departamentos y municipios
    agregarOpciones(selectDeptoCorre, departamentos);
  } else if (this.value !== "") {
    // Si selecciona otro país, no mostrar departamentos (no aplica)
    selectDeptoCorre.parentElement.style.display = "none";
    selectMunicipioCorr.parentElement.style.display = "none";
  }
});

// CUANDO CAMBIA EL DEPARTAMENTO DE CORRESPONDENCIA
selectDeptoCorre.addEventListener("change", function() {
  cargarMunicipios(selectMunicipioCorr, this.value);
});

// TIPO DE DOCUMENTO DEFINE LA NACIONALIDAD
const selectNacionalidad = document.getElementById("nacionalidad");

selectDoc.addEventListener("change", function() {
  if (this.value === "cedula_ciudadania") {
    selectNacionalidad.value = "colombiana";
    selectNacionalidad.disabled = true;
  } else if (this.value !== "") {
    selectNacionalidad.value = "extranjera";
    selectNacionalidad.disabled = true;
  } else {
    selectNacionalidad.value = "";
    selectNacionalidad.disabled = false;
  }
  selectNacionalidad.dispatchEvent(new Event("change"));
});

// FUNCIÓN PARA CARGAR MUNICIPIOS según departamento
function cargarMunicipios(selectMunicipio, departamentoValor) {
  selectMunicipio.innerHTML = '<option value="">-- Seleccione --</option>';
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

// CUANDO CAMBIA EL DEPARTAMENTO DE NACIMIENTO, CARGAR SUS MUNICIPIOS
selectDeptoNac.addEventListener("change", function() {
  cargarMunicipios(selectMunicipioNac, this.value);
});

// NACIONALIDAD: mostrar/ocultar país extranjero y sincronizar datos
const grupoPais = document.getElementById("grupoPaisExtranjero");

selectNacionalidad.addEventListener("change", function() {
  if (this.value === "extranjera") {
    // Mostrar el campo para seleccionar país extranjero
    grupoPais.classList.remove("hidden");
    selectPais.disabled = false; // PERMITIR que el usuario seleccione

    // Si el usuario ya seleccionó un país, usarlo como país de nacimiento
    if (selectPais.value) {
      selectPaisNac.value = selectPais.value;
    }

    // Ocultar departamento y municipio (no aplica para extranjeros)
    document.getElementById("grupoDeptoNac").classList.add("hidden");
    document.getElementById("grupoMuniNac").classList.add("hidden");
    selectDeptoNac.innerHTML = '<option value="">-- Seleccione --</option>';
    selectMunicipioNac.innerHTML = '<option value="">-- Seleccione --</option>';

  } else if (this.value === "colombiana") {
    // Ocultar campo país extranjero
    grupoPais.classList.add("hidden");
    selectPais.value = "";

    // Colombia como país de nacimiento (automático)
    selectPaisNac.value = "colombia";
    selectPaisNac.disabled = true;

    // Mostrar departamento y municipio
    document.getElementById("grupoDeptoNac").classList.remove("hidden");
    document.getElementById("grupoMuniNac").classList.remove("hidden");
    selectDeptoNac.innerHTML = '<option value="">-- Seleccione --</option>';
    agregarOpciones(selectDeptoNac, departamentos);
    selectMunicipioNac.innerHTML = '<option value="">-- Seleccione --</option>';

  } else {
    // No ha seleccionado nacionalidad
    grupoPais.classList.add("hidden");
    selectPais.value = "";
    selectPaisNac.value = "";
    selectPaisNac.disabled = false;
    document.getElementById("grupoDeptoNac").classList.remove("hidden");
    document.getElementById("grupoMuniNac").classList.remove("hidden");
    selectDeptoNac.innerHTML = '<option value="">-- Seleccione --</option>';
    selectMunicipioNac.innerHTML = '<option value="">-- Seleccione --</option>';
  }
});

// CUANDO CAMBIA EL PAÍS EXTRANJERO, SINCRONIZAR CON PAÍS DE NACIMIENTO
selectPais.addEventListener("change", function() {
  if (this.value) {
    selectPaisNac.value = this.value;
    selectPaisNac.disabled = true;
  }
});

// FECHA DE NACIMIENTO: solo permite mayores de 18 años
const inputFechaNac = document.getElementById("fechaNacimiento");
const hoy = new Date();
const fechaMaxima = new Date(hoy.getFullYear() - 18, hoy.getMonth(), hoy.getDate());
const maxISO = fechaMaxima.toISOString().split("T")[0];
inputFechaNac.setAttribute("max", maxISO);

inputFechaNac.addEventListener("change", function() {
  const grupo = this.closest(".form-group");
  const errorMsg = grupo ? grupo.querySelector(".error-msg") : null;

  if (this.value) {
    const nacimiento = new Date(this.value);
    if (nacimiento > fechaMaxima) {
      this.value = "";
      this.classList.add("error");
      if (errorMsg) {
        errorMsg.textContent = "Debe ser mayor de 18 años";
        errorMsg.style.display = "block";
      }
    } else {
      this.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
    }
  }
});

// LIBRETA MILITAR: mostrar/ocultar según el radio button
const seccionLibreta = document.getElementById("seccionLibretaMilitar");
const radiosLibreta = document.querySelectorAll('input[name="tieneLibreta"]');

radiosLibreta.forEach(function(radio) {
  radio.addEventListener("change", function() {
    if (this.value === "si") {
      seccionLibreta.classList.remove("hidden");
    } else {
      seccionLibreta.classList.add("hidden");
      document.getElementById("numeroLibreta").value = "";
      document.getElementById("distritoMilitar").value = "";
      document.getElementById("claseLibreta").value = "";
    }
  });
});

// PREVISUALIZACIÓN: obtener texto visible de un select
function obtenerTextSelect(select) {
  return select.selectedIndex > 0 ? select.options[select.selectedIndex].text : "---";
}

// DEFINIR QUE SE MUESTRA EN LA PREVISUALIZACIÓN
const datosPreview = [
  {
    id: "prevNombre",
    valor: function() {
      const p = document.getElementById("primerApellido").value;
      const s = document.getElementById("segundoApellido").value;
      const n = document.getElementById("primerNombre").value;
      const sn = document.getElementById("segundoNombre").value;
      return [p, s, n, sn].filter(x => x.trim()).join(" ") || "---";
    }
  },
  {
    id: "prevDocumento",
    valor: function() {
      const num = document.getElementById("numeroDocumento").value;
      return num ? obtenerTextSelect(selectDoc) + " " + num : "---";
    }
  },
  {
    id: "prevSexo",
    valor: function() { return obtenerTextSelect(selectSexo); }
  },
  {
    id: "prevFechaNac",
    valor: function() {
      const raw = document.getElementById("fechaNacimiento").value;
      if (!raw) return "---";
      const p = raw.split("-");
      return p[2] + "/" + p[1] + "/" + p[0];
    }
  },
  {
    id: "prevNacionalidad",
    valor: function() {
      const nac = obtenerTextSelect(selectNacionalidad);
      if (nac === "---") return "---";
      const extra = selectNacionalidad.value === "extranjera" ? " - " + obtenerTextSelect(selectPais) : "";
      return nac + extra;
    }
  },
  {
    id: "prevLugarNac",
    valor: function() {
      const partes = [obtenerTextSelect(selectPaisNac), obtenerTextSelect(selectDeptoNac), obtenerTextSelect(selectMunicipioNac)]
        .filter(x => x !== "---");
      return partes.length > 0 ? partes.join(", ") : "---";
    }
  },
  {
    id: "prevCelular",
    valor: function() { return document.getElementById("celular").value || "---"; }
  },
  {
    id: "prevEmail",
    valor: function() { return document.getElementById("email").value || "---"; }
  },
  {
    id: "prevDireccion",
    valor: function() { return document.getElementById("direccionCorrespondencia").value || "---"; }
  },
  {
    id: "prevCorrespondencia",
    valor: function() {
      const partes = [obtenerTextSelect(selectPaisCorr), obtenerTextSelect(selectDeptoCorre), obtenerTextSelect(selectMunicipioCorr)]
        .filter(x => x !== "---");
      return partes.length > 0 ? partes.join(", ") : "---";
    }
  }
];

// LLENAR LOS DATOS DE PREVISUALIZACIÓN
function llenarPreview() {
  datosPreview.forEach(function(campo) {
    document.getElementById(campo.id).textContent = campo.valor();
  });
}

// BOTONES DE PREVISUALIZACIÓN
const panelPreview = document.getElementById("previewDatos");
const btnPreview = document.getElementById("btnPreview");
const btnCorregir = document.getElementById("btnCorregir");
const btnConfirmar = document.getElementById("btnConfirmar");

btnPreview.addEventListener("click", function() {
  llenarPreview();
  panelPreview.classList.toggle("visible");
});

btnCorregir.addEventListener("click", function() {
  panelPreview.classList.remove("visible");
  document.querySelector("form").scrollIntoView({ behavior: "smooth", block: "start" });
});

btnConfirmar.addEventListener("click", function() {
  window.location.href = "formacion-academica.html";
});

// VALIDACIÓN: campos obligatorios
const camposObligatorios = [
  "primerApellido", "primerNombre", "tipoDocumento", "numeroDocumento",
  "sexo", "nacionalidad", "fechaNacimiento", "paisNacimiento",
  "departamentoNacimiento", "municipioNacimiento", "direccionCorrespondencia",
  "paisCorrespondencia", "departamentoCorrespondencia", "municipioCorrespondencia",
  "celular", "email"
];

// FUNCIÓN PARA VALIDAR
function validarFormulario() {
  let valido = true;
  const esExtranjera = selectNacionalidad.value === "extranjera";

  camposObligatorios.forEach(function(idCampo) {
    const elemento = document.getElementById(idCampo);
    if (!elemento) return;

    const grupo = elemento.closest(".form-group");
    const errorMsg = grupo ? grupo.querySelector(".error-msg") : null;

    // Omitir departamento y municipio si es extranjero
    if (esExtranjera && (idCampo === "departamentoNacimiento" || idCampo === "municipioNacimiento")) {
      elemento.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
      return;
    }

    const vacio = elemento.value.trim() === "";

    if (vacio) {
      elemento.classList.add("error");
      if (errorMsg) errorMsg.style.display = "block";
      valido = false;
    } else {
      elemento.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
    }
  });

  // Validar país extranjero si aplica
  if (esExtranjera) {
    const grupo = selectPais.closest(".form-group");
    const errorMsg = grupo ? grupo.querySelector(".error-msg") : null;
    if (selectPais.value === "") {
      selectPais.classList.add("error");
      if (errorMsg) errorMsg.style.display = "block";
      valido = false;
    } else {
      selectPais.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
    }
  }

  // Validar edad (mayor de 18)
  const inputFecha = document.getElementById("fechaNacimiento");
  const grupoFecha = inputFecha.closest(".form-group");
  const errorFecha = grupoFecha ? grupoFecha.querySelector(".error-msg") : null;

  if (inputFecha.value) {
    const nacimiento = new Date(inputFecha.value);
    const hoyVal = new Date();
    let edad = hoyVal.getFullYear() - nacimiento.getFullYear();
    if (hoyVal.getMonth() < nacimiento.getMonth() ||
        (hoyVal.getMonth() === nacimiento.getMonth() && hoyVal.getDate() < nacimiento.getDate())) {
      edad--;
    }
    if (edad < 18) {
      inputFecha.classList.add("error");
      if (errorFecha) {
        errorFecha.textContent = "Debe ser mayor de 18 años";
        errorFecha.style.display = "block";
      }
      valido = false;
    }
  }

  return valido;
}

// LIMPIAR ERROR cuando el usuario modifica un campo
camposObligatorios.forEach(function(idCampo) {
  const elemento = document.getElementById(idCampo);
  if (!elemento) return;
  const evento = elemento.tagName === "SELECT" ? "change" : "input";
  elemento.addEventListener(evento, function() {
    const grupo = this.closest(".form-group");
    const errorMsg = grupo ? grupo.querySelector(".error-msg") : null;
    this.classList.remove("error");
    if (errorMsg) errorMsg.style.display = "none";
  });
});

// BOTÓN SIGUIENTE: validar antes de continuar
const btnSiguiente = document.getElementById("btnSiguiente");
btnSiguiente.addEventListener("click", function() {
  if (validarFormulario()) {
    alert("A continuación se mostrará la previsualización de sus datos.\nPor favor verifique que la información sea correcta antes de continuar a la siguiente sección.");
    llenarPreview();
    panelPreview.classList.add("visible");
    panelPreview.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    const primerError = document.querySelector(".form-group .error");
    if (primerError) {
      primerError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});
