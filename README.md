# はてなブログのカスタムHTMLを移植したやーつ
はてブロのブログパーツのカスタマイズの管理面倒だなあ…

彡(ﾟ)(ﾟ)せや！GithubPagesでホスティングしたjsとcss呼び出せばええやんけ！

htmlのコンテンツを呼び出したい場所に
``` html
<div id="app-sideblock"></div>
```
や
``` html
<div id="app-sideblock"></div>
```
を置いて、
``` html
<link rel="stylesheet" href="https://izumiikezaki.github.io/ikz-hateblo-sustom/assets/index.css">
```
と
``` html
<script src="https://izumiikezaki.github.io/ikz-hateblo-sustom/assets/index.js"></script>
```
を書くだけ
