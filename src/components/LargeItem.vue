<script setup>
import Player from "@/components/Player.vue";
import {ref} from "vue";

defineProps(['item'])
const current = ref(null)
const play = (item) => {
  if(item.type !== 'video') return
  console.log(item)
  current.value = item
}
const close = () => {
  current.value = null
}
</script>

<template>
  <div class="item" @click="play(item)">
    <div class="bottom ">
      <div class="left">
        <img class="avatar" src="https://picsum.photos/100/100" alt="">
        <span>111</span>
      </div>

    </div>
    <div class="title">{{ item.title }}</div>

    <div class="img-box">
      <van-image class="cover" width="160" height="160" fit="cover" lazy-load :src="item.cover" :height="item.height"/>
      <img class="icon" v-if="item.type === 'video'" src="../assets/video/play.png" alt="">
    </div>
    <div class="good-box">
      <img class="good-icon" src="../assets/video/good.png">
      <span>{{ item.likes }}</span>
    </div>
  </div>
  <Player :item="current" @close="close"></Player>
</template>

<style scoped>
.good-box{
  display: flex;
  margin-top: 8px;
  align-items: center;
  justify-content: flex-start;
}
.good-box span{
  color: #666;
}
.good-icon{
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.title {
  font-size: 14px;
  word-break: break-all;
  text-align: left;
  margin: 8px 0;
}

.avatar {
  width: 30px;
  height: 30px;
  margin-right: 6px;
  border-radius: 15px;
}

.item {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding-bottom: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.img-box {
  width: 160px;
  height: 160px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.cover {
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-fit: cover;
}

.icon {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.bottom {
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;
}

.px-8 {
  padding: 0 8px;
  color: #333;
}
</style>