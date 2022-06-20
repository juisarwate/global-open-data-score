mapboxgl.accessToken = "pk.eyJ1IjoianNhcndhdGUiLCJhIjoiY2t4NnI5ZjJyMDRucjJwcnl5NDh1Zml5cSJ9.qmI6QbbKDZ98r06dRnkSzQ";
var scoremap = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/jsarwate/cl3uhu68k001f14n9t35kdhva",
    zoom: 1.05,
    center: [13.599413, 29.673147],
    projection: {
        name: 'lambertConformalConic',
        center: [0, 30],
        parallels: [30, 30]
    }    
});

scoremap.on("load", function () {
    scoremap.addLayer(
      {
        id: "countryoutline",
        type: "line",
        source: {
          type: "geojson",
          data: "data/countryscores.geojson",
        },
        paint: {
          "line-color": "#6193c7",
          "line-width": 0.8,
        },
      },
      "waterway-label"
    ); 

scoremap.addLayer(
      {
        id: "opendataScore",
        type: "fill",
        source: {
          type: "geojson",
          data: "data/statesElections.geojson",
        },
        paint: {
          "fill-color": "#ffffff",
          "fill-opacity": [
            "step",
            ["get", "score"],
            10,
            20,
            30,
            40,
            50,
            60,
            70,
            80,
            90,
          ],
        },
      },
     "countryoutline"
    );
});