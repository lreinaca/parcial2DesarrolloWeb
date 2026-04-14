// =====================================================
// GUÍA DE USO: utils-datos.js - Funciones Compartidas
// =====================================================
// Este archivo centraliza listas de datos y funciones reutilizables
// para evitar duplicación de código en toda la aplicación.

/*
  ╔════════════════════════════════════════════════════════════════╗
  ║         LISTAS DE DATOS DISPONIBLES (Constantes)              ║
  ╚════════════════════════════════════════════════════════════════╝

  1. PAISES
     - Variable: PAISES
     - Tipo: Array de objetos {valor, nombre}
     - Contenido: 35 países de América Latina, Europa y Asia
     - Uso: Cargar opciones en selects de país
     - Ejemplo: cargarOpcionesSelect(selectPais, PAISES, true);

  2. DEPARTAMENTOS_COLOMBIA
     - Variable: DEPARTAMENTOS_COLOMBIA
     - Tipo: Array de objetos {valor, nombre}
     - Contenido: 32 departamentos + Bogotá D.C.
     - Uso: Cargar opciones en selects de departamento de Colombia
     - Ejemplo: cargarOpcionesSelect(selectDepto, DEPARTAMENTOS_COLOMBIA);

  3. MUNICIPIOS_COLOMBIA
     - Variable: MUNICIPIOS_COLOMBIA
     - Tipo: Objeto con keys = "valor" de departamentos, values = Array de municipios
     - Contenido: ~150 municipios colombianos
     - Uso: Cargar municipios dinámicamente según departamento seleccionado
     - Ejemplo: cargarMunicipiosPorDepto(selectMunicipio, "antioquia");
*/

/*
  ╔════════════════════════════════════════════════════════════════╗
  ║           FUNCIONES DISPONIBLES (Reutilizables)               ║
  ╚════════════════════════════════════════════════════════════════╝

  ┌────────────────────────────────────────────────────────────────┐
  │ 1. cargarOpcionesSelect()                                      │
  ├────────────────────────────────────────────────────────────────┤
  │
  │ PROPÓSITO:
  │   Carga dinámicamente opciones (<option>) en un elemento SELECT
  │   Útil para poblar país, departamento, tipo de documento, etc.
  │
  │ SINTAXIS:
  │   cargarOpcionesSelect(selectElement, dataArray,
  │                        incluirPlaceholder, placeholderText)
  │
  │ PARÁMETROS:
  │   • selectElement (requerido)      : HTMLSelectElement (el <select>)
  │   • dataArray (requerido)          : Array de {valor, nombre}
  │   • incluirPlaceholder (opcional)  : Boolean (default: true)
  │   • placeholderText (opcional)     : String (default: "-- Seleccione --")
  │
  │ EJEMPLOS:
  │
  │   // Cargar países con placeholder personalizado
  │   cargarOpcionesSelect(
  │     document.getElementById("selectPais"),
  │     PAISES,
  │     true,
  │     "-- Seleccione País --"
  │   );
  │
  │   // Cargar departamentos sin placeholder
  │   cargarOpcionesSelect(
  │     selectDepto,
  │     DEPARTAMENTOS_COLOMBIA,
  │     false
  │   );
  │
  └────────────────────────────────────────────────────────────────┘

  ┌────────────────────────────────────────────────────────────────┐
  │ 2. cargarMunicipiosPorDepto()                                  │
  ├────────────────────────────────────────────────────────────────┤
  │
  │ PROPÓSITO:
  │   Carga dinámicamente los municipios de un departamento
  │   SOLO PARA COLOMBIA (otros países no soportados)
  │
  │ SINTAXIS:
  │   cargarMunicipiosPorDepto(selectMunicipio, departamentoValor)
  │
  │ PARÁMETROS:
  │   • selectMunicipio (requerido)  : HTMLSelectElement
  │   • departamentoValor (requerido): String (ej: "antioquia", "bogota")
  │
  │ EJEMPLOS:
  │
  │   // Al cambiar departamento, cargar sus municipios
  │   selectDepto.addEventListener("change", function() {
  │     cargarMunicipiosPorDepto(selectMunicipio, this.value);
  │   });
  │
  │   // Cargar municipios de Antioquia específicamente
  │   cargarMunicipiosPorDepto(selectMun, "antioquia");
  │   // → Carga: Medellín, Bello, Envigado, Itagüí, Rionegro
  │
  └────────────────────────────────────────────────────────────────┘

  ┌────────────────────────────────────────────────────────────────┐
  │ 3. conectarPaisADepartamentos()                                │
  ├────────────────────────────────────────────────────────────────┤
  │
  │ PROPÓSITO:
  │   Conecta automáticamente dos selectes: cuando cambia el país,
  │   carga dinámicamente los departamentos de ese país
  │   NOTA: Solo Colombia tiene departamentos implementados
  │
  │ SINTAXIS:
  │   conectarPaisADepartamentos(selectPais, selectDepto)
  │
  │ PARÁMETROS:
  │   • selectPais (requerido)  : HTMLSelectElement
  │   • selectDepto (requerido) : HTMLSelectElement
  │
  │ COMPORTAMIENTO:
  │   • Si selecciona "colombia"  → Carga departamentos de Colombia
  │   • Si selecciona otro país   → Muestra mensaje y deshabilita
  │   • Si no selecciona nada     → Inicializa sin valores
  │
  │ EJEMPLOS:
  │
  │   // En la inicialización (window.load o DOMContentLoaded)
  │   conectarPaisADepartamentos(selectPais, selectDepto);
  │
  │   // Ahora los selectes están conectados automáticamente
  │   // El usuario cambia país → departamentos se actualizan solos
  │
  └────────────────────────────────────────────────────────────────┘

  ┌────────────────────────────────────────────────────────────────┐
  │ 4. conectarDeptoAMunicipios()                                  │
  ├────────────────────────────────────────────────────────────────┤
  │
  │ PROPÓSITO:
  │   Conecta automáticamente dos selectes: cuando cambia el
  │   departamento, carga dinámicamente sus municipios
  │
  │ SINTAXIS:
  │   conectarDeptoAMunicipios(selectDepto, selectMunicipio)
  │
  │ PARÁMETROS:
  │   • selectDepto (requerido)     : HTMLSelectElement
  │   • selectMunicipio (requerido) : HTMLSelectElement
  │
  │ COMPORTAMIENTO:
  │   • Si selecciona un depto → Carga municipios de ese departamento
  │   • Si no selecciona nada  → Muestra placeholder
  │
  │ EJEMPLOS:
  │
  │   // En la inicialización
  │   conectarDeptoAMunicipios(selectDepto, selectMun);
  │
  │   // Chacos: departamento → municipios se cargan solos
  │
  └────────────────────────────────────────────────────────────────┘
*/

