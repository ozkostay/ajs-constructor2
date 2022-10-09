import Bowerman from '../bowerman';

test('Проверка метода damage()', () => {
  const newHero = new Bowerman('Konan', 'Bowman');
  newHero.health = 100;
  newHero.damage(10);
  expect(newHero.health).toBe(92.5);
});

test('Проверка ошибки метода damage()', () => {
  const newHero = new Bowerman('Konan', 'Bowman');
  newHero.health = -1;
  expect(() => { newHero.levelUp(); }).toThrow();
});