import MageCharacter from './MageCharacters';

export default class Magician extends MageCharacter {
  constructor(name) {
    super(name);
    this.type = 'Magician';
  }
}
