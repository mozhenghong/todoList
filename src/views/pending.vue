<template>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="待办事项" name="1">
          <div class="pending" v-for="list in pendingList" :key="list.content">
            <input type="checkbox" class="checkbox" >
            <p class="content">{{list.content}}</p>
            <el-row>
                <el-button class="rrmove" type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
          </div>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
    export default {
        props: ['pendingList'],
        data() {
            return {
                activeNames: ['1'],
            };
        },
        components: {
            
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        },
        created(){
            console.log('pending',this.pendingList)
        },
    }
</script>
<style>
.pending{
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

