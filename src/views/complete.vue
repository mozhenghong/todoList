<template>
  <el-collapse v-model="activeNames" @change="handleChange">
      <button @click="changeData">click me</button>
    <el-collapse-item title="完成事项" name="xxx">
      <div v-for='list in completeEventList' v-bind:key='list.content' class="complete">
        <input type="checkbox" class="checkbox">
        <p class="content">{{list.content}}</p>
        <el-row>
          <el-button class="remove" type="danger" icon="el-icon-delete" circle  @click='remove'></el-button>
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
      // 记住：所有的 UI 都是 根据数据进行改变，当你的数据更改的时候，你的 UI 将会进行改变
      completeEventList: [
        {
          content: "content"
        }
      ]

    };
  },
  components: {
    
  },
  methods: {
    remove(){
        this.index = this.completeEventList.indexOf(this.list.content)
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

