describe('Puzzle 215', () => {
  global.testSanity('puzzle215');
  describe('Исходный код', () => {
    it('использует React SSR', async () => {
      const src = await global.getSource('puzzle215', 'server.js');
      expect(src).toContain('renderToStaticMarkup');
    });
    it('React-компонент Main.jsx корректный', async () => {
      const src = await global.getSource('puzzle215', 'views/Main.jsx');
      expect(src).toContain('<form');
      expect(src).toContain('action=');
      expect(src).toContain('name=');
    });
    it('React-компонент Hello.jsx корректный', async () => {
      const src = await global.getSource('puzzle215', 'views/Hello.jsx');
      expect(src).toContain('{');
      expect(src).toContain('}');
    });
  });
  describe('Роут GET /', () => {
    it('выводит форму', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('<form');
      expect(res).toContain('action=');
      expect(res).toContain('name=');
    });
  });
  describe('Роут POST /hello', () => {
    it('выводит корректный текст', async () => {
      const name = encodeURIComponent('Фёдор');
      const res = await global.fetch(`${global.url}/hello`, `name=${name}`);
      expect(res.trim()).toContain('<span>Привет, Фёдор!</span>');
    });
  });
  afterAll(() => global.puzzle215.kill());
});
