import MageCharacter from '../MageCharacters';

test('new MageCharacter', () => {
  const mage = new MageCharacter('mage');
  expect(mage).toEqual({
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10,
  });
});

test('get attack', () => {
  const mage = new MageCharacter('mage');
  mage.adjustedAttack = 5;
  const attack = mage.adjustedAttack;
  expect(attack).toBe(60);
});

test('get stonedState = true', () => {
  const mage = new MageCharacter('mage');
  mage.stonedState = true;
  const state = mage.stonedState;
  expect(state).toBe(true);
});

describe('stonedState', () => test.each([
  ['false', false, false],
  ['123', 123, false],
  ['test', 'test', false],
  ['array', ['test'], false],
  ['object', { test: 'test' }, false],
])(
  ('get stonedState = %s'),
  (level, amount, result) => {
    const mage = new MageCharacter('mage');
    mage.stonedState = amount;
    const state = mage.stonedState;

    expect(state).toEqual(result);
  },
));

describe('adjustedAttack', () => test.each([
  ['5', 5, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 60,
  }],
  ['4', 4, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 70,
  }],
  ['3', 3, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 80,
  }],
  ['2', 2, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 90,
  }],
  ['1', 1, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 100,
  }],
])(
  ('distance = %s'),
  (level, amount, result) => {
    const mage = new MageCharacter('mage');
    mage.adjustedAttack = amount;

    expect(mage).toEqual(result);
  },
));

describe('adjustedAttack stoned', () => test.each([
  ['5', 5, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 48, stoned: true,
  }],
  ['4', 4, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 60, stoned: true,
  }],
  ['3', 3, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 72, stoned: true,
  }],
  ['2', 2, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 85, stoned: true,
  }],
  ['1', 1, {
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, attack: 100, stoned: true,
  }],
])(
  ('distance = %s'),
  (level, amount, result) => {
    const mage = new MageCharacter('mage');
    mage.stonedState = true;
    mage.adjustedAttack = amount;

    expect(mage).toEqual(result);
  },
));

describe('adjustedAttack error', () => test.each([
  ['10', 10, new Error('Дистанция атаки 1-5 клеток')],
  ['0', 0, new Error('Дистанция атаки 1-5 клеток')],
])(
  ('distance = %s'),
  (level, amount, result) => {
    const mage = new MageCharacter('mage');
    expect(() => { mage.adjustedAttack = amount; }).toThrow(result);
  },
));
