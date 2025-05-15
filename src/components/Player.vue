<script setup>
defineProps(['item'])
const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}
</script>
<template>
  <div class="video-box" v-if="item" @click.self.stop="close">
    <video class="video" :src="item.src" muted :poster="item.cover" controls autoplay></video>
  </div>
</template>
<style scoped>
.video-box{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);
  z-index: 999;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video{
  object-fit: cover;
  width: calc(100vw - 30px);
  margin: 0 auto;
  height: 300px;
}
</style>