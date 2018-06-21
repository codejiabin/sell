<template>
  <div>
    <h2>{{msg}}</h2><hr/>
    <h2>{{$store.state.count}}-{{count}}</h2>
    <p>
      <button @click="addNumber">+</button>
      <button @click="reduceNumber">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
import {mapState, mapGetters,mapActions} from 'vuex'
  export default{
    data(){
        return{
            msg:"hello vuex"
        };
    },
    methods:{
        addNumber(){
            return this.$store.commit("add",2);
        },
        reduceNumber(){
            return this.$store.commit("reduce");
        },
          ...mapActions(["addAction","reduceAction"])
    },
    computed:{
      ...mapState(["count"])
    }
  }
</script>

<style lang="stylus" scoped>
  button
    width:40px;
    height:20px;
    background:#362574;
    color:#fff;
    margin:0 20px;
</style>
