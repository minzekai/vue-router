<!--父router页面的配置，将会显示在index(App.vue)页面-->
<template>
  <div>
      <router-link to="/foo">Go To foo</router-link>
      <hr>
      <router-link to="/user/12">Go To user/12</router-link>
      <hr>

      <h2>属性展示</h2>
        <p>{{routerInfo}}</p>

        <h2>子router页面的展示</h2>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    //访问时参数的设置
    props:['id'],
    computed:{
        routerInfo(){
            const {fullpath,path,name,params,query,meta}=this.$route
            return{
                fullpath,path,name,params,query,meta
            }
        }
    }
}
</script>
