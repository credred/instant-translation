<template>
<section class="can_wrap">
  <ul class="can_list">
    <li class="can_item" v-for="candidate in candidates" :key="candidate.k"><div>{{candidate.k}}</div><div>{{candidate.v}}</div> }}</li>
  </ul>
</section>
</template>
<script>
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
  }
};
</script>
<style>
  .can_wrap {
    background: #eeeeee;
  }
</style>
