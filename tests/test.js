const reverseArray = require('..');

describe('Funkcja reverseArray', () => {
  it('powinna zwrócić tablicę', async () => {
    const result = reverseArray([1]);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it('nie powinna modyfikować przekazanego parametru', async () => {
    const array = [1, 2, 3];
    const arrayCopy = [...array];
    reverseArray([...array]);
  
    expect(array).toEqual(arrayCopy);
  });

  it('powinna zwrócić odwróconą tablicę', async () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverseArray(['test', 2, undefined])).toEqual([undefined, 2, 'test']);
    expect(reverseArray([null, null, true, false, NaN])).toEqual([NaN, false, true, null, null]);
  });
});
