# はてなブログのカスタムHTMLパーツを移植したやーつ
はてブロのブログパーツのカスタマイズの管理面倒だなあ…

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
<link rel="stylesheet" href="https://izumiikezaki.github.io/ikz-hateblo-custom/assets/index.css">
<script src="https://izumiikezaki.github.io/ikz-hateblo-custom/assets/index.js"></script>
```
を書くだけ
