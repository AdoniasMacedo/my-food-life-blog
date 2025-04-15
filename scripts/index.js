//Animação para botão de menu e side menu
const buttonMenu = document.getElementById("button-menu");
const sideMenu = document.getElementById("links-menu");
const overlay = document.getElementById("overlay");

buttonMenu.addEventListener("click", menu)

overlay.addEventListener("click", menu)

function menu()
{
    if (window.matchMedia("(max-width: 425px)").matches)
    {
        buttonMenu.classList.toggle("active");
        sideMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    }    
}

//Scroller do site
function scrollerView(idName)
{
    document.getElementById(idName).scrollIntoView({
        behavior:"smooth"
    })
}

//Calculadora IMC
// Função para trocar o sexo selecionado
const sexoBtns = document.querySelectorAll(".sexo-btn");
let sexoSelecionado = "Mulher"; // valor padrão

sexoBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    sexoBtns.forEach(b => b.classList.remove("ativo"));
    btn.classList.add("ativo");
    sexoSelecionado = btn.innerText;
  });
});

// Cálculo de IMC
document.querySelector(".calcular-btn").addEventListener("click", () => {
  const idade = document.getElementById("idade").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;

  // Validação básica
  if (!idade || !altura || !peso) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const alturaM = altura / 100; // convertendo cm para metros
  const imc = peso / (alturaM * alturaM);
  const imcArredondado = imc.toFixed(1);

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  // Mostrar resultado
  const resultadoDiv = document.getElementById("resultado-imc");
  resultadoDiv.innerHTML = `
    <div>
        <h3>Resultado:</h3>
        <p>Sexo: ${sexoSelecionado}</p>
        <p>Idade: ${idade}</p>
        <p>IMC: ${imcArredondado} (${classificacao})</p>
    </div>
  `;

  // Scroll suave até o resultado
  resultadoDiv.scrollIntoView({ behavior: "smooth" });
});