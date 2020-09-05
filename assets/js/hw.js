/* 
1) Вывод содержимого инпута через алерт или лог.
2) По нажатию на кнопку изменить текст самой  кнопки
3) Отобразить картинку. Сделать так, что бы при появлении страницы отображалсь одна картинка, а при наведении мышью на неё отображалась другая. 
 */

document.getElementById("textInput").addEventListener("input", (event) => {
  console.log(event.target.value);
});

document.getElementById("btn").onclick = (event) => {
  event.target.textContent = "Changed Value";
};

document.getElementById("img").addEventListener("click", createImageHandler(''));

function createImageHandler(src) {
  return function (event) {
    event.target.src = src;
  };
}
