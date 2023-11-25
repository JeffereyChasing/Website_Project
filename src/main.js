import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
    locale: zhLocale
  })

app.mount('#app')
