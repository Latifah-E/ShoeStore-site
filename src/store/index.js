import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
export default new Vuex.Store({
    state: {
      cart: [],
      products:[]
    },
    getters: {
        leftProducts(state){
            return state.products.filter(product => product.stock > 0) 
        },
        cart: state => state.cart,
        products: state => state.products
          
    },
    mutations: {
        setProducts(state, products){
            state.products = products
        },
        pushProductToCart (state,product){
            state.cart.push(product)
        },
        // incrementItemQuantity(state,cartItem){
        //     cartItem.quantity++
        // },
        // decrementProductInventory(state,product){
        //     product.stock--
        // }

    }
    
  })