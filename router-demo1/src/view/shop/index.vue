<template>
  <div id="app">
      <!-- {{$store.state.name}}
      {{$store.state.a.name}}
      {{$store.state.b.name}}
      <hr>
      <button @click="$store.commit('changeName')">change事件</button>
      <button @click="$store.commit('a/changeName')">changeA事件</button>
      <button @click="$store.commit('b/changeName')">changeB事件</button> -->
      <h1>购物城测试</h1>
      <p>用户姓名：{{$store.state.userInfo.username}}</p>
      <hr>
      <h2>产品列表</h2>
      <ProductList></ProductList>
      <hr>
      <h2>购物车列表</h2>
      <CarList></CarList>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import CarList from "./components/CarList.vue";

export default {
  name: "App",
  components:{ProductList,CarList}
  
};
</script>

<style>

</style>
