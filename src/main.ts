import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faTimes,
  faQuoteRight,
  faQuoteLeft,
  faBolt,
  faLaptopCode,
  faPalette,
  faExternalLinkAlt,
  faHome,
  faUser,
  faCode,
  faComment,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithubSquare,
  faTwitterSquare,
  faVuejs,
  faReact,
  faNodeJs,
  faBootstrap,
  faSass
} from '@fortawesome/free-brands-svg-icons'

library.add({
  // Solid
  faBars,
  faTimes,
  faQuoteRight,
  faQuoteLeft,
  faBolt,
  faLaptopCode,
  faPalette,
  faExternalLinkAlt,
  faHome,
  faUser,
  faCode,
  faComment,
  faArrowLeft,
  // Brands
  faGithubSquare,
  faTwitterSquare,
  faVuejs,
  faReact,
  faNodeJs,
  faBootstrap,
  faSass
})

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import '@/assets/styles/application.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
