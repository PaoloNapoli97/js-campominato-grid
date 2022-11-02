"use strict";

const campContainer = document.querySelector(".camp-container");
let campSize = 0;
let classAdd = "";

// Richiamo e modifica funzione a seconda esigenze durante il click bottone

document.getElementById('play').addEventListener('click', function(){
    const difficulty = document.getElementById('difficulty').value;
    if ( difficulty == "easy"){
        campSize = 100;
        classAdd = "camp-cell-10";
        camp(campSize);
    }
    else if ( difficulty == "normal"){
        campSize = 81;
        classAdd = "camp-cell-9";
        camp(campSize);
    }
    else if ( difficulty == "hard"){
        campSize = 49;
        classAdd = "camp-cell-7";
        camp(campSize);
    }
})

function camp(campSize){
    campContainer.innerHTML = "";
    for (let i = 1; i <= campSize; i++) {
        const campCell = document.createElement("div");
        campCell.innerHTML = i;
        campCell.classList.add(classAdd);
        campCell.addEventListener("click", function(){
            console.log(this);
            this.classList.add("cell-click");
        })
        campContainer.append(campCell);
    }
}

// Vecchio metodo senza richiamo funzione

// document.getElementById('play').addEventListener('click', function(){
//     const difficulty = document.getElementById('difficulty').value;
//     if ( difficulty == "easy"){
//         campContainer.innerHTML = "";
//         for (let i = 1; i <= 100; i++) {
//             const campCell = document.createElement("div");
//             campCell.innerHTML = i;
//             campCell.classList.add("camp-cell-10");
//             campCell.addEventListener("click", function(){
//                 console.log(this);
//                 this.classList.add("cell-click");
//             })
//             campContainer.append(campCell);
//         }
//     }
//     else if ( difficulty == "normal"){
//         campContainer.innerHTML = "";
//         for (let i = 1; i <= 81; i++) {
//             const campCell = document.createElement("div");
//             campCell.innerHTML = i;
//             campCell.classList.add("camp-cell-9");
//             campCell.addEventListener("click", function(){
//                 console.log(this);
//                 this.classList.add("cell-click");
//             })
//             campContainer.append(campCell);
//         }
//     }
//     else if ( difficulty == "hard"){
//         campContainer.innerHTML = "";
//         for (let i = 1; i <=49; i++) {
//             const campCell = document.createElement("div");
//             campCell.innerHTML = i;
//             campCell.classList.add("camp-cell-7");
//             campCell.addEventListener("click", function(){
//                 console.log(this);
//                 this.classList.add("cell-click");
//             })
//             campContainer.append(campCell);
//         }
//     }
// })