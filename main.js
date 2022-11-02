"use strict";

const campContainer = document.querySelector(".camp-container");

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