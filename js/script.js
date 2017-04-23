(function () {

	var gMapScript = 'https://maps.googleapis.com/maps/api/js?key={key}&callback=initMap',
		gMapKey = 'AIzaSyDFqo4ijQVQMeDgvaaF7Gdhs-HtWYTyW1U',
		gMap,
		gMapMarker,

		e = 'lafivill',
		address = {
			lat: 47.614149,
			lng: 19.0552439
		};

	(function constructor() {
		init();
	})();

	function init() {
		loadGoogleMaps();
		document.querySelector('[data-email]').setAttribute('href', 'mailto:' + e + '@gmaill.com');
	}

	function loadGoogleMaps() {
		var js = document.createElement('script');

		js.type = 'text/javascript';
		js.src = gMapScript.replace('{key}', gMapKey);
		window.initMap = initMap;
		document.body.appendChild(js);
	}

	function initMap() {
		gMap = new google.maps.Map(document.querySelector('.map'), {
			center: address,
			zoom: 12
		});
		addMarker();
	}

	function addMarker() {
		gMapMarker = new google.maps.Marker({
			position: address,
			map: gMap,
			title: 'Hello World!'
		});
	}

})();
