<template>
   <div id="test">
         <div>id:{{ formparam }}, query{{ this.$route.query}}</div>
         <TestChenPeifengB></TestChenPeifengB><TestChenPeifengC></TestChenPeifengC>

	 <chenpeifeng-button 
	  v-for="post in posts"
          v-bind:post="post"
	  :key="post.id"
	 ></chenpeifeng-button>

	 <TestChenPeifengButton ref="testChenPeifengButtonA" v-bind:title="chenpeifengTest"></TestChenPeifengButton>
	 <TestChenPeifengButton v-on:enlarge-text="onEnlargeText"  v-bind:title="chenpeifengTest2"></TestChenPeifengButton>

	 <router-link class="forgetpassword" to="/phone">拍照</router-link>
	 

	 <div :style="{ fontSize: postFontSize + 'em' }">22222222</div>
	 <li v-for="(item, index) in items" :key="item.id">
	    {{ parentMessage }} - {{ index }} - {{ item.message }}
	  </li>
	  {{ userProfile.name }} - {{ userProfile.age }}
	  <li v-for="n in evenNumbers(numbers)">{{ n }}</li>
	  <input v-model="inputmessage" v-focus >
	  <h3>{{inputmessage}}</h3>

	   <button v-on:click="show = !show">
	    Toggle
	  </button>
	  <transition name="fadew">
	    <p v-if="show">hello</p>
	  </transition>

	  <transition name="component-fade" mode="out-in">
	   <component v-bind:is="view"></component>
	  </transition>

	  <div v-html="rawHtml"></div>
           
	   <br/>
	  <input type="checkbox" id="checkbox" v-model="checked001">
          <label for="checkbox">{{ checked001 }}</label>
          <br />
	 <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
	<label for="jack">Jack</label>
	<input type="checkbox" id="john" value="John" v-model="checkedNames">
	<label for="john">John</label>
	<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
	<label for="mike">Mike</label>
	<br>
	<span>Checked names: {{ checkedNames }}</span><br><br>

	<select v-model="selected" multiple>
	  <option>A</option>
	  <option>B</option>
	  <option>C</option>
	</select>
	<br>
	<span>Selected: {{ selected }}</span>

	<div>
	  <button v-on:click="doThis">1111</button>
	  <h1>I'm the parent title</h1>
	  <TestChenPeifengA>
	    <h1 slot="header">Here might be a page title</h1>
	    <p>This is some original content</p>
	    <p>This is some more original content</p>
	  </TestChenPeifengA>
	</div>

	<component v-bind:is="currentView"></component>
	<router-view name="TestChenPeifengA"></router-view>
	<router-view name="TestChenPeifengA"></router-view>
	<router-view name="TestChenPeifengA"></router-view>

	 
  </div>	
</template>

<script>
  import TestChenPeifengButton from './Test-chenpeifeng-button.vue';
  import TestChenPeifengA from './Test-chenpeifengA.vue';
  import TestChenPeifengB from './Test-chenpeifengB.vue';
  import TestChenPeifengC from './Test-chenpeifengC.vue';

  export default {
          data: function () {
	    return {
	      posts: [
		      { num: 1, title: 'My journey with Vue' },
		      { num: 2, title: 'Blogging with Vue' },
		      { num: 3, title: 'Why Vue is so fun' }
	     ],
	     chenpeifengTest:'chenpeifengTest',
	     chenpeifengTest2:'chenpeifengTest2',
	     postFontSize: 1,
	     parentMessage: 'Parent',
	     getMap33:'CC',
	     inputmessage:'',
	     items: [
	      { message: 'Foo',id:1 },
	      { message: 'Bar',id:2 }
	     ],
	     userProfile: {
	      name: 'Anika'
	     },
	     numbers: [ 1, 2, 3, 4, 5 ],
	     show: true,
	     view: 'v-a',
	     rawHtml:'huangjialing',
	     checked001:true,
	     checkedNames:[],
	     selected:[],
	     currentView:'TestChenPeifengA',
	     formparam: this.$route.params

	    }
	  },
	  created(){
	    this.rawHtml='huangliqin------------------';
	    console.log(this.$route);
	  },
	 components:{
	   TestChenPeifengButton,
	   TestChenPeifengA,
	   TestChenPeifengB,
	   TestChenPeifengC,
	   'v-a': {
	      template: '<div>Component A</div>'
	    },
	    'v-b': {
	      template: '<div>Component B</div>'
	    }
	 },   
	 methods: {
	  onEnlargeText: function (enlargeAmount) {
	    this.postFontSize += enlargeAmount;
            this.parentMessage='children';
	    this.$set(this.userProfile,'age',27);
	  },
	  evenNumbers: function () {
	    return this.numbers.filter(function (number) {
	      return number % 2 === 0
	    })
	  },
	  doThis:function(){
	     var rval = this.publicjs.publicb(); 
	     console.log(rval+"----------");
	   }
	},
	watch:{
	    aaa: function(){
	    console.log(this.postFontSize+'---------');
	},
	provide:{
	    getMap33: "demo"
	}
     }

  }
</script>

<style  scoped>
#test{padding:20px}
button{display:block;}
.fadew-enter-active, .fadew-leave-active {
  transition: opacity .5s;
}
.fadew-enter, .fadew-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
