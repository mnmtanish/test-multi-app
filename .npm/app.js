const { exec } = require('shelljs');
const chokidar = require('chokidar');

const build = () => exec('npm run build');
build();

chokidar
    .watch('src', { ignoreInitial: true })
    .on('all', () => build());

const server = exec('http-server ./dist -p 4200', { async: true });
const electron = exec('electron .', { async: true });
