<template>
<div class="header">
  <div class="logo"><span class="back" v-show="!onIndex" @click="back">⬅</span>{{headerText}}</div>
  <div class="input-wrap">
    <input class="input" type="text" v-model="searchText" @focus="switchStatus" @blur="switchStatus" ref="inputText">
    <transition name="inputFade">
      <div class="input-options" v-show="isActive">
        <span class="input-clear" @click="clear">x</span>
        <span class="input-split">|</span>
        <span class="input-search" @click="push">搜索</span>
      </div>
    </transition>
  </div>
  <transition name="warnFade">
    <div class="warn" v-show="isWarn"><span>请输入单词或句子</span></div>
  </transition>
</div>

</template>
<script>
import bus from '../bus';
export default {
  name: 'translate_header',
  data () {
    return {
      searchText: '',
      isActive: false,
      headerText: '即刻翻译',
      isWarn: false,
      timeoutTag: '',
      jump: true
    };
  },
  computed: {
    source () {
      return this.$store.state.source;
    },
    onIndex () {
      if (this.$route.name !== 'translate') {
        return false;
      }
      return true;
    }
  },
  methods: {
    clear () {
      this.searchText = '';
      this.$refs.inputText.focus();
    },
    switchStatus () {
      this.isActive = !this.isActive;
    },
    push () {
      if (this.source) {
        this.source.cancel(`上一个请求被取消`);
      }
      if (this.timeoutTag) {
        console.log('clearing');
        clearTimeout(this.timeoutTag);
        this.isWarn = false;
      }
      if (this.searchText !== '') {
        this.$router.push({name: 'translate_result', params: {result: this.searchText}});
      } else {
        this.isWarn = true;
        this.timeoutTag = setTimeout(() => {
          this.isWarn = false;
        }, 1000);
      }
    },
    back () {
      this.$router.back();
    }
  },
  created () {
    bus.$on('changeText', data => {
      this.jump = false;
      this.searchText = data;
      this.jump = true;
      this.$router.push({name: 'translate_result', params: {result: this.searchText}});
    });
  },
  watch: {
    searchText: function (newText, oldText) {
      if (this.source) {
        this.source.cancel(`上一个请求${oldText}被取消`);
      }
      if (this.jump) {
        if (this.searchText !== '') {
          this.$store.commit('addSource', this.$axios.CancelToken.source());
          this.$axios.post('/candidate', {
            'candidate': this.searchText
          }, {
            cancelToken: this.source.taken
          }).then((res) => {
            this.$store.commit('addCan', res.data);
            if (this.$route.params.candidate) {
              this.$router.replace({name: 'translate_candidate', params: {candidate: this.searchText}});
            } else {
              this.$router.push({name: 'translate_candidate', params: {candidate: this.searchText}});
            }
          }).catch(function (error) {
            console.log(error);
          });
        } else {
          this.$router.back();
        }
      }
    }
  }
};
</script>
<style lang="scss">
  .header {
    background: #6a85a8;
    height: 100px;
    .back {
      margin-right: 15px;
      cursor: pointer;
    }
  }
  .logo {
    color: #ffffff;
    text-indent: 10px;
    font-size: 2rem;
    margin-bottom: 10px;
  }
  .input-wrap {
    height:40px;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
    background: #ffffff;
    font-size:14px;
    display: flex;
    justify-content: flex-end;
  }
  .input {
    height: 100%;
    padding: 0;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
    text-indent: 1em;
  }
  .inputFade-enter-active, .inputFade-leave-active {
    transition: opacity 1s;
  }
  .inputFade-enter, .inputFade-leave-to {
    opacity: 0;
  }
  .input-options {
    display: flex;
    justify-content: space-around;
    margin-top: -1px;
  }
  .input-split {
    color: #aaaaaa;
  }
  .input-search {
    color: #6571db;
  }
  .input-clear, .input-search, .input-split {
    height: 100%;
    padding: 0 3px;
    line-height: 40px;
    word-break: keep-all;
    cursor: pointer;
  }
  .warn {
    position: fixed;
    font-size: 1.5em;
    bottom: 150px;
    left: 0;
    right: 0;
    text-align: center;
    span {
      background: #888888;
      border-radius: 3px;
      padding: 3px;
    }
  }
  .warnFade-enter-active{
    transition: all .5s;
  }
  .warnFade-enter {
    opacity: 0;
    transform: translateY(200%);
  }
  .warnFade-leave-active {
    transition: opacity .5s;
  }
  .warnFade-leave-to {
    opacity: 0;
  }
</style>
