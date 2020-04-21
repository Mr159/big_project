<template>
    <div class="rank">
        <Headone leftTitle="《" centerTitle="商品分类" :hasCss="obj" class="head"></Headone>
        <div class="box">
                <ul class="ul1">
                    <li><router-link to="/rank/shijing"><p>石静</p></router-link></li>
                    <li><router-link to="/rank/qiujun">邱军</router-link></li>
                    <li><router-link to="">陆磊</router-link></li>
                    <li><router-link to="">谢芳</router-link></li>
                    <li><router-link to="">胡超</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                    <li><router-link to="">沈静</router-link></li>
                </ul>
                <div class="rout">
                        <router-view/>
                </div>
        </div>
    </div>
</template>
<script>
import Headone from "@/components/common/Headone"
export default {
    name:"rank",
    components:{Headone},
    data(){
        return{
            obj:{
                background:'red'
            },
            
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
.rank{
  width: 100%;
  height: 100%;
}
.head{
    position: absolute;
    top: 0px;
}
.box{
    width: 100%;
    height: 100%;
    margin-top: 50px;
    display: flex;
}
.ul1{
    width: 20%;
    list-style: none;
    border-right: 1px solid red;
}
.ul1 li{
    height: 40px;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
}
.rout{
    width: 80%;
    height: 100%;
}

</style>