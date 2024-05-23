"use strict"

document.addEventListener("DOMContentLoaded", init);

function init() {
    populateDropdown("location");
    setupEventListeners();
}

function populateDropdown(type) {
    const dropdown = document.getElementById("parkDropdown");
    dropdown.innerHTML = "";  // Clear existing options
    const fragment = document.createDocumentFragment();

    if (type === "location") {
        locationsArray.forEach((locationData) => {
            const option = document.createElement("option");
            option.value = locationData;
            option.textContent = locationData;
            fragment.appendChild(option);
        });
    } else if (type === "type") {
        parkTypesArray.forEach((typeData) => {
            const option = document.createElement("option");
            option.value = typeData;
            option.textContent = typeData;
            fragment.appendChild(option);
        });
    }

    dropdown.appendChild(fragment);
}

function setupEventListeners() {
    const dropdown = document.getElementById("parkDropdown");
    const locationBtn = document.getElementById("locationBtn");
    const typeBtn = document.getElementById("parkTypeBtn");

    dropdown.addEventListener("change", filterParks);
    locationBtn.addEventListener("change", () => {
        if (locationBtn.checked) {
            populateDropdown("location");
            filterParks();
        }
    });
    typeBtn.addEventListener("change", () => {
        if (typeBtn.checked) {
            populateDropdown("type");
            filterParks();
        }
    });
}

function filterParks() {
    const selectedOption = document.getElementById("parkDropdown").value;
    const searchByLocation = document.getElementById("locationBtn").checked;

    const filteredParks = nationalParksArray.filter(park => {
        if (searchByLocation) {
            return park.State === selectedOption;
        } else {
            return parkTypesArray.some(type => 
                park.LocationName.toLowerCase().includes(type.toLowerCase()) &&
                type.toLowerCase() === selectedOption.toLowerCase()
            );
        }
    });

    displayParks(filteredParks);
}

function displayParks(parks) {
    const tableBody = document.getElementById("parksTableBody");
    tableBody.innerHTML = "";

    parks.forEach(park => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = park.LocationName;
        row.appendChild(nameCell);

        const addressCell = document.createElement("td");
        addressCell.textContent = park.Address;
        row.appendChild(addressCell);

        const cityCell = document.createElement("td");
        cityCell.textContent = park.City;
        row.appendChild(cityCell);

        const stateCell = document.createElement("td");
        stateCell.textContent = park.State;
        row.appendChild(stateCell);

        const zipCell = document.createElement("td");
        zipCell.textContent = park.ZipCode;
        row.appendChild(zipCell);

        const phoneCell = document.createElement("td");
        phoneCell.textContent = park.Phone;
        row.appendChild(phoneCell);

        tableBody.appendChild(row);
    });
}
