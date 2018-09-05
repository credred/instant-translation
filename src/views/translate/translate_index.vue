<template>
  <div class="translate_index">
    <translateBg></translatebg>
    <translateHeader></translateHeader>
  </div>
</template>
<script>
import translateHeader from '@/components/translate/common/translate_common_header';
import translateBg from '@/components/translate/index/translate_index_bg';
export default {
  name: 'translate_index',
  data () {
    return {
    };
  },
  components: {
    translateHeader,
    translateBg
  }
};
</script>
<style>

</style>
