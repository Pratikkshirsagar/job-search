import nextElementInList from '@/utils/nextElementInList';

describe('nextElementInList', () => {
  it('locate element in list and returns the next element in the list', () => {
    const list = ['A', 'B', 'C', 'D'];
    const value = 'C';
    const result = nextElementInList(list, value);
    expect(result).toBe('D');
  });

  describe('when the element is at the end of the list', () => {
    it('locate element in list and returns the next element in the list', () => {
      const list = ['A', 'B', 'C', 'D', 'E'];
      const value = 'E';
      const result = nextElementInList(list, value);
      expect(result).toBe('A');
    });
  });
});
