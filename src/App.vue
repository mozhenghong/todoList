<template>
  <div id="app">
    <add v-on:addList="onSubmit('xxxx')"/>
    <pending />
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
      todoList: ''
    };
  },
  methods: {
   onSubmit(xxx) {
      this.todoList = xxx;
      console.log(this.todoList)
    }
  }
};
</script>

<style>
</style>
