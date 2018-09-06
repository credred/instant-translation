<template>
<section class="can_wrap">
  <ul class="can_list">
    <li class="can_item" v-for="candidate in candidates" :key="candidate.k" @click="changeText(candidate.k)"><span class="can_k">{{candidate.k}}</span><span class="can_v">{{candidate.v}}</span></li>
  </ul>
</section>
</template>
<script>
import bus from '../bus';
export default {
  name: 'translate_candidate_list',
  data () {
    return {
    };
  },
  computed: {
    candidates () {
      return this.$store.state.can.data;
    }
  },
  methods: {
    changeText (k) {
      bus.$emit('changeText', k);
    }
  }
};
</script>
<style lang="scss">
  .can_wrap {
    overflow: auto;
  }
  .can_list {
    margin: 0 40px;
  }
  .can_item {
    line-height: 30px;
    cursor: pointer;
    .can_k {
      font-size: 18px;
    }
    .can_v {
      font-size: 14px;
      margin-left: 5px;
    }
  }
  .can_item + .can_item {
    margin-top: 3px;
    border-top: 1px solid #a7a1a1;
  }
</style>
