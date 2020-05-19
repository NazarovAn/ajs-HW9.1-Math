import Daemon from '../Daemon';

test('new Demon', () => {
  const demon = new Daemon('demon');
  expect(demon).toEqual({
    name: 'demon', health: 100, level: 1, attackValue: 100, defenceValue: 10, type: 'Demon',
  });
});
