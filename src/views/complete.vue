<template>
  <el-collapse v-model="activeNames" >
    <el-collapse-item title="完成事项" name="xxx">
      <div v-for='list in completeList' v-bind:key='list.content' class="complete">
        <input type="checkbox" class="checkbox" checked @change='changed(list)'>
        <p class="content">{{list.content}}</p>
        <el-row>
          <el-button size="small" class="remove" type="primary"  plain icon="el-icon-delete" circle  @click='remove(list)'></el-button>
        </el-row>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  props: ['completeList'],
  data() {
    return {
      activeNames: ["2"],

    };
  },
  components: {
    
  },
  methods: {
    remove(list){
      console.log(this.completeList)
        let index = this.completeList.indexOf(list)
        this.completeList.splice(index,1)
    },
    changed(list){
      this.$emit('toPending',list)
    }
  }
};
</script>
<style>
.complete{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.checkbox{
    width: 16px;
    height: 16px;     
}
.content{
    font-size:16px;
}
</style>

