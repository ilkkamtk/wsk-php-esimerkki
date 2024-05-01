'use strict';

const map = L.map('map').setView([60.224, 24.758], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([60.224, 24.758])
  .addTo(map)
  .bindPopup('Our headquarters.')
  .openPopup();
