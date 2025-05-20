var botaoEntrar = document.getElementById("submit")

function login() {
  // Pega o valor do campo email
  var campoEmail = document.getElementById("email").value
  
  // Pega o valor do campo senha
  var campoSenha = document.getElementById("password").value

  // Verifica se o campo email e senha estão preenchidos
  if( campoEmail == "admin@admin.com" && campoSenha == "admin123" ) {
   
    window.location.replace("dashboard.html")

  } else {

    alert("Email ou senha incorretos")

  }

  console.log("Entrou na função login")
}

botaoEntrar.addEventListener("click", login )