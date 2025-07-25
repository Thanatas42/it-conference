ymaps.ready(init);
ymaps.ready(initTwo);

function init() {
  const myMap = new ymaps.Map("map", {
    center: [60.159581, 29.880482],
    zoom: 16,
    controls: ["zoomControl"]
  }, {
    suppressMapOpenBlock: true,
    yandexMapAutoSwitch: false,
    autoFitToViewport: 'always'
  })

  var placemark = new ymaps.Placemark(myMap.getCenter(), {
    balloonContentHeader: 'Репино парк<br/>',
    balloonContentBody:
      'С. Лысикова: <a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
      'А. Биушкина: <a href="tel: +79110888211">+7 (911) 088 82 11</a><br/>',
    balloonContentFooter: 'Место проведения конференции',
    hintContent: 'Репино парк'
  });

  myMap.geoObjects.add(placemark);
}

function initTwo() {
  ymaps.ready(function () {
    const MapLast = new ymaps.Map("map-last", {
      center: [59.985458, 30.300866],
      zoom: 15,
      controls: ["zoomControl"]
    });

    const pointA = [59.985458, 30.300866];
    const pointB = [59.986092, 30.293266];

    const multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: [pointA, pointB],
      params: {
        routingMode: 'pedestrian'
      }
    }, {
      boundsAutoApply: true
    });

    MapLast.geoObjects.add(multiRoute);

    multiRoute.model.events.add('requestsuccess', function () {
      MapLast.setBounds(multiRoute.getBounds(), { checkZoomRange: true });
    });

    const placemark = new ymaps.Placemark([59.985900, 30.293277], {
      balloonContent: 'Точка отправления'
    });
    MapLast.geoObjects.add(placemark);
    placemark.balloon.open();
  });
}
