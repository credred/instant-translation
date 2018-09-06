<template>
  <div class="translate_bg">
    <img src="../../../assets/img/bg2.jpg" alt="bg">
  </div>
</template>
<script>
export default {
  name: 'translate_bg',
  data () {
    return {
    };
  }
};
</script>
<style lang="scss">
  .translate_bg {
    position: fixed;
    top:0;
    left:0;
    z-index: -1;
    width: 100%;
    height: 100%;
    img {
      width:100%;
      height: 100%;
      display: block;
    }
  }
</style>
