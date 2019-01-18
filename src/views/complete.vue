<template>
  <el-collapse v-model="activeNames" >
    <el-collapse-item title="完成事项" name="xxx">
      <div v-for='list in completeEventList' v-bind:key='list.content' class="complete">
        <input type="checkbox" class="checkbox">
        <p class="content">{{list.content}}</p>
        <el-row>
          <el-button class="remove" type="danger" icon="el-icon-delete" circle  @click='remove(list)'></el-button>
        </el-row>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["rrr"],
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
  components: {
    
  },
  methods: {
    remove(list){
        let index = this.completeEventList.indexOf(list)
        this.completeEventList.splice(index,1)
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
    width: 20px;
    height: 20px;     
}
.content{
    font-size:16px;
}
</style>

