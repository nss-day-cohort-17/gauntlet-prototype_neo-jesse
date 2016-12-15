var Gauntlet = {};

Gauntlet.Armory = {};

Gauntlet.Armory.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

Gauntlet.Armory.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};

Gauntlet.Armory.Dagger.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Broadsword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};

Gauntlet.Armory.Broadsword.prototype = new Gauntlet.Armory.Weapon();

Gauntlet.Armory.Waraxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Armory.Waraxe.prototype = new Gauntlet.Armory.Weapon();
