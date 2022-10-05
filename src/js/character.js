export default function Character(name, type) {
  if (name.length < 2 || name.length > 10) {
    throw new Error('Недопустимая длина имени персонажа');
  }

  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  if (!types.find((item) => item === type)) {
    throw new Error('Недопустый тип персонажа');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype.damage = function (points) {
  this.health -= (points * (1 - this.defence / 100));
};
