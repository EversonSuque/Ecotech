// Inicialização do mapa
const map = L.map('map').setView([-20.3155, -40.3128], 10); // Posição inicial no Espírito Santo

// Adiciona camada do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marcadores de locais de coleta
const locaisColeta = [
    { lat: -20.2976, lng: -40.2958, nome: 'Empresa Coleta A' },
    { lat: -20.3222, lng: -40.3388, nome: 'Empresa Coleta B' },
    { lat: -20.3453, lng: -40.2972, nome: 'Empresa Coleta C' }
];

locaisColeta.forEach(local => {
    L.marker([local.lat, local.lng]).addTo(map)
        .bindPopup(local.nome)
        .openPopup();
});
