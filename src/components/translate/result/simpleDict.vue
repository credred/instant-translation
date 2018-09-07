<template>
  <section class="simpleDict_wrap">
    <div class="from">
      <h3 class="fromText">{{simple.fromText}}</h3>
      <span class="addFavirite"></span>
      <div class="phonetic" v-if="isEn">
        <span class="phoneticLang" v-for="p in simple.phonetic" :key="p.name">{{p.name}}[{{p.value}}]</span>
      </div>
    </div>
    <div class="to">
      <span class="toText">{{...simple.toText}}</span>
      <div class="phonetic" v-if="!isEn">
        <span class="phoneticLang" v-for="p in simple.phonetic" :key="p.name">{{p.name}}[{{p.value}}]</span>
      </div>
    </div>
    <div class="dict" v-if="simple.dict">
      <div class="tags">{{tags}}</div>
      <div class="dictText" v-for="dictText in simple.dict" :key="dictText">{{dictText}}</div>
    </div>
    <div class="exchange" v-if="simple.exchange">
      <span class="ex" v-if="simple.exchange.word_pl">复数：{{...simple.exchange.word_pl}}</span>
      <span class="ex" v-if="simple.exchange.word_third">第三人称单数：{{...simple.exchange.word_third}}</span>
      <span class="ex" v-if="simple.exchange.word_ing">现在进行时{{...simple.exchange.word_ing}}</span>
      <span class="ex" v-if="simple.exchange.word_past">过去式{{...simple.exchange.word_past}}</span>
      <span class="ex" v-if="simple.exchange.word_done">过去分词{{...simple.exchange.word_done}}</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'translate_result_simpleDict',
  props: ['simple'],
  data () {
    return {
    };
  },
  computed: {
    isEn () {
      if (this.simple.fromLang === 'en') {
        return true;
      }
      return false;
    },
    tags () {
      if (this.simple.tags) {
        return this.simple.tags.core.join(' / ');
      }
    }
  }
};
</script>
<style>
  .simpleDict_wrap {
    padding-bottom: 20px;
  }
  .fromText {
    font-size: 24px;
    margin-bottom: 5px;
  }
  .phoneticLang + .phoneticLang {
    margin-left: 10px;
  }
  .from, .to {
    padding: 10px;
    border-bottom: 1px solid #dddde2;
  }
  .dict {
    padding: 20px;
    border-bottom: 1px solid #dddde2;
  }
  .tags {
    color: #887d7d99;
    font-size: 12px;
  }
  .tag::after {
    content: '/';
    display: inline-bolck;
  }
  .dictText {
    margin: 10px 0;
  }
  .exchange {
    color: #887d7d99;
  }
  .exchange > .ex {
    display: block;
    margin: 10px 0;
  }
</style>
