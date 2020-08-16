import * as colors from '../colors';

describe('theme', () => {
  describe('colors', () => {
    describe('lighten', () => {
      it('lightens the color by 20%', () => {
        expect(colors.lighten('#d9d9d9')).toBe('hsl(0, 0%, 100%)');
      });
    });

    describe('darken', () => {
      it('darkens the color by 20%', () => {
        expect(colors.darken('#FFFFFF')).toBe('hsl(0, 0%, 80%)');
      });
    });
  });
});
