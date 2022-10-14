import { createApp } from 'vue'
import waveUI from 'wave-ui'

import pinia from './plugins/pinia'
import router from './plugins/router'

import App from './App.vue'

const Vue = createApp(App)

new waveUI(Vue, {})

Vue.use(pinia)
Vue.use(router)

Vue.mount('#app')
