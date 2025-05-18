ymaps.ready(function () {
  const myMap = new ymaps.Map("map", {
    center: [59.987218, 30.175181],
    zoom: 9,
    controls: ["zoomControl"]
  }, {
    suppressMapOpenBlock: true,
    yandexMapAutoSwitch: false
  })

  const hotel = new ymaps.Placemark([60.159581, 29.880482], {
    balloonContent: 'Репино парк отель',
  });

  const deliver = new ymaps.Placemark([59.985458, 30.300866], {
    balloonContent: 'Трансфер',
  });

  myMap.geoObjects.add(hotel);
  myMap.geoObjects.add(deliver);
});
