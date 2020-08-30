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
  console.dir(event.currentTarget.nodeName);
}

//buttonElem.dispatchEvent(new MouseEvent("click"));

buttonElem.addEventListener("click", clickHandler);
divElem.addEventListener("click", clickHandler);
bodyElem.addEventListener("click", clickHandler);

//========

const form = document.querySelector("form");
console.log(document.forms);
console.log(document.images);
console.log(document.links);
