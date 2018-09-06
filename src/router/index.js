import Vue from 'vue';
import Router from 'vue-router';
import banner from '@/components/common/banner';
import translateHeader from '@/components/translate/common/header.vue';
import translateBg from '@/components/translate/index/bg.vue';
import tranlsateCandidate from '@/components/translate/candidate/can.vue';
import translateResult from '@/components/translate/result/result.vue';
import favoriteList from '@/components/favorite/index/list.vue';
import favoriteItem from '@/components/favorite/item/item.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/translate',
      name: 'translate',
      components: {
        header: translateHeader,
        main: translateBg,
        banner
      },
      alias: '/'
    },
    {
      path: '/translate/candidate/:candidate',
      name: 'translate_candidate',
      components: {
        header: translateHeader,
        main: tranlsateCandidate
      }
    },
    {
      path: '/translate/result/:result',
      name: 'translate_result',
      components: {
        header: translateHeader,
        main: translateResult,
        banner
      }
    },
    {
      path: '/favorite',
      name: 'favorite',
      components: {
        main: favoriteList,
        banner
      }
    },
    {
      path: '/favorite/item/:favorite_item',
      name: 'favorite_item',
      components: {
        main: favoriteItem,
        banner
      }
    }
  ]
});
