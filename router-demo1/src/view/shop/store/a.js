export default {
    namespaced:true,
    state:{name:"小A"},
    mutations: {
        changeName(state){
            state.name="change小A"
        }
    },
    actions: {},
    getters:{}
}