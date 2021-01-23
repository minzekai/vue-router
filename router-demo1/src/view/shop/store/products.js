import shop from "../api/shop.js";

//库存的源数据
const state={
    allList:[]
};
const getters={};

//外部Mutations事件
    const mutations={
        //获取所有的库存并放到源数据里
        setAll(state,products){
            state.allList=products;
        },
        //根据回传的id来减少库存
        ReduceProductNumById(state,{id}){
            const probyid=state.allList.find(probyid=>probyid.id===id);
            probyid.num--;
        }
    }

    //外部的action事件
    const actions={
        getAllProducts({commit}){
            //通过调用shop.js里的方法获取库存
            shop.getProducts(products =>{
                commit("setAll",products)
            })
        }
    };

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
};
