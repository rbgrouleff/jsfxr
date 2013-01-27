(function() {
  function Player(document) {
    this.document = document;
    this.context = new webkitAudioContext();
    this.playing = false;
    this.addSounds();
    this.addControls();
  }

  Player.prototype = {
    addSounds: function() {
      this.gainNode = this.context.createGainNode();
      this.gainNode.gain.value = 0.5;
      this.gainNode.connect(this.context.destination);
      this.tone = new Tone(330, this.context, this.gainNode);
    },
    addControls: function() {
      var playButton = this.document.createElement('button');
      playButton.textContent = 'Play';
      playButton.addEventListener('click', this.play.bind(this), false);
      this.document.body.appendChild(playButton);
      var volumeRange = this.document.createElement('input');
      volumeRange.type = 'range';
      volumeRange.max = 1;
      volumeRange.step = 0.01;
      volumeRange.value = this.gainNode.gain.value;
      volumeRange.addEventListener('change', this.adjustVolume.bind(this), false);
      this.document.body.appendChild(volumeRange);
    },
    play: function() {
      this.playing = true; //!this.playing;
      if(this.playing) {
        console.log('Started playing');
        this.tone.start();
      } else {
        console.log('Stopped playing');
        this.tone.stop();
      }
    },
    adjustVolume: function(evt) {
      this.gainNode.gain.value = evt.target.valueAsNumber;
    }
  };

  this.Player = Player;
}).call(this);
