describe('Puzzle 300', () => {
  global.testSanity('puzzle300');
  describe('Исходный код', () => {
    it('использует React SSR и статику', async () => {
      const src = await global.getSource('puzzle300', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('renderToStaticMarkup');
    });
    it('стиль корректный', async () => {
      const src = await global.getSource('puzzle300', 'public/style.css');
      expect(src).toContain('font-size');
      expect(src).toContain('72pt');
      expect(src).toContain('body');
    });
    it('React-компонент Main.jsx корректный', async () => {
      const src = await global.getSource('puzzle300', 'views/Main.jsx');
      expect(src).toContain('Привет!');
    });
    it('React-компонент Layout.jsx корректный', async () => {
      const src = await global.getSource('puzzle300', 'views/Layout.jsx');
      expect(src).toContain('/style.css');
      expect(src).toContain('children');
    });
  });
  describe('Роут GET /', () => {
    it('выводит нужный текст', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('Привет!');
    });
  });
  afterAll(() => global.puzzle300.kill());
});
