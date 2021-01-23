<template>
    <ul>
        <li v-for="productItem in productsList" :key="productItem.id">
            {{productItem.title}}-->{{productItem.price}}
            <br>
            <button :disabled="productItem.num<1" @click="addToCar(productItem)">加入购物车</button>
        </li>
    </ul>
</template>

<script>
export default {
    computed:{
        productsList(){
            return this.$store.state.products.allList;
        }
    },
    methods:{
        addToCar(productItem){
            this.$store.dispatch("cart/addProToCar",productItem);
        }
    },
    //在created生命周期时就调用方法来初始化库存的源数据
    created(){
        this.$store.dispatch("products/getAllProducts");
    }
}
</script>