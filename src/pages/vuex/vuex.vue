<template>
    <section>
        <h1>vuex测试</h1>
        <div class="count">当前count为：{{ count }}</div>
        <el-button class="btn" @click="countAdd" type="primary">+</el-button>
        <el-button class="btn" @click="countSubtract" type="primary">-</el-button>
    </section>
</template>

<script>
    import { mapState, mapMutations} from 'vuex'
    export default {
        data (){
            return {
                
            }
        },
        computed : mapState([
            'count'
        ]),

        methods : {
            ...mapMutations([
                'countAdd', //把this.countAdd()映射为 this.$store.commit('countAdd')
                'countSubtract'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    .btn{
        margin-top:20px;
    }
</style>
