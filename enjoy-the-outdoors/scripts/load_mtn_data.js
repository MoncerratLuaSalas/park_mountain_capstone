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
        <strong>Name:</strong> ${selectedMountain.name}<br>
        <strong>Elevation:</strong> ${selectedMountain.elevation}<br>
        <strong>Description:</strong> ${selectedMountain.desc}`;
    } else {
        detailsArea.innerHTML = "No mountain selected"
    }
  }