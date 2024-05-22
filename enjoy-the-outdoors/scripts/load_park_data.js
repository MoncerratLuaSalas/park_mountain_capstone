"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const filterType = document.getElementById('filterType');
    const filterOptions = document.getElementById('filterOptions');
    const parkOptions = document.getElementById('parkOptions');
    const parkTableBody = document.getElementById('parkTable').querySelector('tbody');
    
    filterType.addEventListener('change', () => {
        populateFilterOptions();
        parkOptions.innerHTML = '';
        parkTableBody.innerHTML = '';
    });

    filterOptions.addEventListener('change', () => {
        populateParkOptions();
        parkTableBody.innerHTML = '';
    });

    parkOptions.addEventListener('change', () => {
        displayParkInfo();
    });

    function populateFilterOptions() {
        filterOptions.innerHTML = '';
        const selectedFilter = filterType.value;
        const optionsArray = selectedFilter === 'location' ? locationsArray : parkTypesArray;
        
        optionsArray.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            filterOptions.appendChild(optionElement);
        });
    }

    function populateParkOptions() {
        parkOptions.innerHTML = '';
        const selectedFilter = filterType.value;
        const selectedOption = filterOptions.value;

        const filteredParks = nationalParksArray.filter(park => {
            if (selectedFilter === 'location') {
                return park.State === selectedOption;
            } else {
                // For simplicity, assume all parks in nationalParksArray are of type "National Park"
                // Adjust logic accordingly if actual type information is available
                return true;
            }
        });

        filteredParks.forEach(park => {
            const optionElement = document.createElement('option');
            optionElement.value = park.LocationID;
            optionElement.textContent = park.LocationName;
            parkOptions.appendChild(optionElement);
        });
    }

    function displayParkInfo() {
        parkTableBody.innerHTML = '';
        const selectedParkID = parkOptions.value;
        const selectedPark = nationalParksArray.find(park => park.LocationID === selectedParkID);

        if (selectedPark) {
            const row = document.createElement('tr');
            Object.values(selectedPark).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            parkTableBody.appendChild(row);
        }
    }
    
    populateFilterOptions();
});
