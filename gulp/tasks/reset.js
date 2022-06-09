//подключаем плагин del Функция будет удалять папку с результатом
import del from "del";

export const reset = () => {
  return del(app.path.clean); // путь к объекту в файле path
};
