import { createApp } from 'vue'
import './app.scss'

const App = createApp({
  mounted(){
    console.log('mounted');
  },
  onLaunch () {
    console.log('onLaunch');
  },
  onShow (options) {
    console.log('onShow');
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
