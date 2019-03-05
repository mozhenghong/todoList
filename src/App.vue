<template>
  <div id="app">
    <add v-on:addList="onSubmit"/>
    <el-badge :value="pendingValue()" :max="20" class="item"></el-badge>
    <pending v-if="flag1" :pendingList="todoList" v-on:pending-to-complete="addComplete" v-on:removeList2="removeList2"/>
    <el-badge :value="completeValue()" :max="20" class="item"></el-badge>
    <complete v-if="flag2" :completeList="completeEventList" v-on:toPending="addPending" v-on:removeList="removeList"/>
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
      todoList: [],
      flag1:false,
      completeEventList: [],
      flag2:false
    };
  },
  created() {
    Leancloud.getList('pendingList').then((value) => {
      this.todoList = value;
      this.flag1 = true
    })
    Leancloud.getList('completeEventList').then((value) => {
      this. completeEventList = value;
      this.flag2 = true
    })
  },
  methods: {
    onSubmit(xxx) {
      Leancloud.add('pendingList', xxx)
      Leancloud.getList('pendingList').then((value) => {
        this.todoList = value;
      })
      // this.todoList.unshift({content: xxx})
    },
    addComplete(complete) {
      Leancloud.remove('pendingList',complete)
      Leancloud.getList('pendingList').then((value) => {
        this.todoList = value; 
      })
      Leancloud.add('completeEventList',complete.key.listName)
      Leancloud.getList('completeEventList').then((value) => {
        this. completeEventList = value;
        this.flag2 = true
      })
      // let index = this.todoList.indexOf(complete)
      // this.todoList.splice(index, 1)
      // this.completeEventList.unshift(complete)
    },
    addPending(pending) {
      Leancloud.remove('completeEventList',pending)
      Leancloud.getList('completeEventList').then((value) => {
        this. completeEventList = value;
        this.flag2 = true
      })
      Leancloud.add('todoList',pending.key.listName)
      Leancloud.getList('pendingList').then((value) => {
        this.todoList = value; 
      })
      // this.todoList.unshift(pending)
      // let index = this.completeEventList.indexOf(pending)
      // this.completeEventList.splice(index, 1)
    },
    pendingValue() {
      return this.todoList.length
    },
    completeValue() {
      return this.completeEventList.length
    },
    removeList(list){
      Leancloud.remove('completeEventList',list)
      Leancloud.getList('completeEventList').then((value) => {
        this. completeEventList = value;
        this.flag2 = true
      })
    },
    removeList2(list){
      Leancloud.remove('pendingList',list)
      Leancloud.getList('pendingList').then((value) => {
        this.todoList = value; 
      })
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
  margin-left: 90vw;
  transition: all 2s;
  animation: breath 0.5s infinite alternate;
}
@keyframes breath {
  0% {transform: scale(1) }
  100% {transform: scale(1.2)}
}
</style>
