//TODO:====================01==========================
// Натискання на кновку "SHOW ME" має виводити значення з поля введення в alert

/* const btnEl = document.querySelector(".js-alert-button");
const inputEl = document.querySelector(".js-alert-input");

btnEl.addEventListener("click", onClick);

function onClick() {
  if (inputEl.value === "") {
    return alert("Поле не можу бути порожнім");
  }
  alert(inputEl.value);
  inputEl.value = "";
}
 */

//TODO:====================02==========================
// Після натискання на кнопку "SWAP ME" здійснюється обмін вмістом між двома інпутами. Можете натискати на неї кілька разів або вручну змінити вміст інпутів.

/* const refs = {
  btnEl: document.querySelector(".js-swap-button"),
  inputLeftEl: document.querySelector(".js-left-swap-input"),
  inputRightEl: document.querySelector(".js-right-swap-input"),
};

refs.btnEl.addEventListener("click", () => {
  const firstValue = refs.inputLeftEl.value;
  refs.inputLeftEl.value = refs.inputRightEl.value;
  refs.inputRightEl.value = firstValue;
}); */

//TODO:====================03==========================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.

/* const btnEl = document.querySelector(".js-password-button");
const inputEl = document.querySelector(".js-password-input");

btnEl.addEventListener("click", () => {
  if (inputEl.type === "text") {
    inputEl.type = "password";
    btnEl.textContent = "Розкрити";
    return;
  }
  inputEl.type = "text";
  btnEl.textContent = "Приховати";
});
 */

//TODO:====================04==========================
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

// const tableProductEl = document.querySelector("#productTable");
// const productDetailEl = document.querySelector("#productDetails");

// tableProductEl.addEventListener("click", onTableClick);

// function onTableClick(e) {
//   if (e.target.nodeName !== "TD") {
//     return;
//   }
//   const row = e.target.parentNode;
//   const productName = row.children[0].textContent;
//   const productPrice = row.cells[1].textContent;
//   productDetailEl.textContent = `Ви вибрали ${productName} за ${productPrice}`;
// }

//TODO:====================05==========================
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const refs = {
//   eventThumb: document.querySelector(".eventThumb"),
// };

// window.addEventListener("keydown", onKeyboardPress);

// function onKeyboardPress(e) {
//   refs.eventThumb.insertAdjacentHTML("beforeend", createElementInEventThumb(e));
// }

// function createElementInEventThumb(e) {
//   return `<p>key: ${e.key} - code: ${e.code}</p>`;
// }

//TODO:====================06==========================
// Кнопка "Зменшити" робить квадрат меншим на 10 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

// const refs = {
//   box: document.querySelector(".box"),
//   decreaseBtn: document.querySelector("#decrease"),
//   increaseBtn: document.querySelector("#increase"),
// };

// refs.increaseBtn.addEventListener("click", onBtnClick);
// refs.decreaseBtn.addEventListener("click", onBtnClick);

// function onBtnClick(e) {
//   const box = refs.box;
//   console.log(box.offsetWidth, box.offsetHeight);
//   if (e.target.id === "increase") {
//     box.style.width = `${box.offsetWidth + 10}px`;
//     box.style.height = `${box.offsetHeight + 10}px`;
//     return;
//   }

//   box.style.width = `${box.offsetWidth - 10}px`;
//   box.style.height = `${box.offsetHeight - 10}px`;
// }

//TODO:====================07==========================
// Навісьте слухач за кліком на глобальний об'єкт window і визначте,
// коли клік відбувається всередині елемента з класом "place", виведіть в консоль повідомлення
//"Ви клікнули в цільовий елемент". Коли клік припадає поза зоною елемента, виведіть повідомлення
//"Це не цільовий елемент". Використайте метод contains.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

// const refs = {
//   placeBox: document.querySelector(".place"),
// };

// window.addEventListener("click", onClick);

// function onClick(e) {
//   if (refs.placeBox.contains(e.target)) {
//     console.log("Ви клікнули в цільовий елемент");
//     return;
//   }
//   console.log("Це не цільовий елемент");
// }

//TODO:====================08==========================
// По кліку на кнопку "Подвоїти" збільшити значення у кожному елементі списку в 2 рази

// const refs = {
//   list: document.querySelector(".list"),
//   multyBtn: document.querySelector(".js-double-btn"),
// };

// refs.multyBtn.addEventListener("click", onClickMylty);

// function onClickMylty() {
//   const arr = refs.list.querySelectorAll("li");
//   arr.forEach((e) => {
//     e.textContent = Number(e.textContent) * 2;
//   });
// }

//TODO:====================09==========================
// При кліку на коло воно має слідувати за курсором. При повторному кліку воно стає в початкове положення.

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY

// const refs = {
//   circle: document.querySelector(".outer-circle"),
// };

// refs.circle.addEventListener("click", onCircleCklick);
// function onCircleCklick(e) {
//   const el = e.currentTarget;

//   if (el.style.position === "absolute") {
//     el.style.position = "static";
//     window.removeEventListener("mousemove", onMouseMove);
//     return;
//   }

//   el.style.position = "absolute";
//   window.addEventListener("mousemove", onMouseMove);
// }

// function onMouseMove(e) {
//   refs.circle.style.top = `${e.pageY - 15}px`;
//   refs.circle.style.left = `${e.pageX - 15}px`;
// }

//TODO:====================10==========================
// При кліці на кожну з кнопок підсумовуються значення з data-атрибутів. Після натискання на кнопку "Вивести результат" виводиться сума значення, а також статистика з інформацією про те, яка кнопка була натиснута скільки разів.

//TODO:====================11==========================
// Видаліть зі списку ті елементи, які позначені у чекбоксу.

//TODO:====================12==========================
// Дано список людей. Зроби можливість сортування списку за іменем і за прізвищем.

//TODO:====================13==========================
// Даний список людей. Зроби фільтр за ім'ям/прізвищем.

//TODO:====================14==========================
// Клік по кнопці замінює символ з першого поля введення на символ із другого поля введення в усьому тексті. Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.

//TODO:====================15==========================
// Коло має зникати під час наведення на нього.При цьому позиція сусідніх кіл повинна залишатися незмінною.
