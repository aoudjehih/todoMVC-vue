import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Todolist from './components/templates/todo-list-page/index.vue'
import Test from './components/organisms/test/test.vue'
import ProductList from './components/templates/product-list-page/index.vue'

Vue.config.productionTip = false
Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{name: "todo", path: "/", component: Todolist},
		{name: "productList", path: "/product-list", component: ProductList},
		{name: "tests", path: "/test", component: Test},
	]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
