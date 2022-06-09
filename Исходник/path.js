
//импортируем модули
import * as nodePath from 'path';
// в переменную получаем имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // к папке с результатами (public) - создастся автоматом
const srcFolder = `./src`; // к папке с исходниками

//создаем объект с инфой о путях к файлам и папкам
export const path = {
  build: { // выгружаем сюда
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css`,
    html: `${buildFolder}/`, //  в корень папки dist
    images: `${buildFolder}/img/`, // 
    fonts: `${buildFolder}/fonts/`, //шрифты
    files: `${buildFolder}/files/`, 
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`, // любой файл Html
    files: `${srcFolder}/files/**/*.*`, // от сюда
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    files: `${srcFolder}/files/**/*.*`,
  }, // пути за которыми нужно следить за изменениями
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test` // укажем папку удал. сервера в которую перенсем проект

};
//Суть! Файлы из папки src будут переноситься в папку с результатом dist - создастся автоматом