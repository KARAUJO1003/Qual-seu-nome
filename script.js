function pegar() {
    var nome = document.getElementById("input").value.trim().toLowerCase();
  
    if (nome === "sara" || nome === "sara maria") {
      alert("Correto, "+ nome.trim().toUpperCase() +  " Você é o meu amor!🥰😍");
    } else {
      alert("Resposta incorreta");
    }
  }
  
