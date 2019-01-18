<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="完成事项" name="xxx">
      <div v-for='content in completeEventList' v-bind:key='content.content' class="complete">
        <input type="checkbox" class="checkbox">
        <p class="content">{{content.content}}</p>
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

