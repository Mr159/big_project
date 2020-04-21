<template>
    <div class="me">
        <Headone centerTitle="登录页"></Headone>
        <p class="logo">
            <label for="">账号</label><input type="text" placeholder="请输入账号" v-model="obj.name">
        </p>
        <hr>
        <p class="logo">
            <label for="">密码</label><input type="text" placeholder="请输入密码" v-model="obj.keyword">
        </p>
        
        <hr>
        <p>
            <button class="btn" @click="logon">登录</button>
        </p>
    </div>
</template>

<script>
import Headone from "@/components/common/Headone"
export default {
    name:"me",
    components:{Headone},

    data(){
        return{
            obj:{
                    name:"",
                    keyword:""
            }
            
        }
    },
    methods:{
        logon(){
            localStorage.setItem("info",JSON.stringify(this.obj));
            if(this.$route.query.redirect){
                let redirect_path = this.$route.query.redirect
                this.$router.push({path:redirect_path})
            }else{
                this.$router.push({name:"home"})
            }
        }
    }
}
</script>

<style scoped>
.logo{
    text-align: center;
    margin-top: 20px;
}
.btn{
    width: 100%;
    height: 40px;
    margin-top: 20px;
}
</style>