const option = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

// get values from html
const spanLat = document.querySelector("span[data-lat]").dataset.lat
const spanLng = document.querySelector("span[data-lng]").dataset.lng

// create map
const map = L.map('mapid', option).setView([spanLat, spanLng], 16);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [178, 2]
})

// create popup overlay


// create and add maker

L.marker([spanLat, spanLng], { icon }).addTo(map)


// Image gallery

function selectImage(event) {
    const button = event.currentTarget
    
    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    
   
    
    
    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img");
    // atualizar o container de image 
    imageContainer.src = image.src
    
    // adicionar a class .active para este botão
    button.classList.add("active");
}


























