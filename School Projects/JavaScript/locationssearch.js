// Sample location data (you can replace this with your own data)
const locations = [
    { name: "Montana", services: ["Guided Hiking", "(Bozeman, MT)",]},
    { name: "Montana", services: ["Fly Fishing", "(Livingston, MT) - Yellowstone River"]},
    { name: "Alaska", services: ["Guided Fishing", "(Anchorage, AK) - Knik Arm",]},
    { name: "Alaska", services: ["Deep Sea Fishing", "(Juneau, AK) - Gulf of Alaska",]}
];

function searchLocations() {
    const input = document.getElementById("locationInput").value.trim().toLowerCase();
    const filteredLocations = locations.filter(location => location.name.toLowerCase().includes(input));

    displayLocations(filteredLocations);
}

function displayLocations(locations) {
    const locationsList = document.getElementById("locationsList");
    locationsList.innerHTML = ""; // Clear previous results

    if (locations.length === 0) {
        locationsList.innerHTML = "<p>No locations found.</p>";
        return;
    }

    const ul = document.createElement("ul");
    locations.forEach(location => {
        const li = document.createElement("li");
        li.textContent = `${location.name} - Services: ${location.services.join(", ")}`;
        ul.appendChild(li);
    });

    locationsList.appendChild(ul);

}

document.getElementById("locationInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchLocations();
    }
});

