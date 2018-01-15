---
layout: post
title:  "text-decoration повертається"
date:   2018-01-14 11:00:00 +0200
image: https://yevhenorlov.com/assets/images/og/og-frontend.png
categories: frontend
---

Поки автори W3C-чернетки [вирішують](https://drafts.csswg.org/css-text-decor-4/#text-decoration-line-continuity), як між собою уживатимуться css-властивості `text-decoration-skip` і `text-decoration-skip-ink`<sup><a href="#fn1" id="ref1">1</a></sup>, нові підкреслення можна використовувати вже сьогодні. Підтримка, очікувано, ще доволі [кепська](https://caniuse.com/#search=text-decoration-skip), але хоча б зворотньо сумісна.

**TL;DR**: можемо спокійно додавати `body { text-decoration-skip: ink; }` в свій `global-rules.css` і одразу користуватись перевагами красивих андерлайнів там, де це можливо.

```css

.old-underline{
  text-decoration: underline;
}

.new-underline{
  text-decoration: underline;
  text-decoration-skip: ink;
}
```

На момент цієї публікації в Firefox, Edge і Safari видимої різниці між двома варіантами немає — Edge і Firefox не підтримують `text-decoration-skip` взагалі, тоді як Safari використовує свій варіант властивості під назвою `-webkit-text-decoration-skip` і завжди перериває лінію підкреслення за замовчуванням. Користувачі Chrome на прикладі двох наступних абзаців можуть подивитись, як працюватиме новий стандарт після затвердження.

<span class="old-underline">Так виглядає стандартний підкреслений текст. Лінія перекреслюює гліфи і зливається з усіма знаками, включаючи знаки пунктуації. Спеціалісти стверджують, що людям з дислексією може бути важко це прочитати</span><sup><a href="#fn2" id="ref2">2</a></sup>. З цих причин на практиці таке підкреслення часто вимикають глобальним правилом типу `a {text-decoration: none;}` і лінію малюють заново за допомогою `border-bottom`, `background-image`, псевдоедементів `before/after` тощо.

<span class="new-underline">Нова css-властивість автоматично розриває лінію підкреслення, коли та перетинає гліф. Це спрощує візуальне сприйняття і робить текст більш доступним для людей, яким складно читати.</span>

Почитати більше можна [тут](https://medium.com/@iamhiwelo/improving-text-readability-for-dyslexic-users-with-skip-ink-underlines-bf52a2f3426b) і [тут](https://css-tricks.com/almanac/properties/t/text-decoration-skip/).

<style>
  .old-underline{
    text-decoration: underline;
  }
  .new-underline{
    text-decoration: underline;
    text-decoration-skip: ink;
  }
  .new-underline.overline{
    text-decoration: overline;
  }
</style>

<aside class="footnotes">
  <ol>
    <li id="fn1">На момент написання цього поста розробники Chrome <a href="https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/47BHtmz0jVY">заявили про намір</a> прибрати ink зі списку можливих значень властивості text-decoration-skip і винести його в окрему властивість text-decoration-skip-ink зі значеннями auto і none, що дозволить глобально увімкнути новий тип підкреслень за замовчуванням.<a href="#ref1" title="Повернутися до зноски 1 в тексті.">&#8617;</a></li>
    <li id="fn2"><a href="https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/">Dos and don'ts on designing for accessibility (Karwai Pun, 2016)</a><a href="#ref2" title="Повернутися до зноски 2 в тексті.">&#8617;</a></li>
  </ol>
</aside>