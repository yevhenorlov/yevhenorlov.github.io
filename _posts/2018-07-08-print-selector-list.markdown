---
layout: post
title:  "Напівавтоматизація верстки компонентів за допомогою print-selector-list, або як я писав свій перший npm-модуль"
date:   2018-07-08 12:00:00 +0200
image: https://yevhenorlov.com/assets/images/og/2018-07-08.png
categories: frontend
---

Лінь, як відомо, рушій прогресу. Пару тижнів тому я остаточно задовбався писати
лейаути vue-компонентів, а потім копіпастити їх класи по одному, щоб прописати
стилі. "Має бути простіший спосіб", — подумав я, але замість того, щоб шукати
простіший спосіб, сів і написав бібліотеку. Мене хлібом не годуй, дай написати
бібліотеку, тим більше, давно хотілось подивитись, як працює npm зсередини. Так
з'явився [print-selector-list](https://www.npmjs.com/package/print-selector-list).

Штука, насправді, досить нішева, але якщо ваш воркфлоу хоч трохи нагадує мій,
працює це так.

В компонентах я використовую BEM з довжелезними селекторами, щоб не було спокуси
писати SCSS з десятком рівнів вкладеності. Завдяки бему більшість стилів, які я пишу, 
2-3 рівні завглибшки. 

```html
<section class="article-section">
  <h1 class="article-section__heading">Article heading</h1>
  <article class="article-section__body">
    Lorem exercitationem minus vel aperiam similique doloribus Assumenda nostrum quasi labore voluptatum veniam esse Exercitationem laborum eaque ex doloremque temporibus delectus Quibusdam voluptatem aut officia ab laudantium, doloribus dolore quod.
    <div class="article-section__body__share-article__wrapper">
      <button class="article-section__body__share-article__button btn btn--main">
        <app-icon class="article-section__body__share-article__button__icon"/>
        Share article
      </button>
    </div>
  </article>
</section>
```

Ідея `print-selector-list` в тому, щоб після написання HTML-коду одним махом
отримати список селекторів для наступного кроку верстки компонента — написання стилів.

```javascript
import printSelectorList from 'print-selector-list'

printSelectorList('.article-section')

/* повертає нам:
 
"
// .article-section__heading {}

// .article-section__body {}

// .article-section__body__share-article__wrapper {}

// .article-section__body__share-article__button {}

// .article-section__body__share-article__button__icon {}
"
*/
```

За бажання аутпут можна передати у функцію, яка запише його у файл на диску, або
вказати необов'язковий другий атрибут і вивести аутпут в консоль.

```javascript
/* printSelectorList(selector, logToConsole) */

printSelectorList('.article-section', true)
```

Якщо елемент наслідує частину стилів з глобального предка (наприклад, `btn
btn--blue`), ці класи йдуть *після* унікального класу. Це важливо, тому що
`print-selector-list` задуманий так, щоб виводити лише перший клас елемента у списку.


