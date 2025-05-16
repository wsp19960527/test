<template>
  <div class="waterfall-container">
    <div class="column" ref="leftColumn">
      <Item :item="item" v-for="item in leftItems" :key="item.id"></Item>
    </div>
    <div class="column" ref="rightColumn">
      <Item :item="item" v-for="item in rightItems" :key="item.id"></Item>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import Item from  './Item.vue'


const props = defineProps(['width','items'])

const leftItems = ref([])
const rightItems = ref([])

const leftHeight = ref(0)
const rightHeight = ref(0)
function loadImage(src){
  return new Promise((resolve,reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      resolve(img)
    }
    img.onerror = (err) => {
      reject(err)
    }
  })
}
const addItems = async (items) => {
  let imgWidth = (props.width - 38) / 2
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    try {
      if(item.type === 'video'){
        let img = await loadImage(item.cover)
        console.log(`addItems-${i}`)

        const ratio = img.height / img.width
        const height = imgWidth * ratio // 假设宽度 300px，60 是标题和 margin
        item.height = height
        item.width = imgWidth
        if (leftHeight.value <= rightHeight.value) {
          leftItems.value.push(item)
          leftHeight.value += height
        } else {
          rightItems.value.push(item)
          rightHeight.value += height
        }
      }else{
        const ratio = item.height / item.width
        const height = imgWidth * ratio  // 假设宽度 300px，60 是标题和 margin
        item.height = height
        item.width = imgWidth
        if (leftHeight.value <= rightHeight.value) {
          leftItems.value.push(item)
          leftHeight.value += height
        } else {
          rightItems.value.push(item)
          rightHeight.value += height
        }
      }

    }catch (e) {

    }
  }
  // items.forEach( async (item) => {
  //
  //
  //
  //
  //
  // })
}
function  clear() {
  leftItems.value = []
  rightItems.value = []
  leftHeight.value = 0
  rightHeight.value = 0
}

defineExpose({
  addItems,
  clear
})

</script>

<style scoped>
.waterfall-container {
  display: flex;
  gap: 8px;
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
}
.item img {
  width: 100%;
  border-radius: 8px;
}
.item .title {
  font-size: 14px;
  margin-top: 4px;
}
.likes {
  font-size: 12px;
  color: #888;
}
</style>