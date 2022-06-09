

import * as nodePath from 'path';
// в переменную получаем имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // к папке с результатами (public) - создастся автоматом
const srcFolder = `./src`; // к папке с исходниками

//создаем объект с инфой о путях к файлам и папкам
export const path = {
  build: {
    css: `${buildFolder}/css`,
    files: `${buildFolder}/files/`,
  },
  src: {
    scss: `${srcFolder}/scss/style.scss`,
    files: `${srcFolder}/files/**/*.*`,
  },
  // пути за которыми нужно следить за изменениями
  watch: {
    scss: `${srcFolder}/scss/**/*.scss`,
    files: `${srcFolder}/files/**/*.*`,
  }, 
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `` // укажем папку удал. сервера
};
