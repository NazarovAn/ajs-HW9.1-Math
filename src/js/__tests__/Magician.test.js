import Magician from '../Magician';

test('new Demon', () => {
  const mage = new Magician('mage');
  expect(mage).toEqual({
    name: 'mage', health: 100, level: 1, attackValue: 100, defenceValue: 10, type: 'Magician',
  });
});
