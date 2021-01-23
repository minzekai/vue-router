/**
 * 模块的组装工厂
 */
import Vue from "vue";
import Vuex from "vuex";
import moduleAA from "./a.js";
import moduleBB from "./b.js";
import cart from "./cart.js";
import products from "./products.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo:{
    username:"admin"
  }
},
  mutations: {
  //   changeName(state){
  //     state.name="change小index"
  // }
  },
  actions: {},
  modules: {
    a:moduleAA,
    b:moduleBB,
    products:products,
    cart:cart

  }
});
