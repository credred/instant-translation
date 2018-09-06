import Vue from 'vue';
import Router from 'vue-router';
import banner from '@/views/common/banner';
import translateIndex from '@/views/translate/translate_index';
import translateResult from '@/views/translate/translate_result';
import favoriteIndex from '@/views/favorite/favorite_index';
import favoriteItem from '@/views/favorite/favorite_item';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/translate',
      name: 'translate',
      components: {
        default: translateIndex,
        banner
      },
      alias: '/'
    },
    {
      path: '/translate/result/:translateResult',
      name: 'translate_result',
      components: {
        default: translateResult,
        banner
      }
    },
    {
      path: '/favorite',
      name: 'favorite',
      components: {
        default: favoriteIndex,
        banner
      }
    },
    {
      path: '/favorite/item/:favorite_item',
      name: 'favorite_item',
      components: {
        default: favoriteItem,
        banner
      }
    }
  ]
});
