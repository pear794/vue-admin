<template>
    <div class="editorPage">
        
            <quill-editor class="editor" ref="myTextEditor"
                v-model="introContent"
                :config="editorOption"
            >
            </quill-editor>
      
        
        <div slot="footer" class="dialog-footer">
            <el-button @click.native="editFormVisible = false">取消</el-button>
            <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
        </div>

        <div class="editor" v-html="introContent"></div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                introContent : "",
                editorOption : {},
                editLoading : false
            }
        },
        methods : {
            editSubmit (){

            }
        }
    }
</script>

<style lang="scss" scoped>
    .editorPage{
        width:100%;
        height:100%;
        .editor{
            margin-top:20px;
            height:60vh;
        }
        .dialog-footer{
            /* 这里不加一个margin按钮会跑到富文本里面 */
            margin-top:50px;
            text-align:right;
        }
    }
</style>
