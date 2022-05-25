<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <h1>{{a}}</h1>
    <h3>Installed CLI Plugins</h3>
    <h2>{{$store.state.sum}}</h2>
    <button @click="togo"> 点击测试vuex</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      a:1
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  components:{},
  mounted() {
    console.log(this)
  },
  methods: {
    togo(){
      this.$store.dispatch("wait",10)
      this.$store.commit("add",19)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
