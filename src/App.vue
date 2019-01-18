<template>
  <div id="app">
    <add v-on:addList="onSubmit"/>
    <pending :pendingList="todoList"  v-on:pending-to-complete="addComplete" />
    <complete :completeList ="completeEventList"/>
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
        {content: 'xxx'},
        {content: 'yyy'}
      ],
       completeEventList: [
        {
          content: "content"
        },
        {
           content: "remove"
        }

      ]
    };
  },
  methods: {
    onSubmit(xxx) {
      // this.todoList = xxx;
      console.log('xxx',xxx)
      this.todoList.unshift({content: xxx})
      // console.log('x',this.todoList)
    },
    addComplete(complete){
      let index = this.todoList.indexOf(complete)
      this.todoList.splice(index,1)
      this.completeEventList.unshift(complete)
    }
  }
};
</script>

<style>
</style>
