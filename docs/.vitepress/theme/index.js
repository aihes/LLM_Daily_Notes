import DefaultTheme from 'vitepress/theme'
import CustomNav from './components/CustomNav.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomNav', CustomNav)
  }
}
