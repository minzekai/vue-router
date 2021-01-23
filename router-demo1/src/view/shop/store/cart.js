//购物车的源数据
const state={
    items:[
    {id:1,title:"华为 Mate 20",price:3999,num:0},
    {id:2,title:"小米 9",price:2999,num:0},
    {id:3,title:"OPPO R17",price:2999,num:0}
    ],
    checkoutStatus:null
};

// const mutations={
//      AddProToCar(state,{product}){
//         //  console.log(product)
        // state.items.push((state.items.find(probyId=>probyId.id===product.id)
//      }

// };

//外部的actions事件
const actions={
    //向购物城内部添加数据
    addProToCar({commit},product){
        if(product.num>0){
            commit(
                'products/ReduceProductNumById',
                {id:product.id},
                {root:true},
                (state.items.find(probyId=>probyId.id===product.id)).num++,
                );
        }
    }
};

export default{
    namespaced:true,
    state,
    actions,
    // mutations
};