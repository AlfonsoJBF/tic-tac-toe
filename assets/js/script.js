let matrizCasillas = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
]


let turnoX = true;
let turnoO = false;

function verTurnos(){
    if(turnoX){
        document.getElementById("turnoX").innerHTML= "Turno X";
        document.getElementById("turnoO").innerHTML= "";
    }  else if(turnoO) {
        document.getElementById("turnoX").innerHTML = "";
        document.getElementById("turnoO").innerHTML = "turno O";
    }
}
verTurnos();


let scoreX = 0;
let scoreO = 0;
let scoreTotalGames = 0;


//Creamos la comprobacion de la matriz
function comprobarCasillas(){

    //comparamos por filas
    const primeraFila = matrizCasillas[0];
    const segundaFila = matrizCasillas[1];
    const terceraFila = matrizCasillas[2];
    const filaX = primeraFila.every(elemento => elemento ==="X") || segundaFila.every(elemento => elemento ==="X") || terceraFila.every(elemento => elemento ==="X") ;
    const filaO = primeraFila.every(elemento => elemento ==="O") || segundaFila.every(elemento => elemento ==="O")  || terceraFila.every(elemento => elemento ==="O"); 

    //comparamos por columnas
    const primeraColumna = [matrizCasillas[0][0], matrizCasillas[1][0], matrizCasillas[2][0]];
    const segundaColumna = [matrizCasillas[0][1], matrizCasillas[1][1], matrizCasillas[2][1]];
    const terceraColumna = [matrizCasillas[0][2], matrizCasillas[1][2], matrizCasillas[2][2]];
    const columnaX = primeraColumna.every(elemento => elemento === "X") || segundaColumna.every(elemento => elemento === "X" || terceraColumna.every(elemento => elemento === "X"));
    const columnaO = primeraColumna.every(elemento => elemento === "O") || segundaColumna.every(elemento => elemento === "O") || terceraColumna.every(elemento => elemento === "O") ;

    //comparamos por diagonales
    const diagonalDescendente = [matrizCasillas[0][0], matrizCasillas[1][1], matrizCasillas[2][2]];
    const diagonalAscendente = [matrizCasillas[0][2], matrizCasillas[1][1], matrizCasillas[2][0]];
    const diagonalX = diagonalDescendente.every(elemento => elemento === "X") || diagonalAscendente.every(elemento => elemento === "X");
    const diagonalO = diagonalDescendente.every(elemento => elemento === "O") || diagonalAscendente.every(elemento => elemento === "O");

    //comprobamos el empate 
    let empate = false;

    empate = (matrizCasillas.every(fila => fila.every(elemento => elemento !== undefined)));

    let winner = document.getElementById("winner");
   
    switch(true){
        case (filaX):    
        case(columnaX):    
        case(diagonalX):
            winner.innerHTML = "Gana el jugador X";
            setTimeout("openModal()", 500);
            scoreX++;
            scoreTotalGames++;
            break ;
        case (filaO):
        case(columnaO ):
        case(diagonalO):
        winner.innerHTML = "Gana el jugador O";
            setTimeout("openModal()", 500);
            scoreO++
            scoreTotalGames++;
            break;
        case (empate):
            winner.innerHTML = "Habeis empatado";
            setTimeout("openModal()", 500);
            scoreTotalGames++;
            break;
        default:
            break;
    }
}

let closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", resetGame);

//Activacion de las celdas
function generalClickHandler(){
    document.getElementById("celda1").addEventListener("click", celda1ClickHandler);
    document.getElementById("celda2").addEventListener("click", celda2ClickHandler);
    document.getElementById("celda3").addEventListener("click", celda3ClickHandler);
    document.getElementById("celda4").addEventListener("click", celda4ClickHandler);
    document.getElementById("celda5").addEventListener("click", celda5ClickHandler);
    document.getElementById("celda6").addEventListener("click", celda6ClickHandler);
    document.getElementById("celda7").addEventListener("click", celda7ClickHandler);
    document.getElementById("celda8").addEventListener("click", celda8ClickHandler);
    document.getElementById("celda9").addEventListener("click", celda9ClickHandler);
    
}

generalClickHandler();

function activarCelda1() {
    const celda = document.getElementById("celda1");
    if (turnoX == true) {
        celda.classList.add("X");
        matrizCasillas[0][0]="X";
        celda.removeEventListener("click", celda1ClickHandler);
        turnoX = false;
        turnoO = true;
    } else {
        celda.classList.add("O");
        matrizCasillas[0][0]="O";
        celda.removeEventListener("click", celda1ClickHandler);
        turnoX = true;
        turnoO = false;
    }
    verTurnos();
    comprobarCasillas();
    console.log(matrizCasillas);
}

function celda1ClickHandler() {
    activarCelda1();
}



function activarCelda2() {
    const celda = document.getElementById("celda2");
    if (turnoX == true) {
        celda.classList.add("X");
        matrizCasillas[0][1]="X";
        celda.removeEventListener("click", celda2ClickHandler);
        turnoX = false;
        turnoO = true;
    } else {
        celda.classList.add("O");
        matrizCasillas[0][1]="O";
        celda.removeEventListener("click", celda2ClickHandler);
        turnoX = true;
        turnoO = false;
    }
    verTurnos();
    comprobarCasillas();
    console.log(matrizCasillas);
}

