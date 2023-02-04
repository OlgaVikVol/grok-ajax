describe('Puzzle 400', () => {
  global.testSanity('puzzle400');
  describe('Исходный код', () => {
    it('использует React SSR и статику', async () => {
      const src = await global.getSource('puzzle400', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('renderToStaticMarkup');
    });
    it('React-компонент Main.jsx корректный', async () => {
      const src = await global.getSource('puzzle400', 'views/Main.jsx');
      expect(src).toContain('Привет!');
    });
    it('React-компонент Layout.jsx корректный', async () => {
      const src = await global.getSource('puzzle400', 'views/Layout.jsx');
      expect(src).toContain('/js/client.js');
      expect(src).toContain('<script');
      expect(src).toContain('children');
    });
    it('client.js корректный', async () => {
      const src = await global.getSource('puzzle400', 'public/js/client.js');
      expect(src).toContain('alert');
      expect(src).toContain('Это клиентский скрипт!');
    });
  });
  describe('Роут GET /', () => {
    it('выводит текст', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res.trim()).toContain('Привет!');
    });
  });
  afterAll(() => global.puzzle400.kill());
});
