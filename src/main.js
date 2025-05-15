import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Image as VanImage, PullRefresh,Lazyload } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App).use(VanImage).use(PullRefresh).use(Lazyload).mount('#app')
