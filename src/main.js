import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Todolist from './components/templates/todo-list/index.vue'
import Test from './components/templates/test/test.vue'

Vue.config.productionTip = false
Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{path: "/", component: Todolist},
		{path: "/test", component: Test},
	]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
