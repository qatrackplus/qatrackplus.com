$(function(){
    var locs = [
        {
            name: "Ali Osman Sönmez Oncology Hospital, Bursa, Turkey",
            location: {'lat': 40.2050211, 'lng': 29.0354323}
        },
        {
            name: "Allan Blair Cancer Centre, Regina, Canada",
            location: {'lat': 50.4452112, 'lng': -104.6188944}
        },
        {
            name: "Auckland Radiation Oncology, Auckland, New Zealand",
            location: {'lat': -36.8733367, 'lng': 174.7699663}
        },
        {
            name: "BC Cancer Agency, Abbotsford Centre, Abbotsford, B.C., Canada",
            location: {'lat': 49.0368661, 'lng': -122.3147102}
        },
        {
            name: "BC Cancer Agency, Centre for the North, Prince George, B.C., Canada",
            location: {'lat': 53.9135106, 'lng': -122.7660518}
        },
        {
            name: "BC Cancer Agency, Nuclear Medicine Dept, Vancouver, B.C., Canada",
            location: {'lat': 49.262338, 'lng': -123.1216676}
        },
        {
            name: "BC Cancer Agency, Dept of Medical Physics, Vancouver, B.C., Canada",
            location: {'lat': 49.2620043, 'lng': -123.1192744}
        },
        {
            name: "Bradford Royal Infirmary",
            location: {'lat': 53.8066774, 'lng': -1.8011412}
        },
        {
            name: "Central Coast Cancer Centre, Gosford, NSW, Australia",
            location: {'lat': -33.4202961, 'lng': 151.3372165}
        },
        {
            name: "Centro de Oncologia Campinas, Campinas, São Paulo, Brazil",
            location: {'lat': -22.8270015, 'lng': -47.0786005}
        },
        {
            name: "Centre Intégré de Cancérologie de Laval, Laval, Canada",
            location: {'lat': 45.6017659, 'lng': -73.7088927}
        },
        {
            name: "Centre Oscar Lambret, Lille, France",
            location: {'lat': 50.6124605, 'lng': 3.0303796}
        },
        {
            name: "Centro Oncológico Anna Rocca de Bonatti,Curuzú Cuatiá, Corrientes, Argentina",
            location: {'lat': -29.7906672, 'lng': -58.0656747}
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
            name: "CHU de Quèbec, Quèbec, Canada",
            location: {'lat': 46.8301795, 'lng': -71.2466938}
        },
        {
            name: "CHU de Sherbrooke, Sherbrooke, Canada",
            location: {'lat': 45.4488134, 'lng': -71.8708584}
        },
        {
            name: "Cross Cancer Institute, Edmonton, Canada",
            location: {'lat': 53.5182657, 'lng': -113.5332726}
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
            name: "Farrer Park Hospital, Singapore",
            location: {'lat': 1.31256, 'lng': 103.8517084}
        },
        {
            name: "The First Affiliated Hospital of Xiamen University",
            location: {'lat': 24.4498589, 'lng': 118.0864216}
        },
        {
            name: "Grand River Regional Cancer Centre, Kitchener, Canada",
            location: {'lat': 43.4564538, 'lng': -80.5123481}
        },
        {
            name: "Gatineau Hospital Cancer Centre",
            location: {'lat': 45.4926766, 'lng': -75.5884803}
        },
        {
            name: "Harley St Clinic, HCA Healthcare, Radiotherapy Dpt. London, UK",
            location: {'lat': 51.5199992, 'lng': -0.147719}
        },
        {
            name: "Health Sciences North, Sudbury, Ontario, Canada",
            location: {'lat': 46.4671897, 'lng': -80.998089}
        },
        {
            name: "Hospital Charles-Le Moyne, Longueuil, Canada",
            location: {'lat': 45.4969984, 'lng': -73.4859921}
        },
        {
            name: "Hôpital Maisonneuve-Rosemont, Montréal, Canada",
            location: {'lat': 45.5736275, 'lng': -73.5609442}
        },
        {
            name: "Hospital General Universitario Gregorio Marañón, Madrid, Spain",
            location: {'lat': 40.41925, 'lng': -3.67176}
        },
        {
            name: "Hospital Plató, Barcelona, Spain",
            location: {'lat': 41.4013527, 'lng': 2.1421196}
        },
        {
            name: "Hospital Universitario Virgen de las Nieves, Granada, Spain",
            location: {'lat': 37.1886676, 'lng': -3.6125441}
        },
        {
            name: "Institut de Cancérologie de Bourgogne, Dijon, France",
            location: {'lat': 47.3126608, 'lng': 5.0418624}
        },
        {
            name: "Institut de Cancérologie de Brétillien, Rennes, France",
            location: {'lat': 48.136799, 'lng': -1.672058}
        },
        {
            name: "Instituto de Radiologia - Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo, São Paulo, Brazil",
            location: {'lat': -23.5577288, 'lng': -46.6724096}
        },
        {
            name: "Institut Jules Bordet, Brussels, Belgium",
            location: {'lat': 50.833366, 'lng': 4.3448789}
        },
        {
            name: "Juravinski Cancer Centre, Hamilton, Canada",
            location: {'lat': 43.239889, 'lng': -79.84836}
        },
        {
            name: "Kathleen Kilgour Centre, Tauranga, New Zealand",
            location: {'lat': -37.708459, 'lng': 176.1443569}
        },
        {
            name: "King Fahad Specialist Hospital, Dammam, Saudi Arabia",
            location: {'lat': 26.4129069, 'lng': 50.0986192}
        },
        {
            name: "NHS Tayside, Dundee, UK",
            location: {'lat': 56.4636063, 'lng': -3.0397591}
        },
        {
            name: "Northwestern Medicine Chicago Proton Center, USA",
            location: {'lat': 41.8047425, 'lng': -88.1604582}
        },
        {
            name: "Odette Cancer Centre, Sunnybrook, Toronto, Canada",
            location: {'lat': 43.653226, 'lng': -79.3831843}
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
            name: "Royal Derby Hospital, Derby, United Kingdom",
            location: {'lat': 52.9105855369827, 'lng': -1.512807885266634}
        },
        {
            name: "Royal Free NHS Foundation Trust, London, United Kingdom",
            location: {'lat': 51.5528534, 'lng': -0.1728672}
        },
        {
            name: "The Royal Marsden NHS Foundation Trust, London, United Kingdom",
            location: {'lat': 51.4908705, 'lng': -0.1750007}
        },
        {
            name: "Royal Preston Hospital, NHS Foundation Trust, Preston, United Kingdom",
            location: {'lat': 53.7903928, 'lng': -2.7091474}
        },
        {
            name: "Royal Surrey County Hospital, Guildford, United Kingdom",
            location: {'lat': 51.1785487, 'lng': -0.7192659}
        },
        {
            name: "Royal Sussex County Hospital, Brighton, United Kingdom",
            location: {'lat': 50.8180561, 'lng': -0.1191133}
        },
        {
            name: "Saskatoon Cancer Center, Saskatoon, Canada",
            location: {'lat': 52.13277069999999, 'lng': -106.6405069}
        },
        {
            name: "Saint John Regional Hospital, Dept. of Radiation Oncology Saint John, New Brunswick, Canada",
            location: {'lat': 45.302908, 'lng': -66.0876756}
        },
        {
            name: "Sociedad de Lucha Contra el Cáncer SOLCA, Guayaquil, Ecuador",
            location: {'lat': -2.1738805, 'lng': -79.8842409}
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
            name: "Sunrise Centre, Royal Cornwall Hospitals Trust, Truro, UK",
            location: {'lat': 50.2668579, 'lng': -5.0945027}
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
            name: 'Uf Health Proton Therapy Institute, Jacksonville, FL, USA',
            location: {'lat': 30.3491945, 'lng': -81.6651222}

        },
        {
            name: 'University Hospital - St Ivan Rilski, Sofia, Bulgaria',
            location: {'lat': 42.682311, 'lng': 23.3003315}
        },
        {
            name: 'University Hospital Centre Zagreb, Zagreb, Croatia',
            location: {'lat': 45.8240378, 'lng': 16.004482}

        },
        {
            name: 'University of Vermont Medical Center',
            location: {'lat': 44.4787572, 'lng': -73.1962002}

        },
        {
            name: "Velindre Cancer Centre, Cardiff, Wales",
            location: {'lat': 51.5162452, 'lng': -3.2306402}
        },
        {
            name: "Virgen Macarena Hospital, Seville, Spain",
            location: {'lat': 37.4065862, 'lng': -5.9890019}
        },
        {
            name: "Zhengzhou University Aff. No. 1 Hosp, ZhengZhou City, He Nan Province, China",
            location: {'lat': 34.752941, 'lng': 113.64266}
        }
    ];

    var map = L.map('map').setView([45.4215296, -75.6971930999999951], 2);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
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
