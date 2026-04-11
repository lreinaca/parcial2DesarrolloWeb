// =====================================================
// ARREGLOs
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
  { valor: "venezuela", nombre: "Venezuela" },
  { valor: "otro", nombre: "Otro" }
];

const tipo_docs = [
  { valor: "cedula_ciudadania", nombre: "Cédula de ciudadania"},
  { valor: "cedula_cextranjeria", nombre: "Cédula de extranjeria"},
  { valor: "pasaporte", nombre: "Pasaporte"}
];

const listaSexo = [
  { valor: "femenino", nombre: "Femenino"},
  { valor: "masculino", nombre: "Masculino"}
];

// Referencia al <select>
const selectPais = document.getElementById("paisExtranjero");
const selectDoc = document.getElementById("tipoDocumento")
const selectSexo = document.getElementById("sexo")

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

// =====================================================
// MOSTRAR/OCULTAR el campo País cuando se elige
// "Extranjera" en el select de Nacionalidad
// =====================================================
const selectNacionalidad = document.getElementById("nacionalidad");
const grupoPais = document.getElementById("grupoPaisExtranjero");

// Escuchar cada vez que cambia la selección de nacionalidad
selectNacionalidad.addEventListener("change", function() {
  if (this.value === "extranjera") {
    // Si eligió "Extranjera", mostrar el campo de país
    grupoPais.style.display = "flex";
  } else {
    // Si eligió "Colombiana" u otra, ocultar y limpiar la selección
    grupoPais.style.display = "none";
    selectPais.value = "";
  }
});
