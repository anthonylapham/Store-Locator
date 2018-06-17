function initMap() {
  var uluru = {
    lat: 39.758948,
    lng: -84.191607
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

  var stores = [
    {
      name: 'Kroger',
      location: {lat:39.797351,lng:-84.245920},
      hours: 'Sunday: 8:00 AM-Midnight, Monday-Friday 6:00 AM-Midnight'
    },
    {
      name: 'Kroger',
      location: {lat:39.819535, lng:-84.200536},
      hours: 'Sunday-Saturday: 6:00 AM-11:00 PM'
    },
    {
      name: 'Kroger',
      location: {lat:39.863047, lng:-84.313886},
      hours: 'Sunday-Saturday: 5:00 AM-1:00 AM'
    },
    {
      name: 'Kroger',
      location: {lat:39.817225, lng:-84.125538},
      hours: 'Sunday-Saturday: 5:00 AM-1:00 AM'
    },
    {
      name: 'Meijer',
      location: {lat:39.857576, lng:-84.275959},
      hours: '24 Hours a day, 364 days a year'
    },
    {
      name: 'Meijer',
      location: {lat:39.868964,lng:-84.103101},
      hours: '24 Hours a day, 364 days a year'
    },
    {
      name: 'Meijer',
      location: {lat:39.777390,lng:-84.073723},
      hours: '24 hours a day, 364 days a year'
    },
    {
      name: 'Aldi',
      location: {lat:39.861225, lng:-84.281481},
      hours: '9:00 AM-9:00 PM Monday-Friday, 9:00 AM-8:00 PM Saturday & Sunday'
    },
    {
      name: 'Costco',
      location: {lat:39.663100, lng:-84.105741},
      hours: 'Monday-Friday: 10:00 AM-8:30 PM, Saturday: 9:30 AM-6:00 PM, Sunday: 10:00 AM-6:00 PM'
    },
    {
      name: 'Trader Joes',
      location:{lat:39.688436,lng:-84.166278},
      hours: 'Monday-Sunday: 8:00 AM-9:00 PM'
    },
    {
      name: 'Walmart',
      location: {lat:39.858313,lng:-84.212111},
      hours: 'Open 24 hours'
    },
    {
      name: 'Walmart',
      location: {lat:39.856303,lng:-84.334829},
      hours: 'Open 24 hours'
    },
    {
      name: 'Walmart',
      location: {lat:39.863115,lng:-84.098316},
      hours: 'Open 24 hours'
    },
    {
      name: 'Whole Foods',
      location: {lat:39.626900, lng:-84.190054},
      hours: 'Sunday-Thursday: 8:00 AM-9:00 PM , Friday-Saturday: 8:00 AM-10:00 PM'
    }
  ];
  //marker function that shows stores on maps
  function markStore(storeInfo){
    var marker = new google.maps.Marker({
      position: storeInfo.location,
      map: map,
      title: storeInfo.name
    });
    //event that displays store information when clicking on the marker
    marker.addListener('click',function(){
      showStoreInfo(storeInfo);
    });
  }
  //function that takes information from the stores variable and puts it in the display
  function showStoreInfo(storeInfo){
    var info_div = document.getElementById('info_div');
    info_div.innerHTML = 'Store name: '
    + storeInfo.name
    + '<br>Hours: ' + storeInfo.hours;
  }
  //maps through the stores variable so that each store shows on the map
  stores.forEach(function(store){
    markStore(store);
  });

  //hides the markers on page load
  $("#"+marker).hide();

}
