let o = 12
let p = 13
let l = 14
let f = new Array(o,p,l)
console.log(f)

let a = "a,b".split(",")
console.log(a)

console.log(0 || "" || 2 || undefined || true || falsе )

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('Оригинальная строка: "' + stringToSplit + '"');
  console.log('Разделитель: "' + separator + '"');
  console.log(
    "Массив содержит " +
      arrayOfStrings.length +
      " элементов: " +
      arrayOfStrings.join(" / "),
  );
}

// Строчка из «Бури» Шекспира. Перевод Михаила Донского.
var tempestString = "И как хорош тот новый мир, где есть такие люди!";
var monthString = "Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек";

var space = " ";
var comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);



function burgerProperty() {
    let header = document.querySelector('#burger');
    let burger = document.querySelector('#burgerIcon');
    burger.addEventListener("click",() => {
        if (header.classList.contains('active-burger')) {
            header.classList.remove("active-burger");
          }
          else {
            header.classList.add("active-burger");
          }
    })
};

burgerProperty();

let active = true;
let itemsArr = [];
let itemObj = {};
let itemObjSet = {};
let i = 0;

const items = document.querySelectorAll('.footer__content-item');


function handleClick(item) {
  if (item.currentTarget.classList.contains('active')) {
    item.currentTarget.classList.remove('active');
  } else {
    item.currentTarget.classList.add('active')
  }
} 

const conLogItem = ('item')
const conLogKey = ('key')

items.forEach((item) => {
  item.addEventListener('click', handleClick);
  itemObj[[i]] = item
  itemObj[conLogKey[i]] = i
  ++i
  itemObjSet = Object.assign({}, itemObj); 
  console.log(item.target)
})

console.log(itemObj);