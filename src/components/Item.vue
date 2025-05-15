<script setup>
import {imageProps} from "vant";

import Player from "@/components/Player.vue";
import {ref} from "vue";
  defineProps(['item'])
const current = ref(null)
const play = (item) => {
  console.log(item)
    current.value = item
}
const close = () => {
  current.value = null
}
</script>

<template>
  <div class="item" :style="{width:item.width + 'px'}" @click="play(item)">
      <div class="img-box" :style="{width:item.width + 'px',height:item.height + 'px'}">
        <img class="cover" loading="lazy" :src="item.cover" :height="item.height"/>
        <img class="icon" v-if="item.type === 'video'" src="../assets/video/play.png" alt="">
      </div>
      <div class="title px-8">{{item.title}}</div>
    <div class="bottom px-8">
      <div class="left">
        <img class="avatar" src="https://picsum.photos/100/100" alt="">
        <span>111</span>
      </div>
      <div class="right">
        <img class="good-icon" src="../assets/video/good.png" />
        <span>{{item.likes}}</span>
      </div>
    </div>
  </div>
  <Player :item="current" @close="close"></Player>
</template>

<style scoped>
.right{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.good-icon{
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.title{
  font-size: 14px;
  word-break: break-all;
  text-align: left;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制为两行 */
  -webkit-box-orient: vertical;

}
.avatar{
  width: 30px;
  height: 30px;
  margin-right: 6px;
  border-radius: 15px;
}
.item{
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding-bottom: 8px;
  box-sizing: border-box;
}
.img-box{
  width: 100%;
  position: relative;
}
.cover{
  width: 100%;
  height: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.icon{
  width: 30px;
  height: 30px;
  position: absolute;
  top: 8px;
  right: 8px;
}
.bottom{
  display: flex;
  justify-content: space-between;
}
.left{
  display: flex;
}
.px-8{
  padding: 0 8px;
  color: #333;
}
</style>