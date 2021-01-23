export default {
    namespaced:true,
    state:{name:"小B"},
    mutations: {
        changeName(state){
            state.name="change小B"
        }
    },
    actions: {},
    getters:{}
}