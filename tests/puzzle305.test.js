describe('Puzzle 305', () => {
  global.testSanity('puzzle305');
  describe('Исходный код', () => {
    it('использует React SSR и статику', async () => {
      const src = await global.getSource('puzzle305', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('renderToStaticMarkup');
    });
    it('стиль корректный', async () => {
      const src = await global.getSource('puzzle305', 'public/styles/style.css');
      expect(src).toContain('background-color');
    });
    it('картинка корректная', async () => {
      const src = await global.getSource('puzzle305', 'public/images/logo.svg');
      expect(src).toContain('<circle');
    });
    it('React-компонент Main.jsx корректный', async () => {
      const src = await global.getSource('puzzle305', 'views/Main.jsx');
      expect(src).toContain('<img');
      expect(src).toContain('logo.svg');
    });
    it('React-компонент Layout.jsx корректный', async () => {
      const src = await global.getSource('puzzle305', 'views/Layout.jsx');
      expect(src).toContain('/style.css');
      expect(src).toContain('children');
    });
  });
  describe('Роут GET /', () => {
    it('выводит картинку', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('img');
      expect(res).toContain('src');
      expect(res).toContain('/images/logo.svg');
    });
  });
  afterAll(() => global.puzzle305.kill());
});
