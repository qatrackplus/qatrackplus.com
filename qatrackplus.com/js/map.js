$(function(){
    var locs = [
        {
            name: "Allan Blair Cancer Centre, Regina, Canada",
            location: {'lat': 50.4452112, 'lng': -104.6188944}
        },
        {
            name: "Auckland Radiation Oncology, Auckland, New Zealand",
            location: {'lat': -36.8733367, 'lng': 174.7699663}
        },
        {
            name: "CHUM, Montreal, Canada",
            location: {'lat': 45.5016889, 'lng': -73.567256}
        },
        {
            name: "CHU de Liège, Liège, Belgium",
            location: {'lat': 50.5744825, 'lng': 5.5696974}
        },
        {
            name: "Dr. H. Bliss Murphy Cancer Centre, Newfoundland, Canada",
            location: {'lat': 47.5719138, 'lng': -52.7441515}
        },
        {
            name: "Durham Regional Cancer Centre, Oshawa, Canada",
            location: {'lat': 43.9003755, 'lng': -78.8682023}
        },
        {
            name: "Hospital General Universitario Gregorio Marano, Madrid, Spain",
            location: {'lat': 40.4167754, 'lng': -3.7037902}
        },
        {
            name: "Hospital Plató, Barcelona, Spain",
            location: {'lat': 41.4013527, 'lng': 2.1421196}
        },
        {
            name: "Northwestern Medicine Chicago Proton Center, USA",
            location: {'lat': 41.8047425, 'lng': -88.1604582}
        },
        {
            name: "PEI Cancer Treatment Centre, Charlottetown, Canada",
            location: {'lat': 46.23824, 'lng': -63.13107040000001}
        },
        {
            name: "Queen's NRI Hospital, Visakhapatnam, India",
            location: {'lat': 17.7366519, 'lng': 83.3053694}
        },
        {
            name: "Saskatoon Cancer Center, Saskatoon, Canada",
            location: {'lat': 52.13277069999999, 'lng': -106.6405069}
        },
        {
            name: "South West Sydney Cancer Service, Australia",
            location: {'lat': -33.917507, 'lng': 150.920662}
        },
        {
            name: "St Bartholomews Radiotherapy Dpt, London, UK",
            location: {'lat': 51.5073509, 'lng': -0.1277583}
        },
        {
            name: "Odette Cancer Centre, Sunnybrook, Toronto, Canada",
            location: {'lat': 43.653226, 'lng': -79.3831843}
        },
        {
            name: "The Cancer Centre Eastern Caribbean, St John's, Antigua",
            location: {'lat': 17.1274104, 'lng': -61.84677199999999}
        },
        {
            name: "The Ottawa Hospital Cancer Centre, Ottawa, Canada",
            location: {'lat': 45.4215296, 'lng': -75.69719309999999}
        },
        {
            name: "The Ottawa Hospital Div. of Nuclear Med., Ottawa, Canada",
            location: {'lat': 45.4215296, 'lng': -75.69719309999999}
        },
        {
            name: "Tom Baker  Cancer Centre, Calgary, Canada",
            location: {'lat': 51.0486151, 'lng': -114.0708459}
        },
        {
            name: "VUUMC, Amsterdam, The Netherlands",
            location: {'lat': 52.3367691, 'lng': 4.8593454}
        },
    ];

    var map = L.map('map').setView([45.4215296, -75.6971930999999951], 2);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'randlet.p4opmmni',
        accessToken: 'pk.eyJ1IjoicmFuZGxldCIsImEiOiJjaWtqdHBpbDcwOHAydjBrbWI2bGl4NGdpIn0.ikjHyvgtmnT5ky5aOgM8rg'
    }).addTo(map);
    var markers = [];
    $.each(locs, function(idx, loc){
        var m = L.marker([loc.location.lat, loc.location.lng], {
            title: loc.name,
            alt: loc.name
        }).bindPopup('<span class="color-4">'+loc.name+'</span>').addTo(map);
        markers.push(m);
    });

    var allLocs = new L.featureGroup(markers);
    map.fitBounds(allLocs.getBounds());

});
