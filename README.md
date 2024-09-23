# はてなブログのカスタムHTMLパーツを移植したやーつ
はてブロのカスタムHTMLパーツの管理面倒だなあ…

彡(ﾟ)(ﾟ)せや！GithubPagesでホスティングしたjsとcss呼び出せばええやんけ！

htmlのコンテンツを呼び出したい場所に
``` html
<div id="app-header"></div>
```
や
``` html
<div id="app-sideblock"></div>
```
を書いてて、
``` html
<link rel="stylesheet" href="https://ik2m.github.io/ikz-hateblo-custom/style.css">
<script src="https://ik2m.github.io/ikz-hateblo-custom/script.js"></script>
```
を書くだけ
