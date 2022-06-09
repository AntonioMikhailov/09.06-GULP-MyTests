//функция для конкретной задачи, которая будет возвращать простое действие. Экспортируем ее в сборщик
export const copy = () =>{
  //метод src() получает доступ к папкам
return app.gulp.src(app.path.src.files) // откуда
.pipe(app.gulp.dest(app.path.build.files)); // куда переносим

};