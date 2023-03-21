<template>
  <div class="novel">
    <header>
      <h1>勇气和决心</h1>
    </header>
    <div class="container">
      <p>
        从前，在一个遥远的地方，有一个叫莉莉的小女孩。她和父母、兄弟姐妹住在山脚下的一个小村庄里。对于莉莉和她的家人来说，生活虽然简单但却很快乐。
        一天，当她在森林里采摘浆果时，偶然发现了一张旧地图。地图虽然已经褪旧，但她仍能看出宝藏箱子的轮廓和标记它位置的X。想到可能会找到宝藏，莉莉把地图给家人看。
        起初，她的父母有些犹豫，但最终还是同意让她去冒险寻找宝藏。他们为她准备了食物和用品，并祝愿她旅途顺利。
        第二天一大早，莉莉带着地图出发了。她跟着地图穿过森林、翻过山丘，直到来到一座高山的山麓。地图上的X就在这座山的顶上。
        为了到达山顶，莉莉开始攀登。这是一项艰难的工作，但她坚持不懈，并最终登上了山顶。在那里，在一些岩石中间，她发现了一个旧箱子。
        兴奋地打开箱子后发现里面装满了金币和珍贵的珠宝！对于自己所发现的宝藏感到欣喜若狂，莉莉小心翼翼地将宝藏打包好并返回山下。
        当她回到村庄时，与家人和朋友分享了自己所得到的财富。大家都对她勇敢坚定感到惊讶。
        从那天起，只要你有勇气和决心就能实现任何事情。
      </p>
    </div>
    <footer class="footer">
      <p>&copy; 2023 小说版权所有</p>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.novel {
  width: 100%;
  padding: 0 78px;
  box-sizing: border-box;
  header {
    background-color: #04aa6d;
    padding: 20px;
    h1 {
      margin: 0;
      font-size: 36px;
      color: white;
      text-align: center;
      text-shadow: 2px 2px #222222;
    }
  }
  .container {
    margin: 50px auto;
    padding: 20px;
    background-color: #f8f3cd;
    box-shadow: 0 0 10px #888888;
    border-radius: 5px;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    h2 {
      font-size: 24px;
      margin: 20px 0 10px 0;
    }
    p {
      font-size: 24px;
      line-height: 2.7;
      margin-bottom: 20px;
      text-indent: 2em;
      letter-spacing: 0.3em;
    }
    ul {
      list-style-position: inside;
    }
    li {
      margin-bottom: 10px;
    }
    .image {
      text-align: center;
      margin: 20px 0;
    }
    img {
      max-width: 100%;
      height: auto;
      border: 3px solid #777;
      box-shadow: 0 0 8px #888888;
    }
  }
  .footer {
    background-color: #222222;
    color: #999;
    text-align: center;
    padding: 10px;
    margin-top: 50px;
  }
}
</style>
