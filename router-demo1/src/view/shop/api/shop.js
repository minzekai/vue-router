//全局的商品组件
const products=[
    {id:1,title:"华为 Mate 20",price:3999,num:2},
    {id:2,title:"小米 9",price:2999,num:3},
    {id:3,title:"OPPO R17",price:2999,num:5}
];

export default{
    getProducts(cb){
        return cb(products);
    }
}