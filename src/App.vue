<template>
  <div id="app">
    <add v-on:addList="onSubmit"/>
    <el-badge :value="pendingValue()" :max="20" class="item"></el-badge>
    <pending :pendingList="todoList"  v-on:pending-to-complete="addComplete" />
    <el-badge :value="completeValue()" :max="20" class="item"></el-badge>
    <complete :completeList ="completeEventList" v-on:toPending="addPending"/>
  </div>
</template>

<script>
import add from "./views/add";
import complete from "./views/complete";
import pending from "./views/pending";

export default {
  name: "app",
  components: {
    add,
    complete,
    pending
  },
  data() {
    return {
      value1: true,
      value2: true,
      todoList: [
       
      ],
       completeEventList: [
    
      ]
    };
  },
  methods: {
    onSubmit(xxx) {
      this.todoList.unshift({content: xxx})
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
