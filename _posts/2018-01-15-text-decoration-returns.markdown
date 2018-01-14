---
layout: post
title:  "text-decoration повертається"
date:   2018-01-14 11:00:00 +0200
image: https://yevhenorlov.com/assets/images/og/og-frontend.png
categories: frontend
---

Поки автори W3C-чернетки [вирішують](https://drafts.csswg.org/css-text-decor-4/#text-decoration-line-continuity), в чому різниця між `text-decoration-skip: ink` і `text-decoration-skip-ink`<sup><a href="#fn1" id="ref1">1</a></sup> (), протестувати нові підкреслення можна вже сьогодні.

<span class="old-link">Лінії під старими лінками виглядають звично, вони перекреслюють гліфи і зливаються з усіма знаками, включаючи знаки пунктуації. Дослідження свідчать, що людям з дислексією важко читати такий текст.</span> Це одна з причин, чому в дизайні став популярним тренд вимикати дефолтний text-decoration для лінків і креслити лінію заново за допомогою border-bottom, background-image, псевдоедементів before/after тощо.

<span class="new-link">Нова css-властивість автоматично розриває лінію підкреслення, коли та перетинає гліф. Це не лише спрощує візуальне сприйняття для більшості з нас, але і робить текст доступним для людей, яким складно читати.<span>

<style>
  .new-link{
    text-decoration: underline;
    text-decoration-skip: ink;
  }
  .old-link{
    text-decoration: underline;
    text-decoration-skip: none;
  }
</style>

<aside class="footnotes">
  <ol>
    <li id="fn1">На момент написання цього поста розробники Chromium <a href="https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/47BHtmz0jVY">пропонують</a> прибрати ink зі списку можливих значень властивості text-decoration-skip і винести його у властивість text-decoration-skip-ink, увімкнувши її за замовчуванням. Ще одна перемога для доступного вебу!<a href="#ref1" title="Повернутися до зноски 1 в тексті.">&#8617;</a></li>
    <li id="fn2">Автор допускає, що стандарт HTML5 передбачає більш адекватну семантичну опцію. Кинути в автора помідором і вказати на таку опцію можна в <a href="https://twitter.com/yevhenorlov">твіттері</a>.<a href="#ref2" title="Повернутися до зноски 2 в тексті.">&#8617;</a></li>
  </ol>
</aside>