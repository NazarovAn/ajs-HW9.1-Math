import Character from '../Character';

test('new Char', () => {
  const char = new Character('char');
  expect(char).toEqual({ name: 'char', health: 100, level: 1 });
});
