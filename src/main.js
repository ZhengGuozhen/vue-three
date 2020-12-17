import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
