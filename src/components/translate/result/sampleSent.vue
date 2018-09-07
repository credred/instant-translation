<template>
  <section class="sam_wrap" v-if="sents">
    <header class="example">双语例句</header>
    <ol class="sam_list">
      <li class="sentence" v-for="s in sents" :key="s.enText">
        <div class="en">{{s.enText}}</div>
        <div class="ch">{{s.chText}}</div>
      </li>
    </ol>
  </section>
</template>
<script>
export default {
  name: 'translate_result_sampleSent',
  props: ['sentence'],
  data () {
    return {
    };
  },
  computed: {
    sents () {
      let sents = [];
      console.log(this.sentence.entry[0].data[0].data);
      let data = this.sentence.entry[0].data[0].data;
      (function get (data) {
        console.log(data);
        if (data) {
          for (let d of data) {
            if (d.enText && d.chText) {
              sents.push({enText: d.enText, chText: d.chText});
            }
            get(d.data);
          }
        }
      })(data);
      return sents;
    }
  }
};
</script>
<style>
  .sam_wrap {
    margin-top: 10px;
    border-top: 1px solid #dddde2;
  }
  .example {
    font-size: 12px;
    margin: 10px 0;
    color: #887d7d99;
  }
  .sentence {
    margin: 10px;
    border-top: 1px solid #dddde2;
  }
  .en {
    margin: 20px 0 5px;
  }
  .ch {
    font-size: 14px;
  }
</style>
