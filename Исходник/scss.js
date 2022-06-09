//добавляем два плагина
import dartSass from "sass";
import gulpSass from "gulp-sass"; // для запуска препроце. нужен
import rename from "gulp-rename";

//еще 4 плагина для CSS
import cleanCss from "gulp-clean-css"; // сжатие CSS
import webpcss from "gulp-webpcss"; // вывод webp фото
import autoprefixer from "gulp-autoprefixer"; // добавление вендорных префиксов
import groupMediaQueries from "gulp-group-css-media-queries"; // группировка медиазапросов


const sass = gulpSass(dartSass); // заметь! что откуда вызывает


//препроцессор sass. Будем собирать файл стилей из кусков других файлов scss
//{sourcemaps: true})  нужен чтобы видеть в каком именно файле был написан стиль
export const scss = () =>{
 
return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
//добавляем pipe с проверкой - как в html.js
.pipe(app.plugins.plumber( 
app.plugins.notify.onError({
  title: "SCSS",
  message: "Error: <%= error.message %>"
})))
.pipe(app.plugins.replace(/@img\//g, '../img/'))
.pipe(sass({
  output: 'expanded' // стиль готового файла - сжат или нет
}))
.pipe(groupMediaQueries()) 
.pipe(webpcss({
  webpClass: ".webp", // если поддерживает то этот класс
  noWebpClass: ".no-webp"
}))
.pipe(autoprefixer({
  grid: true,
  overrideBrowserlist: ["last 3 version"], // для трех последних версии браузера будет создавать префиксеры
  cascade: true,
}))
//перед сжатием можем выгрузить несжатый css - будут выгружаться два css
.pipe(app.gulp.dest(app.path.build.css))
.pipe(cleanCss()) // сжимаем css
.pipe(rename({
  extname: '.min.css' // переименует файлы в style.min.css
}))
.pipe(app.gulp.dest(app.path.build.css)) // выгружаем в  экспорт

//почему то pipe ниже выдает ошибку в терминале когда обновляю чтили в sass
//.pipe(app.app.plugins.browsersync.stream()); // обновляем браузер
};