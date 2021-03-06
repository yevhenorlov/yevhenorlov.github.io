---
layout: post
title:  "ECMAScript 2018: найкращі хіти"
date:   2018-01-27 12:00:00 +0200
# image: https://yevhenorlov.com/assets/images/og/og-frontend.png
categories: frontend, javascript
---
Днями став відомий набір фіч, які увійдуть до стандарту ECMAScript 2018<sup><a href="#fn1" id="ref1">1</a></sup>. Повний список можна подивитись в <a href="http://2ality.com/2017/02/ecmascript-2018.html">Акселя Раушмаєра</a>, а я напишу детальніше про пару штук, які здались мені найцікавішими.

## Spread в об'єктах

Оператор `spread` (`...`) дозволяє витягти значення з так званих `iterables`. За замовчуванням до `iterables` входять типи об'єктів, чиї прототипи містять метод `@@iterator`. До таких належать `String`, `Array`, `TypedArray`, `Map` та `Set`.

### Як було?

До сьогодні `spread` сильно полегшував життя у випадках, коли потрібно було клонувати масив чи передати масив параметрів у функцію.

```javascript
/* Передача за посиланням vs. Передача за значенням */
const band1 = ['john', 'paul', 'george', 'pete'];
const band2 = band1;
band2[3] = 'ringo';
console.log(band2); // => ['john', 'paul', 'george', 'ringo'];
console.log(band1); // => ['john', 'paul', 'george', 'ringo'];

const band3 = ['syd', 'roger', 'rick', 'nick'];
const band4 = [...band3];
band4[0] = 'david';
console.log(band4); // => ['david', 'roger', 'rick', 'nick'];
console.log(band3); // => ['syd', 'roger', 'rick', 'nick'];
```

```javascript
const portisheadFirst = ['beth', 'geoff', 'adrian'];
const touringMembers = ['jim', 'clive', 'john'];
portisheadFirst.push(touringMembers); // створює масив в масиві
console.log(portisheadFirst); // => ['beth', 'geoff', 'adrian', ['jim', 'clive', 'john']];

const portisheadSecond = ['beth', 'geoff', 'adrian'];
portisheadSecond.push.apply(portisheadSecond, touringMembers); // працює, але не надто добре читається
console.log(portisheadSecond); // => ['beth', 'geoff', 'adrian', 'jim', 'clive', 'john'];

const portisheadThird = ['beth', 'geoff', 'adrian'];
portisheadThird.push(...touringMembers) // perfection.gif
console.log(portisheadThird); // => ['beth', 'geoff', 'adrian', 'jim', 'clive', 'john'];
```

### Що змінилось?

В новому стандарті `spread` стане доступним і для об'єктів. Дві речі, про які потрібно пам'ятати: він працює тільки для власних (не наслідуваних) властивостей об'єктів і дозволяє робити лише неглибоке клонування об'єкта (на один рівень вниз).

```javascript
/* shallow clone */

const ogre = {
  hp: 120,
  inventory: {
    weapon: 'big stick'
  }
}

const ogreInjured = {...ogre};
ogreInjured.hp = 42;
ogreInjured.inventory.weapon = 'small hammer';

/*
 * ogreInjured.hp передається за значенням,
 * ogreInjured.inventory.weapon передається за посиланням:
 */
console.log(ogreInjured); // => {hp: 42, inventory: {weapon: 'small hammer'}}
console.log(ogre); // => {hp: 120, inventory: {weapon: 'small hammer'}}
```

## Rest в об'єктах


/before: function definition, destructuring an array/

## Зворотні регулярні вирази
## Асинхронна ітерація

```javascript
// test code
```




<aside class="footnotes">
  <ol>
    <li id="fn1">Процес TC39 передбачає, що фічі, які вийшли на четвертий етап затвердження, майже гарантовано з'являться в релізі. Але це <a href="http://exploringjs.com/es2016-es2017/ch_tc39-process.html#_dont-call-them-ecmascript-20xx-features">не точно</a>.<a href="#ref1" title="Повернутися до зноски 1 в тексті.">&#8617;</a></li>
  </ol>
</aside>