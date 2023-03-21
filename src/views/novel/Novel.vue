<template>
  <div class="novel">
    <header>
      <h1>重拾</h1>
    </header>
    <div class="container">
      <p>
        柴米油盐酱醋茶，这五味俱全的生活常态看似平淡无奇，却是大多数人日复一日、年复一年的温饱之源。而这其中，又有多少人真正能够活成自己的模样呢？
        冯智就是这样一个人。他窝在城市的角落混迹，好像所有渴望幸福的人一样，每天生活在紧张的焦虑中，却又没能有多少改变自己生存状态的能力。对他来说，生活早已不再是个人类的主题，而是一支柔软的木棍，随着他的节奏而弯曲着。
        一次出差的经历让他对生活重新有了大胆的想象。在一个偏僻的小镇上，他遇到了一个中年妇女，她是一家小超市的老板。冯智在这家小超市购买了些日常用品和食物，不经意间将自己的名片落在了她的柜台上。
        几个月后，在几经周折后，冯智得知这位女老板是一位真正的行家，独立开了一家公司。在她的帮助下，冯智开始展开自己的事业计划。
        经过一番心血，冯智终于找到了一条能够实现自己价值的途径，虽然这就意味着他要离开了大城市前往小城镇。他没有丝毫的迟疑，如离长夜踏进了光明般，踏上了前往新生活的旅程。
        几年时间里，冯智单方面挑起了全部的经济负担，并且在充满挑战的商场上打败各自的竞争者，成为了一名优秀的商人。他再次找到了生活的重心，重获了人类应该拥有的光彩。
        多年以后，当冯智回到了原来的城市，他意外发现了那张在小镇女超市老板柜台上落下的名片，从那印有手机号码的小小方块，直到如今，他仍视为人生的最初的梦，最关键的一个梦。
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
