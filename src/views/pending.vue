<template>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="待办事项" name="1">
          <div class="pending" v-for="list in lists" :key="list.content">
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
        props: ['yyy'],
        data() {
            return {
                activeNames: ['1'],
                lists:[
                    {content:''},
                ]
            };
        },
        components: {
            
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
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

