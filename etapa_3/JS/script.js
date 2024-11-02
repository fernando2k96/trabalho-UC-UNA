// CPF
document.getElementById("cpf").addEventListener("input", function (e) {
    let cpf = e.target.value.replace(/\D/g, ""); o
    if (cpf.length > 11) cpf = cpf.slice(0, 11); 
  
    
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  
    e.target.value = cpf;
  });
  

  function validateCPF() {
    const cpfInput = document.getElementById("cpf");
    const cpfError = document.getElementById("cpf-error");
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  
    if (!cpfPattern.test(cpfInput.value)) {
      cpfError.style.display = "inline";
      cpfInput.classList.add("invalid");
    } else {
      cpfError.style.display = "none";
      cpfInput.classList.remove("invalid");
    }
  }
  
  //EMAIL

  function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = "inline";
      emailInput.classList.add("invalid");
    } else {
      emailError.style.display = "none";
      emailInput.classList.remove("invalid");
    }
  }
  



//CARROSSEL
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);

// FUNÇÃO ADD UCS
function addUC() {
    const newUC = prompt("Digite o nome da nova UC:");
    if (newUC) {
      const ucList = document.getElementById("uc-list");
      const listItem = document.createElement("li");
      listItem.textContent = newUC;
      listItem.draggable = true;
  
      
      listItem.innerHTML += `<button onclick="moveUp(this)">▲</button> <button onclick="moveDown(this)">▼</button>`;
      ucList.appendChild(listItem);
  
      
      addDragEvents(listItem);
    }
  }
  
 
  function moveUp(button) {
    const listItem = button.parentElement;
    const prevItem = listItem.previousElementSibling;
    if (prevItem) {
      listItem.parentElement.insertBefore(listItem, prevItem);
    }
  }
  
 
  function moveDown(button) {
    const listItem = button.parentElement;
    const nextItem = listItem.nextElementSibling;
    if (nextItem) {
      listItem.parentElement.insertBefore(nextItem, listItem);
    }
  }
  
 
  function addDragEvents(item) {
    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.innerHTML);
      e.target.classList.add("dragging");
    });
  
    item.addEventListener("dragover", (e) => {
      e.preventDefault();
      const draggingItem = document.querySelector(".dragging");
      if (draggingItem && e.target !== draggingItem) {
        const list = item.parentNode;
        const items = Array.from(list.querySelectorAll("li"));
        const currentPos = items.indexOf(e.target);
        const draggingPos = items.indexOf(draggingItem);
  
        if (draggingPos > currentPos) {
          list.insertBefore(draggingItem, e.target);
        } else {
          list.insertBefore(draggingItem, e.target.nextSibling);
        }
      }
    });
  
    item.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });
  }
  

  document.querySelectorAll("#uc-list li").forEach(addDragEvents);

  // + info 
  function addInfo() {
    const infoContainer = document.getElementById("additional-info");
    const newInfoInput = document.getElementById("new-info");
    const newInfoText = newInfoInput.value.trim();
  
    
    if (newInfoText !== "") {
      const newInfoElement = document.createElement("p");
      newInfoElement.textContent = newInfoText;
      infoContainer.appendChild(newInfoElement);
  
    
      newInfoInput.value = "";
    } else {
      alert("Por favor, insira uma informação.");
    }
  }
  
  