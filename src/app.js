import { createApp } from 'vue'
import './style.css'
import Header from './Header.vue'
import SideBlock from './Sideblock.vue'

createApp(Header).mount('#app-header')
createApp(SideBlock).mount('#app-sideblock')