function celda2ClickHandler() {
    activarCelda2();
}




function activarCelda3() {
    const celda = document.getElementById("celda3");
    if (turnoX == true) {
        celda.classList.add("X");
        matrizCasillas[0][2]="X";
        celda.removeEventListener("click", celda3ClickHandler);
        turnoX = false;
        turnoO = true;
    } else {
        celda.classList.add("O");
        matrizCasillas[0][2]="O";
        celda.removeEventListener("click", celda3ClickHandler);
        turnoX = true;
        turnoO = false;
    }
    verTurnos();
    comprobarCasillas();
    console.log(matrizCasillas);
}

function celda3ClickHandler() {
    activarCelda3();
}



function activarCelda4() {
    const celda = document.getElementById("celda4");
    if (turnoX == true) {
        celda.classList.add("X");
        matrizCasillas[1][0]="X";
        celda.removeEventListener("click", celda4ClickHandler);
        turnoX = false;
        turnoO = true;
    } else {
        celda.classList.add("O");
        matrizCasillas[1][0]="O";
        celda.removeEventListener("click", celda4ClickHandler);
        turnoX = true;
        turnoO = false;
    }
    verTurnos();
    comprobarCasillas();
    console.log(matrizCasillas);
}

function celda4ClickHandler() {
    activarCelda4();
}



function activarCelda5() {
    const celda = document.getElementById("celda5");
    if (turnoX == true) {
        celda.classList.add("X");
        matrizCasillas[1][1]="X";
        celda.removeEventListener("click", celda5ClickHandler);
        turnoX = false;
        turnoO = true;
    } else {
        celda.classList.add("O");
        matrizCasillas[1][1]="O";
        celda.removeEventListener("click", celda5ClickHandler);
        turnoX = true;
        turnoO = false;
    }
    verTurnos();
    comprobarCasillas();
    console.log(matrizCasillas);
}

function celda5ClickHandler() {
    activarCelda5();
}



function activarCelda6() {
    const celda = document.getElementById("celda6");
    if (turnoX == true) {
        celda.classList.add("X");
        matrizCasillas[1][2]="X";
        celda.removeEventListener("click", celda6ClickHandler);
        turnoX = false;
        turnoO = true;
    } else {
        celda.classList.add("O");
        matrizCasillas[1][2]="O";
        celda.removeEventListener("click", celda6ClickHandler);
        turnoX = true;
        turnoO = false;
    }
    verTurnos();
    comprobarCasillas();
    console.log(matrizCasillas);
}

function celda6ClickHandler() {
    activarCelda6();
}



function activarCelda7() {
    const celda = document.getElementById("celda7");
    if (turnoX == true) {
        celda.classList.add("X");
        matrizCasillas[2][0]="X";
        celda.removeEventListener("click", celda7ClickHandler);
        turnoX = false;
        turnoO = true;
    } else {
        celda.classList.add("O");
        matrizCasillas[2][0]="O";
        celda.removeEventListener("click", celda7ClickHandler);
        turnoX = true;
        turnoO = false;
    }
    verTurnos();
    comprobarCasillas();
    console.log(matrizCasillas);
}

function celda7ClickHandler() {
    activarCelda7();
}



function activarCelda8() {
    const celda = document.getElementById("celda8");
    if (turnoX == true) {
        celda.classList.add("X");
        matrizCasillas[2][1]="X";
        celda.removeEventListener("click", celda8ClickHandler);
        turnoX = false;
        turnoO = true;
    } else {
        celda.classList.add("O");
        matrizCasillas[2][1]="O";
        celda.removeEventListener("click", celda8ClickHandler);
        turnoX = true;
        turnoO = false;
    }
    verTurnos();
    comprobarCasillas();
    console.log(matrizCasillas);
}

function celda8ClickHandler() {
    activarCelda8();
}



function activarCelda9() {
    const celda = document.getElementById("celda9");
    if (turnoX == true) {
        celda.classList.add("X");
        matrizCasillas[2][2]="X";
        celda.removeEventListener("click", celda9ClickHandler);
        turnoX = false;
        turnoO = true;
    } else {
        celda.classList.add("O");
        matrizCasillas[2][2]="O";
        celda.removeEventListener("click", celda9ClickHandler);
        turnoX = true;
        turnoO = false;
    }
    verTurnos();
    comprobarCasillas();
    console.log(matrizCasillas);
}

function celda9ClickHandler() {
    activarCelda9();
}



//Actualizar el score
function actualizarScore(){
    document.querySelector(".scoreX").innerHTML = scoreX;
    document.querySelector(".scoreO").innerHTML = scoreO;
    document.querySelector(".totalGames").innerHTML = scoreTotalGames;
}
//Reseteo del juego
function resetGame(){
    let celdas = document.querySelectorAll(".celda");
    const modal = document.getElementById("modal");

    modal.style.display = "none";

    turnoO = false;
    turnoX = true;
    
    matrizCasillas = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ]
    console.log(matrizCasillas);
    celdas.forEach(element =>  element.classList.remove("X", "O"));

    generalClickHandler();
    actualizarScore();
    verTurnos();
}

function openModal(){
    const modal = document.getElementById("modal");

    modal.style.display = "flex";
}


