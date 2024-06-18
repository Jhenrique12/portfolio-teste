// Selecionar os elementos do menu de navegação
const navLinks = document.querySelectorAll(".nav li a");

// Adicionar um evento de clique em cada link
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    // Remover a classe active do link anterior
    document.querySelector(".nav li a.active").classList.remove("active");
    // Adicionar a classe active ao link atual
    e.target.classList.add("active");
    
  });
});

// Selecionar o botão de enviar do formulário de contato
const sendButton = document.querySelector(".contact-form button");

// Adicionar um evento de clique no botão
sendButton.addEventListener("click", e => {
  // Prevenir o comportamento padrão do botão
  e.preventDefault();
  // Obter os valores dos campos do formulário
  const email = document.querySelector(".contact-form input[name='email']").value;
  const subject = document.querySelector(".contact-form input[name='subject']").value;
  const message = document.querySelector(".contact-form textarea[name='message']").value;
  // Validar se os campos não estão vazios
  if (email && subject && message) {
    // Mostrar um alerta de sucesso
    alert("Mensagem enviada com sucesso!");
  
  } else {
    // Mostrar um alerta de erro
    alert("Por favor, preencha todos os campos!");
  }
});


