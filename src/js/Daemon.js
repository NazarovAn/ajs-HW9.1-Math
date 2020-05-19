import MageCharacter from './MageCharacters';

export default class Daemon extends MageCharacter {
  constructor(name) {
    super(name);
    this.type = 'Demon';
  }
}
