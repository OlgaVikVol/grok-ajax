describe('Puzzle 420', () => {
  global.testSanity('puzzle420');
  describe('Исходный код', () => {
    it('использует React SSR и статику', async () => {
      const src = await global.getSource('puzzle420', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('renderToStaticMarkup');
      expect(src).toContain('app.locals.count');
    });
    it('React-компонент Main.jsx корректный', async () => {
      const src = await global.getSource('puzzle420', 'views/Main.jsx');
      expect(src).toContain('<h1>Кусочек</h1>');
      expect(src).toContain('id="count"');
      expect(src).toContain('Следующий');
      expect(src).toContain('button');
    });
    it('React-компонент Layout.jsx корректный', async () => {
      const src = await global.getSource('puzzle420', 'views/Layout.jsx');
      expect(src).toContain('/js/client.js');
      expect(src).toContain('<script');
      expect(src).toContain('defer');
      expect(src).toContain('children');
    });
    it('client.js корректный', async () => {
      const src = await global.getSource('puzzle420', 'public/js/client.js');
      expect(src).toContain('document.');
      expect(src).toContain('addEventListener');
      expect(src).not.toContain('preventDefault()');
      expect(src).toContain('fetch');
    });
  });
  describe('Главная страница', () => {
    beforeAll(async () => {
      await page.goto(global.makeUrl());
    });
    it('счетчик изначально нулевой', async () => {
      await expect(page).toMatchElement('#count', { text: '0' });
    });
    it('после первого нажатия счетчик равен 1', async () => {
      await page.click('button');
      await page.waitFor(1000);
      await expect(page).toMatchElement('#count', { text: '1' });
    });
    it('после второго нажатия счетчик равен 2', async () => {
      await page.click('button');
      await page.waitFor(1000);
      await expect(page).toMatchElement('#count', { text: '2' });
    });
    it('после обновления страницы счетчик сохраняется', async () => {
      await page.goto(global.makeUrl());
      await expect(page).toMatchElement('#count', { text: '2' });
    });
  });
  afterAll(() => global.puzzle420.kill());
});
