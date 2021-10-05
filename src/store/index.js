import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      cart: [],
      products:[]
    },
    actions: {
        addProductToCart(context,product){
            if (product.stock > 0) {
                const cartItem = context.state.cart.find(item => item.id === product.id)
                  if(!cartItem){
                       context.commit('pushProductToCart',product.id)
            }else{
                       context.commit('incrementItemQuantity',cartItem)
            }
                        context.commit('decrementProductInventory',product)
            }
          
        },
        init(){
            this.axios.get('/shoes').then(response=>[
                console.log(response.data),
                (this.state.products = response.data),
            ]).catch(error=>{
                console.log(error)
            })
            
        },
    },
    mounted(){
        this.init()
   },

    getters: {
            leftProducts(state){
                return state.products.filter(product => product.stock > 0) 
            },
            
    },
    mutations: {
        setProducts(state, products){
            state.products = products
        },
        pushProductToCart (state,productId){
            state.cart.push({
                id:productId,
                quantity:1
            })
        },
        incrementItemQuantity(state,cartItem){
            cartItem.quantity++
        },
        decrementProductInventory(state,product){
            product.stock--
        }

    }
    
  })