<template>
  <div class="result_wrap">
    <loading v-show="loading"></loading>
    <simpleDict v-if="result && simple" :simple="simple" :addedFavorite="addedFavorite" @addFavorite="addFavorite"></simpleDict>
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
    let result = this.$route.params.result;
    let indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
    if (!indexedDB) {
      console.log('您的浏览器不支持IndexedDB');
    }
    let request = indexedDB.open('favorite', 1);
    request.onsuccess = (e) => {
      let db = e.target.result;
      let transaction = db.transaction('favorite', 'readwrite');
      let objectStore = transaction.objectStore('favorite');
      let requestData = objectStore.get(result);
      requestData.onsuccess = (e) => {
        let result = e.target.result;
        if (result) {
          this.$store.commit('addResult', result);
          this.addedFavorite = true;
          this.loading = false;
        } else {
          this.$axios.post('/translate', {
            'translate': this.$route.params.result
          }).then(res => {
            this.$store.commit('addResult', res.data);
            this.loading = false;
          }).catch(error => {
            console.error(error);
          });
        }
      };
    };
  },
  data () {
    return {
      loading: true,
      addedFavorite: false
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
  },
  methods: {
    addFavorite () {
      console.log('running');
      let result = this.result;
      let indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
      if (!indexedDB) {
        console.log('你的浏览器不支持IndexedDB');
      }
      let request = indexedDB.open('favorite', 1);
      request.onerror = function (e) {
        console.log(e.target.errorCode);
      };
      request.onsuccess = (e) => {
        let db = e.target.result;
        let transaction = db.transaction('favorite', 'readwrite');
        let objectStore = transaction.objectStore('favorite');
        if (this.addedFavorite) {
          objectStore.delete(result.text);
        } else {
          objectStore.add(result);
        }
        this.addedFavorite = !this.addedFavorite;
      };
      request.onupgradeneeded = function (e) {
        let db = e.target.result;
        let objectStore = db.createObjectStore('favorite', {keyPath: 'text', autoIncrement: false});
        objectStore.createIndex('text', 'text', {
          unique: true
        });
        objectStore.add(result);
      };
    }
  }
};
</script>
<style>
  .result_wrap {
    padding-bottom: 100px;
    margin: 10px 20px;
  }

</style>
