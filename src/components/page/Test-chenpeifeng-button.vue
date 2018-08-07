<template>
<div>
  <br />
  <h3>{{title}}</h3>
   <button v-on:click="count++">You clicked me {{ count }} times.</button>
   <button v-on:click="$emit('enlarge-text', addcount)">{{parentdata}}</button>
   {{contentw}}



 <script type="text/x-template" id="anchored-heading-template">
  <h1 v-if="level === 1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2">
    <slot></slot>
  </h2>
  <h3 v-else-if="level === 3">
    <slot></slot>
  </h3>
  <h4 v-else-if="level === 4">
    <slot></slot>
  </h4>
  <h5 v-else-if="level === 5">
    <slot></slot>
  </h5>
  <h6 v-else-if="level === 6">
    <slot></slot>
  </h6>
</script>
</div>
</template>

<script>
  export default {
	 data: function () {
	    return {
	      count: 0,
	      contentw:this.$root.data.foo,
	      parentdata:this.$parent.chenpeifengTest,
	      addcount:1
	    }
	  },
	  props: ['title']

  }
</script>
