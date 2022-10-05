import Character from '../character';

test('Проверка объекта персонажа', () => {
  const standartHero = {
    name: 'Konon',
    type: 'Bowman',
    health: 100,
    attack: 10,
    defence: 40,
  };
  const NewHero = new Character('Konon', 'Bowman');
  expect(NewHero).toEqual(standartHero);
});

test('Проверка damage()', () => {
  const hero = new Character('Konon', 'Bowman');
  hero.damage(10);
  expect(hero.health).toBe(94);
});

test('Проверка throw.name персонажа', () => {
  expect(() => { Character('Konon678901', 'Bowman'); }).toThrow();
});

test('Проверка throw.name персонажа', () => {
  expect(() => { Character('Konon', 'BowmanFail'); }).toThrow();
});
