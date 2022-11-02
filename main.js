"use strict";

const campContainer = document.querySelector(".camp-container");
let campSize = 0;

// Cosa volevo fare:

// document.getElementById('play').addEventListener('click', function(){
//     const difficulty = document.getElementById('difficulty').value;
//     if ( difficulty == "easy"){
//         campSize = 100;
//     }
// })

// function camp(campSize){
//     campContainer.innerHTML = "";
//     for (let i = 1; i <= campSize; i++) {
//         const campCell = document.createElement("div");
//         campCell.innerHTML = i;
//         campCell.classList.add("camp-cell-10");
//         campCell.addEventListener("click", function(){
//             console.log(this);
//             this.classList.add("cell-click");
//         })
//         campContainer.append(campCell);
//     }
// }


document.getElementById('play').addEventListener('click', function(){
    const difficulty = document.getElementById('difficulty').value;
    if ( difficulty == "easy"){
        campContainer.innerHTML = "";
        for (let i = 1; i <= 100; i++) {
            const campCell = document.createElement("div");
            campCell.innerHTML = i;
            campCell.classList.add("camp-cell-10");
            campCell.addEventListener("click", function(){
                console.log(this);
                this.classList.add("cell-click");
            })
            campContainer.append(campCell);
        }
    }
    else if ( difficulty == "normal"){
        campContainer.innerHTML = "";
        for (let i = 1; i <= 81; i++) {
            const campCell = document.createElement("div");
            campCell.innerHTML = i;
            campCell.classList.add("camp-cell-9");
            campCell.addEventListener("click", function(){
                console.log(this);
                this.classList.add("cell-click");
            })
            campContainer.append(campCell);
        }
    }
    else if ( difficulty == "hard"){
        campContainer.innerHTML = "";
        for (let i = 1; i <=49; i++) {
            const campCell = document.createElement("div");
            campCell.innerHTML = i;
            campCell.classList.add("camp-cell-7");
            campCell.addEventListener("click", function(){
                console.log(this);
                this.classList.add("cell-click");
            })
            campContainer.append(campCell);
        }
    }
})