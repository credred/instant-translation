<template>
  <div class="result_wrap">
    <loading v-show="loading"></loading>
    <simpleDict v-if="result && simple" :simple="simple"></simpleDict>
    <sampleSent v-if="result && sentence" :sentence="sentence"></sampleSent>
  </div>
</template>
<script>
import loading from '@/components/common/loading';
import simpleDict from './simpleDict';
import sampleSent from './sampleSent';
export default {
  name: 'translate_result',
  created () {
    this.$axios.post('/translate', {
      'translate': this.$route.params.result
    }).then(res => {
      this.$store.commit('addResult', res.data);
      this.loading = false;
    }).catch(error => {
      console.error(error);
    });
  },
  data () {
    return {
      loading: true
    };
  },
  computed: {
    result () {
      return this.$store.state.result;
    },
    simple () {
      return {
        fromText: this.result.text,
        toText: this.result.result,
        phonetic: this.result.phonetic,
        dict: this.result.dict,
        exchange: this.result.exchange,
        tags: this.result.tags,
        fromLang: this.result.from
      };
    },
    sentence () {
      return this.result.oxford;
    }
  },
  components: {
    loading,
    simpleDict,
    sampleSent
  }
};
</script>
<style>
  .result_wrap {
    padding-bottom: 100px;
    margin: 10px 20px;
  }

</style>
