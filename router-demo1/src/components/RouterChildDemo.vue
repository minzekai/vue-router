<template>
  <div>
      {{routerInfo}}
  </div>
</template>

<script>
export default {
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

<style>

</style> */