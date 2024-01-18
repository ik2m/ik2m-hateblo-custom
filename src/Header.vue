<template>
  <nav id="header-nav">
    <ul>
      <li>
        <a href="https://izumiikezaki.hatenablog.com/archive/category/3DCG">
          <i class="fas fa-cube"></i>
          <span class="nav-text">3DCG</span></a
        >
      </li>
      <li>
        <a
          href="https://izumiikezaki.hatenablog.com/archive/category/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0"
        >
          <i class="fas fa-keyboard"></i>
          <span class="nav-text">プログラミング</span></a
        >
      </li>
      <li>
        <a
          href="https://izumiikezaki.hatenablog.com/archive/category/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3"
        >
          <i class="fas fa-pencil-ruler"></i>
          <span class="nav-text">デザイン</span></a
        >
      </li>
      <li>
        <a
          href="https://izumiikezaki.hatenablog.com/archive/category/%E6%97%A5%E8%A8%98"
        >
          <i class="fas fa-book"></i>
          <span class="nav-text">日記</span></a
        >
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
#header-nav {
  display: block;
  max-width: 800px;
  margin: auto;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    padding: 0;
  }
}
@media screen and (max-width: 480px) {
  .nav-text {
    display: none;
  }
}

#header-nav 
/*カテゴリの色変更*/
a.category-3DCG {
  background-color: #002030;
  color: white;
}
a.category-プログラミング {
  background-color: #002030;
  color: white;
}
a.category-デザイン {
  background-color: #002030;
  color: white;
}
a.category-日記 {
  background-color: #002030;
  color: white;
}
</style>