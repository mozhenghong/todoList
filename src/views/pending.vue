<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="待办事项" name="1">
          <div class="pending" v-for="list in pendingList" :key="list.id">
            <input type="checkbox" class="checkbox" @change='changed(list)'>
            <p class="content">{{list.key.listName}}</p>
            <el-row>
                <el-button size="small" class="remove" type="primary" plain icon="el-icon-delete" circle @click="remove(list)"></el-button>
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
            remove(list){
                alert('你要删除这个计划吗？')
                this.$emit('removeList2', list)
                // let index=this.pendingList.indexOf(list)
                // this.pendingList.splice(index,1)
            },
            changed(list){
                this.$emit('pending-to-complete', list)
            }
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
    width: 16px;
    height: 16px;     
}
.content{
    font-size:16px;
}
</style>

