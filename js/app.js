document.addEventListener("DOMContentLoaded", function() {
    var uluru = {lat: 51.989392, lng: 20.150202};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
});

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "Rancho Pansa"
    });

    var infowindow = new google.maps.InfoWindow({
        content: "<p><b>Rancho Pansa</b></p><p>Nowobielańska 789</p>"
    });

    marker.addListener("click", function() {
        infowindow.open(map, marker);
    });


  });
