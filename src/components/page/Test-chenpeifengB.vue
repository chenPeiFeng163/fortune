<template>
  <div>
    Count is {{$store.state.count}},vue获取{{vuexParam}},method:{{storeCount}}<br/>
    <button @click="decrement">-3</button>
  </div>
</template>
<script>
  // 引入mapActions，很重要
  import { mapGetters, mapActions } from 'vuex'

  export default{
     data: function () {
	    return {
	     vuexParam: this.$store.state.count
	    }
     },
     computed: {
	    storeCount () {
	      return this.$store.state.count
	    }
    },
    methods: mapActions([//与vuex中的actions关联
      'decrement'
    ])
  }
</script>