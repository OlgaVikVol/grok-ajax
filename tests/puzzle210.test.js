describe('Puzzle 210', () => {
  global.testSanity('puzzle210');
  describe('Исходный код', () => {
    it('использует React SSR', async () => {
      const src = await global.getSource('puzzle210', 'server.js');
      expect(src).toContain('renderToStaticMarkup');
    });
    it('React-компонент корректный', async () => {
      const src = await global.getSource('puzzle210', 'views/Main.jsx');
      expect(src).toContain('{');
      expect(src).toContain('}');
    });
  });
  describe('Роут GET /', () => {
    it('отвечает корректно', async () => {
      const name = encodeURIComponent('Фёдор');
      const res = await global.fetch(`${global.url}/?name=${name}`);
      expect(res).toContain('Привет, Фёдор!');
    });
  });
  afterAll(() => global.puzzle210.kill());
});
