<template>
  <ul class="favorite_list">
    <li class="favorite_item" v-for="item in favorite_list" :key="item.text">
      <div class="item_text">{{item.text}} {{...item.result}}</div>
      <div class="item_dict">{{...item.dict}}</div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'favorite_list',
  created () {
    let request = indexedDB.open('favorite', 1);
    let favorite = this.favorite;
    request.onerror = function (e) {
      console.log(e.target.errorCode);
    };
    request.onsuccess = function (e) {
      let db = e.target.result;
      let transaction = db.transaction('favorite', 'readwrite');
      let objectStore = transaction.objectStore('favorite');
      objectStore.openCursor().onsuccess = function (event) {
        let cursor = event.target.result;
        if (cursor) {
          favorite.push(cursor.value);
          cursor.continue();
        } else {
          console.log('读数据成功');
        }
      };
    };
  },
  data () {
    return {
      favorite: []
    };
  },
  computed: {
    favorite_list () {
      let list = [];
      for (let f of this.favorite) {
        list.push({text: f.text, dict: f.dict, result: f.result});
      }
      return list;
    }
  }
};
</script>
<style>
  .favorite_list {
    margin: 0 20px;
    overflow: hidden;
  }
  .favorite_item {

  }
  .favorite_item + .favorite_item {
    border-top: 1px solid #a7a1a7;
  }
  .item_text, .item_dict {
    margin: 10px 0 5px;
  }
</style>
