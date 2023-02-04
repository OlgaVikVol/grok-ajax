describe('Puzzle 405', () => {
  global.testSanity('puzzle405');
  describe('Исходный код', () => {
    it('использует React SSR и статику', async () => {
      const src = await global.getSource('puzzle405', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('renderToStaticMarkup');
    });
    it('React-компонент Main.jsx корректный', async () => {
      const src = await global.getSource('puzzle405', 'views/Main.jsx');
      expect(src).toContain('<h1');
    });
    it('React-компонент Layout.jsx корректный', async () => {
      const src = await global.getSource('puzzle405', 'views/Layout.jsx');
      expect(src).toContain('/js/client.js');
      expect(src).toContain('<script');
      expect(src).toContain('defer');
      expect(src).toContain('children');
    });
    it('client.js корректный', async () => {
      const src = await global.getSource('puzzle405', 'public/js/client.js');
      expect(src).toContain('document.');
      expect(src).toContain('.innerText');
      expect(src).toContain('Привет!');
    });
  });
  describe('Роут GET /', () => {
    it('изначально не выводит приветствия', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).not.toContain('Привет!');
    });
  });
  describe('Главная страница', () => {
    it('Показывает приветствие', async () => {
      await page.goto(global.makeUrl());
      await expect(page).toMatchElement('h1', { text: 'Привет!' });
    });
  });
  afterAll(() => global.puzzle405.kill());
});
