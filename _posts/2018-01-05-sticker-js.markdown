---
layout: post
title:  "Робимо інтерактивні наліпки за допомогою sticker.js"
date:   2018-01-05 12:47:47 +0200
image: /assets/images/og/og-frontend.png
categories: frontend
---

Бібліотека [sticker.js](http://stickerjs.cmiscm.com/) дозволяє за допомогою кількох рядків CSS додати оригінальну і досить
безглузду красивість на сайт (мій улюблений тип красивостей).

<figure class="sticker-example">
  <div class="sticker sticker-1"></div>
  <div class="sticker sticker-2"></div>
  <div class="sticker sticker-3"></div>
  <figcaption>Інтерактивні наліпки (торкніться курсором/пальцем)<sup><a href="#fn1" id="ref1">1</a></sup></figcaption>
</figure>

<style>
  .sticker-example {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 40px 0;
  }
  .sticker {
    width: 150px;
    height: 150px;
    margin: 20px;
  }
  @media screen and (max-width: 760px) {
    .sticker {
      width: 80px;
      height: 80px;
      margin: 10px;
    }
  }
  .sticker .sticker-img {
    background-size: contain;
  }
  .sticker-1 .sticker-img {
    background-image: url('/assets/images/robots/01.png');
  }
  .sticker-2 .sticker-img {
    background-image: url('/assets/images/robots/02.png');
  }
  .sticker-3 .sticker-img {
    background-image: url('/assets/images/robots/03.png');
  }
</style>

Процес максимально простий.

1. Скачати бібліотеку з [репозиторію на GitHub](https://github.com/cmiscm/stickerjs) і підключити її перед основним файлом, в якому ініціалізуються скрипти (у нашому випадку це буде `script.js`).

    ```html
    <script src="/assets/js/sticker.min.js"></script>
    <script src="/assets/js/script.js"></script>
    ```

2. Створити HTML-контейнер, який служитиме основою для наклейки. Тег `<img>` не підійде, оскільки бібліотека розрахована на роботу з параметром `background-image` згенерованого елемента-нащадка контейнера. Найкраще з цією функцією впорається звичайний `<div>`<sup><a href="#fn2" id="ref2">2</a></sup>. З цієї причини важливо, щоб `width` і `height` контейнера були задані, оскільки всередині не буде контенту, який запобігатиме його схлопуванню.

    ```html
    <figure class="sticker-example">
      <div class="sticker-1"></div>
      <div class="sticker-2"></div>
      <div class="sticker-3"></div>
      <figcaption>Інтерактивні наліпки (торкніться курсором/пальцем)</figcaption>
    </figure>

    <style>
      .sticker-example > div {
        width: 150px;
        height: 150px;
      }
    </style>
    ```

3. Присвоїти контейнеру ідентифікатор. Клас `sticker` або `sticker_js` цілком згодиться&nbsp;— головне, аби ідентифікатор не перетинався з іншими елементами на сайті, оскільки ініціалізація скрипта sticker.js відбуватиметься саме тут.

    ```html
    <figure class="sticker-example">
      <div class="sticker sticker-1"></div>
      <div class="sticker sticker-2"></div>
      <div class="sticker sticker-3"></div>
      <figcaption>Інтерактивні наліпки (торкніться курсором/пальцем)</figcaption>
    </figure>
    ```

4. Зображення на наклейці підключається через CSS на клас `sticker-img`&nbsp;— елемент з цим класом буде створено всередині контейнера, на якому ініціалізуватиметься `sticker.js`.

    ```html
    <style>
      .sticker .sticker-img {
        background-size: contain;
      }
      .sticker-1 .sticker-img {
        background-image: url('/assets/images/robots/01.png');
      }
      .sticker-2 .sticker-img {
        background-image: url('/assets/images/robots/02.png');
      }
      .sticker-3 .sticker-img {
        background-image: url('/assets/images/robots/03.png');
      }
    </style>
    ```

5. Підключити ініціалізацію скрипта при завантаженні DOM.

    ```javascript
    /* script.js */

    document.addEventListener("DOMContentLoaded", event => {
      Sticker.init('.sticker');
    });
    ```

Також можемо регулювати ступінь прозорості для тіні та всі стандартні параметри `background`: `color`, `position`, `repeat` тощо.

```html
<style>
  /* shadow opacity */
  .sticker-4 .sticker-shadow {
  opacity: 0.6;
  }
  .sticker-5 .sticker-shadow {
  opacity: 1;
  }
  .sticker-6 .sticker-shadow {
  opacity: 0.1;
  }

  /* background */
  .sticker-4 .sticker-img {
    background-color: rebeccapurple;
  }
  .sticker-5 .sticker-img {
    background-image: url("/assets/robots/05.png");
    background-size: 10% 10%;
    background-repeat: repeat;
  }
  .sticker-6 .sticker-img {
    background-image: linear-gradient(to right, rgba(122, 57, 206, 0.75), rgba(38, 102, 232, 0.75));
  }
</style>
```

<figure class="sticker-example">
  <div class="sticker sticker-4"></div>
  <div class="sticker sticker-5"></div>
  <div class="sticker sticker-6"></div>
</figure>

<style>
  /* shadow opacity */
  .sticker-4 .sticker-shadow {
  opacity: 0.6;
  }
  .sticker-5 .sticker-shadow {
  opacity: 1;
  }
  .sticker-6 .sticker-shadow {
  opacity: 0.1;
  }

  /* background */
  .sticker-4 .sticker-img {
    background-color: coral;
  }
  .sticker-5 .sticker-img {
    background-image: url("/assets/images/robots/05.png");
    background-size: 10% 10%;
    background-repeat: repeat;
  }
  .sticker-6 .sticker-img {
    background-image: linear-gradient(80deg, rgba(47, 132, 17, 0.75), rgba(232, 255, 0, 0.75));
  }
</style>

Єдиний недолік, який здався суттєвим&nbsp;— sticker.js розрахований на рівносторонні зображення і за замовчуванням малює лише круглі наліпки.

<aside class="footnotes">
  <ol>
    <li id="fn1">Джерело картинок: <a href="https://www.behance.net/DanielNyari">Daniel Nyari</a>.<a href="#ref1" title="Повернутися до зноски 1 в тексті.">&#8617;</a></li>
    <li id="fn2">Автор допускає, що стандарт HTML5 передбачає більш адекватну семантичну опцію. Кинути в автора помідором і вказати на таку опцію можна в <a href="https://twitter.com/yevhenorlov">твіттері</a>.<a href="#ref2" title="Повернутися до зноски 2 в тексті.">&#8617;</a></li>
  </ol>
</aside>

<script src="/assets/js/sticker.min.js"></script>
<script src="/assets/js/script.js"></script>
