// Подключаем основные модули
import gulp from "gulp"; // сам плагин gulp в самом начале установили
//Импорт путей
import { path } from "./gulp/config/path.js";

//передаем значения в глобальную переменную
global.app = {
path: path,
gulp: gulp
};


//Импорт задач
//Коприрование
import {reset  } from "./gulp/tasks/reset.js"; 
import {copy } from "./gulp/tasks/copy.js"; 
// SCSS
import {scss } from "./gulp/tasks/scss.js"; 



//Создаем наблюдатель за изменениями в файлах
function watcher() { 
  //указываем путь к файлам для слежения и действие которое нужно выполнить + путь к файлам - файл, свойство watch значение files
 gulp.watch(path.watch.files, copy);
 gulp.watch(path.watch.scss, scss);
}
const mainTasks = gulp.parallel(copy, scss); 
//Сценарии выполнения
const dev = gulp.series(reset, mainTasks, watcher);
//Указываем временно copy как задачу по умолчанию для теста
gulp.task('default', dev);
//В итоге получили файлы - перенесли файлы
