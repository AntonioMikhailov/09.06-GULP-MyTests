// Подключаем основные модули
import gulp from "gulp";
//Импорт путей
import { path } from "./gulp/config/path.js";
//импортируем Replace плагин - замены файлов
import {plugins } from "./gulp/config/plugins.js"; 

//передаем значения в глобальную переменную
global.app = {
  isBuild : process.argv.includes('--build'), // хранит флаги, если есть флаг '--build - значит Production
  isDev: !process.argv.includes('--build'),
path: path,
gulp: gulp,
plugins: plugins
};

//Импорт задач { здесь имена файлов js}
import {copy  } from "./gulp/tasks/copy.js"; //важно copy.js а не просто copy
//импортируе плагин del Важно чтобы выполнение удаление папки  с результатом происходило до выполнения других действий
import {reset  } from "./gulp/tasks/reset.js"; 
//импортируем HTML копирование
import {html } from "./gulp/tasks/html.js"; 
//импортируем BrowserSync звдачу из server.js
import {server } from "./gulp/tasks/server.js"; 
// SCSS
import {scss } from "./gulp/tasks/scss.js"; 
// JS
import {js } from "./gulp/tasks/js.js"; 
import {images } from "./gulp/tasks/images.js"; 
//шрифты конвертация - без третьей задачи fontStyle
import {otfToTtf, ttfToTtf } from "./gulp/tasks/fonts.js"; 
//ZIP архив делаем
import {zip } from "./gulp/tasks/zip.js"; 
//FTP перенос файлов
import {ftp } from "./gulp/tasks/ftp.js"; 



//Создаем наблюдатель за изменениями в файлах
function watcher() { 
  //указываем путь к файлам для слежения и действие которое нужно выполнить/ путь - файл, свойство watch значение files
 gulp.watch(path.watch.files, copy);
 //также для HTML
 gulp.watch(path.watch.html, html);
 gulp.watch(path.watch.scss, scss);
 gulp.watch(path.watch.js, js);
 gulp.watch(path.watch.images, images);
}

//Нам уже не нужно последовательно выполнение как ниже и мы можем использовать параллельный метод выполнения - одновременные задачи и передаем в переменную dev

//отдельно для конвертера шрифтов
const fonts = gulp.series(otfToTtf, ttfToTtf);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images)); 

//Т.к. сценариев уже больше чем просто copy создадим для них отдельную переменную. Метод series() выполняет сценарий последовательно Reset ( c del) ставми в самое начало
const dev = gulp.series(reset, mainTasks, gulp.parallel( watcher, server)); // наблюд. и сервер работаю параллельно
const build = gulp.series(reset, mainTasks); // наблюдатель watcher  и запуск сервера нам  не нужеен в режиме Production
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);
//Экспорт сценариев
export { dev };
export { build};
export { deployZIP};
export { deployFTP};

//Указываем теперь dev как задачу по умолчанию 
gulp.task('default', dev);