(function() {
  function Tone(frequency, context, destination) {
    this.frequency = frequency;
    this.context = context;
    this.destination = destination;
    this.oscillator = null;
  }

  Tone.prototype = {
    start: function() {
      this.oscillator = this.context.createOscillator();
      this.oscillator.connect(this.destination);
      this.oscillator.frequency.value = 0;
      this.oscillator.start(0, 0, 0.35);
      this.oscillator.frequency.linearRampToValueAtTime(440, this.context.currentTime + 0.1);
      this.oscillator.frequency.linearRampToValueAtTime(this.frequency, this.context.currentTime + 0.2);
      this.oscillator.frequency.setValueAtTime(this.frequency, this.context.currentTime + 0.25);
      this.oscillator.frequency.linearRampToValueAtTime(0, this.context.currentTime + 0.35);
    },
    stop: function() {
      this.oscillator.stop(0);
    }
  };

  this.Tone = Tone;
}).call(this);
