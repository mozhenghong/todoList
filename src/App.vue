<template>
  <div id="app">
    <add v-on:enlarge-text="xxx"/>
    <pending yyy=zzz />
    <complete />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './views/Home'
// import About from './views/About'
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
      zzz: 'init',
    };
  },
  methods: {
    xxx(xxx) {
      console.log("xxx", xxx);
      this.zzz = xxx;
    }
  }
};
</script>

<style>
</style>
