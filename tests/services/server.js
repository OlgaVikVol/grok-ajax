const net = require('net');
const { spawn } = require('child_process');

/**
 * Проверяет, занят ли порт
 */
function portIsBusy(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
      .once('error', (err) => {
        if (err.code !== 'EADDRINUSE') {
          return reject(err);
        }
        return resolve(true);
      })
      .once('listening', () => {
        server
          .once('close', () => {
            resolve(false);
          })
          .close(() => {
            resolve(false);
          });
      })
      .listen(port);
  });
}

/**
 * Дождаться пока порт освободится
 * @param {number} port Порт
 */
function waitTillPortIsFree(port) {
  return new Promise((resolve, reject) => {
    function wait() {
      setTimeout(() => {
        portIsBusy(port)
          .then((busy) => {
            if (busy) {
              return wait();
            }
            return resolve();
          })
          .catch(reject);
      }, 50);
    }
    wait();
  });
}

/**
 * Запускает сервер загадки
 * ps aux | awk '/nodemon |node / { print $2; }' | xargs kill -9 2>/dev/null
 * @returns {Function} Функция для завершения процесса
 */
function runPuzzle(name) {
  const puzzlesDir = process.env.TEST_MODE === 'development'
    ? 'answers'
    : 'puzzles';
  const port = process.env.PORT || 3000;
  return new Promise((resolve, reject) => {
    const node = spawn(
      'node',
      ['server.js'],
      {
        cwd: `./${puzzlesDir}/${name}/`,
      },
    );
    node.stderr.on('data', (data) => reject(new Error(`Ошибка выполнения: ${data}`)));
    node.on('error', reject);
    // Дождаться поднятия сервера
    const interval = 100;
    let maxWait = process.env.PUZZLE_TIMEOUT || 4000;
    function wait() {
      if (maxWait <= 0) {
        return reject(new Error('Сервер не запустился.'));
      }
      return setTimeout(
        async () => {
          const busy = await portIsBusy(port);
          if (busy) {
            return resolve(() => new Promise((resolveKill) => {
              node.kill('SIGHUP');
              waitTillPortIsFree(port)
                .then(resolveKill);
            }));
          }
          maxWait -= interval;
          return wait();
        },
        interval,
      );
    }
    wait();
  });
}

module.exports = {
  portIsBusy,
  runPuzzle,
  waitTillPortIsFree,
};
