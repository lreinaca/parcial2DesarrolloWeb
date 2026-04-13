// =====================================================
// ARREGLO DE USUARIOS REGISTRADOS
// =====================================================
// 4 usuarios (de las hojas de vida) + 1 administrador
const usuarios = [
  { usuario: "jgarcia",   contrasena: "1234", rol: "usuario" },
  { usuario: "mrodriguez", contrasena: "1234", rol: "usuario" },
  { usuario: "cmartinez", contrasena: "1234", rol: "usuario" },
  { usuario: "ltorres",   contrasena: "1234", rol: "usuario" },
  { usuario: "admin",     contrasena: "admin", rol: "admin" }
];

// =====================================================
// REFERENCIAS AL DOM
// =====================================================
const loginForm = document.getElementById("loginForm");
const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const errorUsuario = document.getElementById("errorUsuario");
const errorContrasena = document.getElementById("errorContrasena");

// =====================================================
// VALIDACIÓN Y LOGIN
// =====================================================
loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Evitar envío del formulario

  var user = inputUsuario.value.trim();
  var pass = inputContrasena.value.trim();
  var esValido = true;

  // Limpiar errores previos
  inputUsuario.classList.remove("error");
  inputContrasena.classList.remove("error");
  errorUsuario.style.display = "none";
  errorContrasena.style.display = "none";

  // Validar campo usuario
  if (user === "") {
    inputUsuario.classList.add("error");
    errorUsuario.textContent = "El usuario es obligatorio";
    errorUsuario.style.display = "block";
    esValido = false;
  }

  // Validar campo contraseña
  if (pass === "") {
    inputContrasena.classList.add("error");
    errorContrasena.textContent = "La contraseña es obligatoria";
    errorContrasena.style.display = "block";
    esValido = false;
  }

  if (!esValido) return;

  // Buscar usuario en el arreglo
  var encontrado = usuarios.find(function(u) {
    return u.usuario === user && u.contrasena === pass;
  });

  if (encontrado) {
    // Login exitoso → redirigir según rol
    if (encontrado.rol === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "datos-personales.html";
    }
  } else {
    // Credenciales incorrectas
    inputUsuario.classList.add("error");
    inputContrasena.classList.add("error");
    errorContrasena.textContent = "Usuario o contraseña incorrectos";
    errorContrasena.style.display = "block";
  }
});

// Limpiar errores al escribir
inputUsuario.addEventListener("input", function() {
  this.classList.remove("error");
  errorUsuario.style.display = "none";
});
inputContrasena.addEventListener("input", function() {
  this.classList.remove("error");
  errorContrasena.style.display = "none";
});
