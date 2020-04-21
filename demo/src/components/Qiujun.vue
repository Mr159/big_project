<template>
    <div class="qiujun">
        <p>邱军</p>
        <ul>
            <li v-for="(item,index) in QiuArr" :key="index">
                <img :src="item.img" class="img11"/>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:"qiujun",
    data(){
        return{
            QiuArr:[]
        }
    },
    created(){
        axios.get("../../static/qiujun.json").then((res)=>{
            console.log(res.data.qiujun)
            this.QiuArr=res.data.qiujun
        })
    }
}
</script>

<style scoped>
    ul,li{
        list-style: none;
    }
    .img11{
    width: 50px;
    height: 50px;
}
ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
ul li{
    width: 33.3%;
    text-align: center;
}
</style>