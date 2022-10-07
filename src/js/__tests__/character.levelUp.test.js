import Bowerman from '../bowerman';

test('Проверка метода levelUp()', () => {
  const newHero = new Bowerman('Konan', 'Bowman');
  newHero.health = 55;
  newHero.levelUp();
  expect(newHero.health).toBe(100);
  expect(newHero.attack).toBe(30);
  expect(newHero.level).toBe(2);
});

test('Проверка ошибки метода levelUp()', () => {
  const newHero = new Bowerman('Konan', 'Bowman');
  newHero.health = 0;
  expect(() => { newHero.levelUp(); }).toThrow();
});
