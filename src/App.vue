<template>
    <div id="app">
        <router-view v-wechat-title='$route.meta.title'></router-view>
	<router-view name="testTag"></router-view>
    </div>
</template>
<script>
    import Test from './components/page/Test.vue';
     export default {
        components:{
            testTag: Test
        },
      }
</script>

<style>
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
#app{overflow:auto;}
</style>