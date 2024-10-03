function login(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element) {
    element.remove();
}

let array = [13, 37];  // Inicializa el array con los valores de likes actuales.
let span = [
    document.querySelector("#post-0"),
    document.querySelector("#post-1")
];

function like(id) {
    array[id]++;  // Incrementa el número de likes en el array de 1 en 1 .
    span[id].innerHTML = `${array[id]} likes`;  
}
