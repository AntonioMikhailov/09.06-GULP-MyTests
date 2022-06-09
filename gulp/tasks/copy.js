

//функция для конкретной задачи, которая бцдет возвращать простое действие
export const copy = () =>{
  //метод src() получает доступ к папкам
return app.gulp.src(app.path.src.files) // откуда
.pipe(app.gulp.dest(app.path.build.files)); // куда переносим
};
//В итоге получили файлы - перенесли файлы
