<template>
  <div class="discover" :style="{background: boxWidth > 450 ? '#fff' : ''}">
    <van-pull-refresh  v-model="loading" @refresh="refresh" success-text="刷新成功">
      <Waterfall v-if="boxWidth < 450" ref="waterfall" :width="boxWidth" :items="items" />
      <template v-else>
        <LargeItem v-for="item in items" :item="item" :key="item.id" />
      </template>
    </van-pull-refresh>
    <div ref="bottom" class="load-more">加载中...</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchDiscoverData } from '@/api/discover'
import Waterfall from '@/components/Waterfall.vue'
import LargeItem from "@/components/LargeItem.vue";
const waterfall = ref()
const items = ref<any[]>([])
const page = ref(1)
const loading = ref(false)
async function loadMore() {
  const data = await fetchDiscoverData(page.value++)
  loading.value = false
  items.value.push(...data)
  waterfall.value?.addItems(data)
}

async function refresh() {
  console.log('refresh')
  loading.value = true
  page.value = 1
  items.value = []
  waterfall.value?.clear()
  try{

  await loadMore()
  }finally {
    loading.value = false
  }

}

const bottom = ref()
const boxWidth = ref(375)
const observer = new IntersectionObserver(async ([entry]) => {
  if (entry.isIntersecting) await loadMore()
})
onMounted(() => {
  boxWidth.value  = document.getElementById('app')?.offsetWidth
  window.addEventListener('resize',() => {
    boxWidth.value = window.innerWidth
  })
  observer.observe(bottom.value)
  loadMore()
})
</script>

<style scoped>

.discover {
  padding: 0 15px;
  min-height: 100vh;
  background: #f8f8f8;
  width: 100vw;
box-sizing: border-box;
}
.load-more {
  text-align: center;
  padding: 12px;
  font-size: 14px;
}
</style>