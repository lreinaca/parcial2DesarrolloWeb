// =====================================================
// UTILS-DATOS.JS — Utilidades y Listas Compartidas
// =====================================================
// Este archivo centraliza:
// 1. Arreglos de datos (países, departamentos, municipios)
// 2. Funciones reutilizables para cargar dinámicamente
// 3. Se importa en múltiples páginas para evitar repetición

// =====================================================
// LISTAS DE DATOS PREDETERMINADAS
// =====================================================

// Lista de todos los países (para seleccionar país de nacimiento, país de empresa, etc.)
const PAISES = [
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

// Lista de los 33 departamentos de Colombia + Bogotá D.C.
const DEPARTAMENTOS_COLOMBIA = [
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

// Diccionario de municipios por departamento de Colombia
// Cada departamento tiene asociada una lista de municipios
const MUNICIPIOS_COLOMBIA = {
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

// =====================================================
// FUNCIÓN REUTILIZABLE: Cargar opciones en un SELECT
// =====================================================
/**
 * Carga dinámicamente opciones en un elemento <select>
 *
 * @param {HTMLSelectElement} selectElement - El elemento <select> donde agregar opciones
 * @param {Array} dataArray - Arreglo de objetos con propiedades {valor, nombre}
 * @param {boolean} incluirPlaceholder - Si incluir opción vacía "-- Seleccione --"
 * @param {string} placeholderText - Texto personalizado para la opción vacía (opcional)
 *
 * @example
 * cargarOpcionesSelect(selectPais, PAISES, true);
 * cargarOpcionesSelect(selectDepto, DEPARTAMENTOS_COLOMBIA, true, "-- Seleccione Departamento --");
 */
function cargarOpcionesSelect(selectElement, dataArray, incluirPlaceholder = true, placeholderText = "-- Seleccione --") {
  // Limpiar opciones previas
  selectElement.innerHTML = "";

  // Agregar opción vacía (placeholder) si se solicita
  if (incluirPlaceholder) {
    const optionVacia = document.createElement("option");
    optionVacia.value = "";
    optionVacia.textContent = placeholderText;
    selectElement.appendChild(optionVacia);
  }

  // Recorrer el arreglo y crear un <option> por cada elemento
  dataArray.forEach(function(item) {
    const option = document.createElement("option");
    option.value = item.valor;
    option.textContent = item.nombre;
    selectElement.appendChild(option);
  });
}

// =====================================================
// FUNCIÓN REUTILIZABLE: Cargar municipios según departamento
// =====================================================
/**
 * Carga dinámicamente los municipios de un departamento seleccionado
 * Solo funciona para municipios de Colombia
 *
 * @param {HTMLSelectElement} selectMunicipio - El <select> donde cargar municipios
 * @param {string} departamentoValor - El valor del departamento (debe estar en MUNICIPIOS_COLOMBIA)
 *
 * @example
 * cargarMunicipiosPorDepto(selectMunicipio, "antioquia");
 */
function cargarMunicipiosPorDepto(selectMunicipio, departamentoValor) {
  // Limpiar opciones previas, dejar solo placeholder
  selectMunicipio.innerHTML = '<option value="">-- Seleccione --</option>';

  // Buscar los municipios del departamento en el diccionario MUNICIPIOS_COLOMBIA
  const listaMunicipios = MUNICIPIOS_COLOMBIA[departamentoValor];

  if (listaMunicipios) {
    // Recorrer y crear un <option> por cada municipio
    listaMunicipios.forEach(function(nombre) {
      const option = document.createElement("option");
      // Convertir nombre a valor: "Santa Marta" → "santa_marta"
      option.value = nombre.toLowerCase().replace(/ /g, "_");
      option.textContent = nombre;
      selectMunicipio.appendChild(option);
    });
  }
}

// =====================================================
// FUNCIÓN REUTILIZABLE: Conectar cambio de País → Departamentos
// =====================================================
/**
 * Configura automáticamente que al cambiar país, se carguen sus departamentos
 * (Actualmente solo soporta Colombia, otros países mostrarían mensaje)
 *
 * @param {HTMLSelectElement} selectPais - El <select> de países
 * @param {HTMLSelectElement} selectDepto - El <select> de departamentos
 *
 * @example
 * conectarPaisADepartamentos(selectPaisEmpresa, selectDeptoEmpresa);
 */
function conectarPaisADepartamentos(selectPais, selectDepto, selectMunicipio) {
  // Escuchar cambios en el select de país
  selectPais.addEventListener("change", function() {
    if (this.value === "colombia") {
      // Si selecciona Colombia, cargar sus departamentos
      cargarOpcionesSelect(selectDepto, DEPARTAMENTOS_COLOMBIA, true, "-- Seleccione Departamento --");
      selectDepto.disabled = false;
      if (selectMunicipio) {
        selectMunicipio.innerHTML = '<option value="">-- Primero seleccione un departamento --</option>';
        selectMunicipio.disabled = false;
      }
    } else if (this.value !== "") {
      // Si selecciona otro país, mostrar mensaje y deshabilitar
      selectDepto.innerHTML = '<option value="">-- Este país usa divisiones administrativas diferentes --</option>';
      selectDepto.disabled = true;
      if (selectMunicipio) {
        selectMunicipio.innerHTML = '<option value="">-- No disponible --</option>';
        selectMunicipio.disabled = true;
      }
    } else {
      // Si no selecciona nada, limpiar
      selectDepto.innerHTML = '<option value="">-- Primero seleccione un país --</option>';
      selectDepto.disabled = false;
      if (selectMunicipio) {
        selectMunicipio.innerHTML = '<option value="">-- Primero seleccione un departamento --</option>';
        selectMunicipio.disabled = false;
      }
    }
  });
}

// =====================================================
// FUNCIÓN REUTILIZABLE: Conectar cambio de Departamento → Municipios
// =====================================================
/**
 * Configura automáticamente que al cambiar departamento, se carguen sus municipios
 *
 * @param {HTMLSelectElement} selectDepto - El <select> de departamentos
 * @param {HTMLSelectElement} selectMunicipio - El <select> de municipios
 *
 * @example
 * conectarDeptoAMunicipios(selectDeptoEmpresa, selectMunicipioEmpresa);
 */
function conectarDeptoAMunicipios(selectDepto, selectMunicipio) {
  // Escuchar cambios en el select de departamento
  selectDepto.addEventListener("change", function() {
    if (this.value !== "") {
      // Si selecciona un departamento, cargar sus municipios
      cargarMunicipiosPorDepto(selectMunicipio, this.value);
      selectMunicipio.disabled = false;
    } else {
      // Si no selecciona nada, mostrar placeholder
      selectMunicipio.innerHTML = '<option value="">-- Primero seleccione un departamento --</option>';
      selectMunicipio.disabled = true;
    }
  });
}

// =====================================================
// FUNCIÓN REUTILIZABLE: Validar campo de celular
// =====================================================
/**
 * Aplica validación en tiempo real a un campo de celular:
 * - Solo permite dígitos numéricos
 * - Exactamente 10 dígitos para ser válido
 * - Muestra/oculta mensaje de error automáticamente
 *
 * @param {string} idCampo - El id del <input> de celular
 *
 * @example
 * validarCelular("celular");
 * validarCelular("telefonoEmpresa");
 */
function validarCelular(idCampo) {
  const input = document.getElementById(idCampo);
  if (!input) return;

  // Bloquear teclas que no sean dígitos (permite Backspace, Tab, flechas, etc.)
  input.addEventListener("keydown", function(e) {
    const teclasPermitidas = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Home", "End"];
    if (teclasPermitidas.includes(e.key)) return;
    if (e.ctrlKey || e.metaKey) return;
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  });

  // Prevenir pegado de texto con letras
  input.addEventListener("paste", function(e) {
    e.preventDefault();
    const texto = (e.clipboardData || window.clipboardData).getData("text");
    const soloDigitos = texto.replace(/[^0-9]/g, "").slice(0, 10);
    this.value = soloDigitos;
    this.dispatchEvent(new Event("input"));
  });

  // Validar formato y mostrar/ocultar error
  input.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10);
    }

    const grupo = this.closest(".form-group");
    const errorMsg = grupo ? grupo.querySelector(".error-msg") : null;

    if (this.value.length === 10) {
      this.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
    } else if (this.value.length > 0) {
      this.classList.add("error");
      if (errorMsg) {
        errorMsg.textContent = "El celular debe tener exactamente 10 dígitos";
        errorMsg.style.display = "block";
      }
    } else {
      this.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
    }
  });
}

// =====================================================
// FUNCIÓN REUTILIZABLE: Validar campo de correo electrónico
// =====================================================
/**
 * Aplica validación en tiempo real a un campo de correo electrónico:
 * - Verifica formato válido (usuario@dominio.extensión)
 * - Muestra/oculta mensaje de error automáticamente
 *
 * @param {string} idCampo - El id del <input> de email
 *
 * @example
 * validarCorreo("email");
 * validarCorreo("emailEmpresa");
 */
function validarCorreo(idCampo) {
  const input = document.getElementById(idCampo);
  if (!input) return;

  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  input.addEventListener("input", function() {
    const grupo = this.closest(".form-group");
    const errorMsg = grupo ? grupo.querySelector(".error-msg") : null;

    if (this.value.trim() === "") {
      this.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
    } else if (!regexCorreo.test(this.value.trim())) {
      this.classList.add("error");
      if (errorMsg) {
        errorMsg.textContent = "Ingrese un correo válido (ej: usuario@dominio.com)";
        errorMsg.style.display = "block";
      }
    } else {
      this.classList.remove("error");
      if (errorMsg) errorMsg.style.display = "none";
    }
  });
}
