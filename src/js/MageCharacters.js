import Character from './Character';

export default class MageCharacter extends Character {
  constructor(name) {
    super(name);
    this.attackValue = 100;
    this.defenceValue = 10;
  }

  set adjustedAttack(distance) {
    if (distance > 5 || distance < 1) {
      throw new Error('Дистанция атаки 1-5 клеток');
    }
    let attackResult = this.attackValue - ((this.attackValue / 10) * (distance - 1));

    if (this.stoned === true) {
      attackResult -= Math.log2(distance) * 5;
    }

    this.attack = Math.floor(attackResult);
  }

  get adjustedAttack() {
    return this.attack;
  }

  set stonedState(value) {
    if (value === true) {
      this.stoned = true;
    } else {
      this.stoned = false;
    }
  }

  get stonedState() {
    return this.stoned;
  }
}
