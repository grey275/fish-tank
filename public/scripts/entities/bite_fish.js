class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = 'images/bitefish.jpg';
    this.isTasty = false;
    this.biteRadius = 100;
  }

  update(t) {
    super.update(t);
    this.tank
      .getProximateDenizens(this.position, this.biteRadius)
      .filter(denizen => denizen.isTasty)
      .forEach(denizen => {
        console.log(`ate ${denizen}`);
        denizen.kill()
      })
  }
}
