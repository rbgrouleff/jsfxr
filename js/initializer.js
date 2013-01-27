(function() {
  var initializer = function() {
    var player = new Player(window.document);
    console.log(player.context);
  };

  this.addEventListener('load', initializer, false);
}).call(this);
