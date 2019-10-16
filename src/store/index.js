import Vue from 'vue';
import Vuex from 'vuex';
import ecommerceModule from './modules/ecommerce'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        ecommerce: ecommerceModule
    }
});

export default store