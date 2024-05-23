"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    populateDropdown();
    setupEventListeners();
  }

  function populateDropdown() {
    const dropdown = document.getElementById("mountainDropdown");
    const fragment = document.createDocumentFragment();

    mountainsArray.forEach((mountainData) => {
        const option = document.createElement("option");
        option.value = mountainData.name;
        option.textContent = `${mountainData.name}`;
        fragment.appendChild(option);
    });

    dropdown.appendChild(fragment);
  }

  function setupEventListeners() {
    document.getElementById("mountainDropdown")
    .addEventListener("change", showSelectedMountain);
  }

  function showSelectedMountain() {
    const dropwdown = document.getElementById("mountainDropdown");
    const selectedMountainName = dropwdown.value;
    const detailsArea = document.getElementById("mountainDetails");

    const selectedMountain = mountainsArray.find((mountainData) => mountainData.name === selectedMountainName);

    if(selectedMountain) {
        detailsArea.innerHTML = `
        <div class="card mtn-card">
        <div class="card-body">
          <h5 class="card-title">${selectedMountain.name}</h5>
          <p class="card-text"><strong>Elevation:</strong> ${selectedMountain.elevation}</p>
          <p class="card-text"><strong>Description:</strong> ${selectedMountain.desc}</p>
          <img src="${selectedMountain.img}" class="card-img-top" alt="${selectedMountain.name}">
        </div>
      </div>`;
    } else {
        detailsArea.innerHTML = "No mountain selected"
    }
  }