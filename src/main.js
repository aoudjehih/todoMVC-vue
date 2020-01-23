import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Todolist from '@/components/templates/todo-list-page'
import Subscription from '@/components/templates/subscription-page'
import ProductList from '@/components/templates/product-list-page'
import store from './store'
import formValidator from './assets/scripts/form/plugin/validator'

Vue.config.productionTip = false
Vue.use(Router);
Vue.use(formValidator);

const router = new Router({
	mode: 'history',
	routes: [
		{name: "todo", path: "/", component: Todolist},
		{name: "productList", path: "/Product-list", component: ProductList},
		{name: "subscription", path: "/subscription", component: Subscription},
	]
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
