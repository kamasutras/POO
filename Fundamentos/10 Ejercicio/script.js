let count = 0;

function contadorCartas(carta) {
    switch(carta) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            count += 1;
            break;
        case '7':
        case '8':
        case '9':
            break;
        case '10':
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
        default:
            alert("Agrega un valor valido :(");
            break;
    }

    if (count > 0) {
        return count + " Apostar";
    } else {
        return count + " Mantener";
    }
}

function cc() {
    count = 0; 
    const input = document.getElementById("cardInput").value.trim().toUpperCase();
    const cards = input.split(',').map(card => card.trim());
    let result;

    cards.forEach(card => {
        result = contadorCartas(card);
    });

    document.getElementById("resultado").innerHTML = "<h2>" + result + "</h2>";
}