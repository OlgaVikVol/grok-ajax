describe('Puzzle 205', () => {
  global.testSanity('puzzle205');
  describe('Исходный код', () => {
    it('использует React SSR', async () => {
      const src = await global.getSource('puzzle205', 'server.js');
      expect(src).toContain('renderToStaticMarkup');
    });
    it('использует Layout', async () => {
      const layoutSrc = await global.getSource('puzzle205', 'views/Layout.jsx');
      expect(layoutSrc).toContain('{children}');

      const mainSrc = await global.getSource('puzzle205', 'views/Main.jsx');
      expect(mainSrc).toContain('<Layout');
    });
  });
  describe('Роут GET /', () => {
    it('отдаёт Привет!', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('Привет!');
    });
    it('содержит корректный title', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('<title>Фёдор-фермер</title>');
    });
  });
  afterAll(() => global.puzzle205.kill());
});
