// Função para verificar a posição da página e ativar a animação quando estiver no topo
function verificarPosicaoTopo() {
  const sombra = document.getElementById('sombra');
  const distanciaDoTopo = window.scrollY;

  if (distanciaDoTopo === 0) {
    sombra.classList.add('mostrar'); // Adiciona a classe 'mostrar' para ativar a animação
  }
}

// Adicione um ouvinte de evento de rolagem
window.addEventListener('scroll', verificarPosicaoTopo);

// Ative a animação quando a página carregar
document.addEventListener('DOMContentLoaded', verificarPosicaoTopo);

// Função para alternar entre light mode e dark mode
function escurecer() {
    var element = document.body;
    var isDarkMode = element.classList.contains("dark-mode");

    // Inverta o modo e salve a preferência no Local Storage
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);

    setDarkMode(isDarkMode); // Chama a função para definir o modo com base na preferência
}

// Função para definir o modo (light ou dark) com base na preferência
function setDarkMode(isDarkMode) {
    var element = document.body;
    if (isDarkMode) {
        element.classList.add("dark-mode"); // Ativa o dark mode
    } else {
        element.classList.remove("dark-mode"); // Ativa o light mode
    }
}

// Verifique o status do dark mode no carregamento da página
window.onload = function() {
  var isDarkMode = localStorage.getItem('darkMode') === 'true';
  setDarkMode(isDarkMode);
}

// Função para mostrar ou ocultar o botão "Voltar ao Topo" com base na posição da página
window.addEventListener("scroll", function() {
  var button = document.getElementById("voltar-ao-topo");
  if (window.scrollY > 200) {
      button.style.display = "block"; // Mostra o botão quando o usuário rola para baixo
  } else {
      button.style.display = "none"; // Oculta o botão quando o usuário está no topo
  }
});

// Função para manipular o clique no botão "Voltar ao Topo"
document.getElementById("voltar-ao-topo").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth" // Isso faz a rolagem ser suave
  });
});

// Função para alternar o menu em telas menores
function menuOnClick() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    document.getElementById("menumobile-bar").classList.toggle("change"); // Alterna a classe 'change' no botão de menu
    document.getElementById("navmobile").classList.toggle("change"); // Alterna a classe 'change' no menu mobile
    document.getElementById("menu-bg").classList.toggle("change-bg"); // Alterna a classe 'change-bg' no fundo do menu
  }
}
