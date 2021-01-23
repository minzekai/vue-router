<template>
  <div>
      <ul>
          <li v-for="carItem in carList" :key="carItem.id">
              名称:{{carItem.title}}-->价格:{{carItem.price}}-->数量:{{carItem.num}}
          </li>
          结算总价：￥{{count}}元
      </ul>
  </div>
</template>

<script>
export default {
    computed:{
        carList(){
            return this.$store.state.cart.items;
        },
        count(){
            let count=0;
            for(let item of this.$store.state.cart.items){
                count+=item.price*item.num;
            }
            return count;
        }
    }
}
</script>

<style>

</style>