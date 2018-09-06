<template>
  <div class="translate_index">
    <translateBg></translatebg>
    <translateHeader v-on:showCan="showCan"></translateHeader>
    <translateCan v-show="hasCan"></translateCan>
  </div>
</template>
<script>
import translateHeader from '@/components/translate/common/header';
import translateBg from '@/components/translate/index/bg';
import translateCan from '@/components/translate/index/can';
export default {
  name: 'translate_index',
  data () {
    return {
      hasCan: false
    };
  },
  methods: {
    showCan () {
      this.hasCan = true;
    }
  },
  components: {
    translateHeader,
    translateBg,
    translateCan
  }
};
</script>
<style>

</style>
