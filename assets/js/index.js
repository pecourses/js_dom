"use strict";
/* 
const headingElem = document.getElementById("mainHeader");

const headings = document.getElementsByTagName("h1");
const elemsWithClass = document.getElementsByClassName("head");

const t1 = document.querySelector(".head");
const t2 = document.querySelectorAll("h1");

const [inputElem, ...arrayWithElements] = document.getElementsByTagName(
  "input"
);
 */

const buttonElem = document.getElementById("btn");
const bodyElem = document.querySelector("body");
const divElem = document.querySelector("div");

function clickHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  console.dir(event);
}

//buttonElem.dispatchEvent(new MouseEvent("click"));

buttonElem.addEventListener("click", clickHandler, {
  once: true,
});
divElem.addEventListener("click", clickHandler);
bodyElem.addEventListener("click", clickHandler);

//========

const container = document.querySelector(".container");

const form = document.querySelector("form");
console.dir(form);

function onSubmitHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log(event);
}
form.addEventListener("submit", clickHandler);
container.addEventListener("click", clickHandler);

const buttonElem2 = document.getElementById("btn2");
const inputElem = document.getElementById("test");
buttonElem2.addEventListener("click", (event) => {
  console.dir(event.currentTarget.parentNode.firstChild);
  inputElem.value = "sample text";
});
