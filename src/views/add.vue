<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="添加todo">
            <el-input v-model="formInline.user" placeholder="添加todo" @change="onChange"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" v-on:click="onSubmit">添加</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: 'XXX',
          region: ''
        }
      }
    },
    methods: {
      onChange(e) {
        console.log(1, e);
      },
      onSubmit() {
        this.$emit('addList', this.formInline.user);
      }
    }
  }
</script>