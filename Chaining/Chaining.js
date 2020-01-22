class Kitten {
    constructor() {
      this.name = 'Garfield';
      this.color = 'brown';
      this.gender = 'male';
    }
    
    setName(name) {
      this.name = name;
      return this;
    }
    
    setColor(color) {
      this.color = color;
        return this;
    }
    
    setGender(gender) {
        this.gender = gender;
        return this;
    }
    
    save() {
      console.log(
        'saving ' + this.name + ', the ' +
        this.color + ' ' + this.gender + ' kitten...'
      );
      return this;
    }
  }
// --------------------without chaining--------------------
  let bob = new Kitten();

//   bob.setName('Bob');
//   bob.setColor('black');
//   bob.setGender('male');
//   bob.save();
// --------------------with chaining--------------------
new Kitten()
  .setName('Bob')
  .setColor('black')
  .setGender('male')
  .save();