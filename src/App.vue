<template>
  <div id="app">
    <add v-on:addList="onSubmit"/>
    <el-badge :value="1" :max="20" class="item"></el-badge>
    <pending :pendingList="todoList"  v-on:pending-to-complete="addComplete" />
    <el-badge :value="1" :max="20" class="item"></el-badge>
    <complete :completeList ="completeEventList" v-on:toPending="addPending"/>
  </div>
</template>

<script>
import add from "./views/add";
import complete from "./views/complete";
import pending from "./views/pending";
import pendingLocalStore from "./pendingLocalStorage.js"
import completeLocalStore from "./completeLocalStorage.js"
import Leancloud from "./leancloud.js"
import leancloud from './leancloud.js';

export default {
  name: "app",
  components: {
    add,
    complete,
    pending,
  },
  data() {
    return {
  
      todoList: Leancloud.getList('pendingList'),
      completeEventList: completeLocalStore.fetch()
    };
  },
  methods: {
    onSubmit(xxx) {
      console.log( Leancloud.getList('pendingList'))
      Leancloud.add('pendingList',xxx)
      // this.todoList.unshift({content: xxx})
    },
    addComplete(complete){
      let index = this.todoList.indexOf(complete)
      this.todoList.splice(index,1)
      this.completeEventList.unshift(complete)
    },
    addPending(pending){
      this.todoList.unshift(pending)
      let index = this.completeEventList.indexOf(pending)
      this.completeEventList.splice(index,1)
    },
    pendingValue(){
      return this.todoList.length
    },
    completeValue(){
      return this.completeEventList.length
    }
  },
  watch:{
    // todoList:{
    //   handler: function(todoList){
    //     pendingLocalStore.save(todoList)
    //   },
    //   deep: true
    // },
    // completeEventList:{
    //   handler: function(completeEventList){
    //    completeLocalStore.save(completeEventList)
    //   },
    //   deep: true
    // }
  }
};
</script>

<style>
.item {
  margin-top: 10px;
  margin-left:95vw;
  transition: all 2s;
  animation: breath 0.5s infinite alternate;
}
@keyframes breath{
  0%{transform: scale(1) }
  100%{transform: scale(1.2)}
}
</style>
