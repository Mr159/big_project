<template>
    <div class="headone" :style="hasCss">
        <div class="left" @click="goback">{{leftTitle}}</div>
        <div class="center" v-html="centerTitle">{{centerTitle}}</div>
        <div class="right">
            <img :src="rightTitle" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:"headone",
    props:{
        leftTitle:{
            default:'',
            type:String
        },
        centerTitle:{
            default:'',
            type:String,
            required:true
        },
        rightTitle:{
            default:'',
            type:String,
            required:false

        },
        hasCss:{
            type:Object
        },
        
    },
    data(){
        return{
        }
    },
    methods:{
        goback(){
            // window.history.go(-1)
            this.$router.push({
                path:"/"
            })
        }
    }
}
</script>

<style scoped>
.headone{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    font-size: 20px;
}
</style>