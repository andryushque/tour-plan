/*=== Yandex Maps ===*/

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [47.426295, 12.420907],
      zoom: 5,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  myMap.geoObjects.add(
    new ymaps.Placemark(
      [47.426295, 12.420907],
      {
        balloonContent: "Grand Tirolia Hotel Kitzbuhel (^ ω ^)",
      },
      {
        preset: "islands#icon",
        iconColor: "#EC1F46",
      }
    )
  );
}
