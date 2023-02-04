describe('Puzzle 200', () => {
  global.testSanity('puzzle200');
  describe('Исходный код', () => {
    it('использует React SSR', async () => {
      const serverSource = await global.getSource('puzzle200', 'server.js');
      expect(serverSource).toContain('renderToStaticMarkup');
    });
  });
  describe('Роут GET /', () => {
    it('отдаёт Привет!', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res.trim()).toEqual('<!DOCTYPE html><span>Привет!</span>');
    });
  });
  afterAll(() => global.puzzle200.kill());
});
