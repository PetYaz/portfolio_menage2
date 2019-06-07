var ids = ['events', 'alphaG', 'architecture', 'life', 'about'];

ids.forEach(function(id) {
  var element = document.getElementById(id);

  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.add('is-reached');
    },
    offset: '75%'
  });
});