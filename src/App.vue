<template>
  <div id="app">
    <add v-on:addList="onSubmit"/>
    <pending :pendingList="todoList" />
    <complete />
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
      ]
    };
  },
  methods: {
   onSubmit(xxx) {
      this.todoList = xxx;
      console.log(xxx)
      console.log('x',this.todoList)
    }
  }
};
</script>

<style>
</style>
