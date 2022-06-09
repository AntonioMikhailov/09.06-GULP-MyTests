//добавляем два плагина
import dartSass from "sass";
import gulpSass from "gulp-sass"; // для запуска препроце. нужен
const sass = gulpSass(dartSass); // заметь! что откуда вызывает
//препроцессор sass. Будем собирать файл стилей из кусков других файлов scss
//{sourcemaps: true})  нужен чтобы видеть в каком именно файле был написан стиль
export const scss = () =>{
 
return app.gulp.src(app.path.src.scss, {sourcemaps: true})
//добавляем pipe с проверкой - как в html.js

.pipe(sass({
  output: 'expanded' // стиль готового файла - сжат или нет
})) 
.pipe(app.gulp.dest(app.path.build.css)); // выгружаем в  экспорт
// .pipe(app.app.plugins.browsersync.stream()); // обновляем браузер

};
