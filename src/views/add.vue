<template>
   <div class="add">
    <label>添加todo:
      <input v-model="formInline.user" placeholder="添加todo" class="addInput" @keyup.enter="onSubmit">
    </label>
    <el-row  class="addButton">
      <el-button plain　v-on:click="onSubmit">添加</el-button>
    </el-row>
   </div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$emit('addList', this.formInline.user);
        this.formInline.user=''
      }
    }
  }
</script>
<style>
.add{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
}
.addInput{
  font-size: 17px;
  padding: 6px 0;
}
.addButton{
  margin-left: 20px;
}
</style>