/*
  ╔════════════════════════════════════════════════════════════════╗
  ║              EJEMPLO COMPLETO DE FLUJO DINÁMICO               ║
  ╚════════════════════════════════════════════════════════════════╝

  // 1. En el HTML
  <select id="selectPais"><!-- se llena dinámicamente --></select>
  <select id="selectDepto"><!-- se llena dinámicamente --></select>
  <select id="selectMun"><!-- se llena dinámicamente --></select>

  // 2. En el JavaScript (en window.load)
  window.addEventListener("load", function() {
    const selectPais = document.getElementById("selectPais");
    const selectDepto = document.getElementById("selectDepto");
    const selectMun = document.getElementById("selectMun");

    // Cargar países inicialmente
    cargarOpcionesSelect(selectPais, PAISES, true);

    // Conectar cambios: País → Departamentos
    conectarPaisADepartamentos(selectPais, selectDepto);

    // Conectar cambios: Departamento → Municipios
    conectarDeptoAMunicipios(selectDepto, selectMun);

    // Preseleccionar Colombia (opcional)
    selectPais.value = "colombia";
    selectPais.dispatchEvent(new Event("change")); // Trigger para cargar deptos
  });

  // 3. Resultado:
  //    - Usuario abre página → ve países precargados
  //    - Usuario selecciona "Colombia" → se cargan 33 departamentos
  //    - Usuario selecciona "Antioquia" → se cargan 5 municipios
  //    - Flujo completamente dinámico, sin recargar página
*/

/*
  ╔════════════════════════════════════════════════════════════════╗
  ║            DÓNDE SE IMPORTA utils-datos.js                    ║
  ╚════════════════════════════════════════════════════════════════╝

  Para usar estas funciones en tus páginas, agrega ANTES del
  script de la página:

  <!-- En experiencia-laboral.html -->
  <script src="js/utils-datos.js"></script>
  <script src="js/experiencia-laboral.js"></script>

  <!-- En tiempo-experiencia.html -->
  <script src="js/utils-datos.js"></script>
  <script src="js/tiempo-experiencia.js"></script>

  <!-- En cualquier otra página que lo necesite -->
  <script src="js/utils-datos.js"></script>
  <script src="js/mi-pagina.js"></script>

  ORDEN IMPORTANTE: utils-datos.js debe cargarse PRIMERO
  porque define las constantes que usan los otros scripts.
*/
