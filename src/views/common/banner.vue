<template>
  <nav class="nav">
    <div class="nav-item"><router-link to="/translate" active-class="nav-item-on"><i class="icon1"></i><span>翻译</span></router-link></div>
    <div class="nav-item"><router-link to="/favorite" active-class="nav-item-on"><i class="icon2"></i><span>收藏</span></router-link></div>
  </nav>
</template>
<script>
export default {
  name: 'banner',
  data () {
    return {
    };
  }
};
</script>
<style lang="scss">
  .nav {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 3px 0;
    border-top: 1px #a7a1a1 solid;
    max-width: 640px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #ffffff;
  }
  .nav-item {
    flex-grow: 1;
    text-align: center;
    a {
      text-decoration: none;
      display: block;
      color: #222222;
    }
    .nav-item-on {
      color: #00aeef;
    }
    i {
      display: block;
      width: 24px;
      height: 24px;
      margin: 0 auto;
      background-size: 24px 24px;
    }
  }
  .icon1 {
    background: url(../../assets/img/search.png) no-repeat;
  }
  .icon2 {
    background: url(../../assets/img/note.png) no-repeat;
  }
</style>
