"use strict"

document.addEventListener("DOMContentLoaded", init);

function init () {
    populateDropdown();
    setupEventListeners();
}

function populateDropdown(){
    const dropdown = document.getElementById("parkDropdown");
    const fragment = document.createDocumentFragment();

    locationsArray.forEach((locationData) => {
        const option = document.createElement("option");
        option.value = locationData;
        option.textContent = locationData;
        fragment.appendChild(option);
    });

    dropdown.appendChild(fragment);
}
