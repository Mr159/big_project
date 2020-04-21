<template>
    <div class="detail">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img :src="imgDate" alt=""></div>
                    <div class="swiper-slide"><img :src="imgDate" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <p>{{this.$route.query.imgId}}</p>
            <p  :style="hasCss">{{this.$route.query.jieshao}}</p>
            <p :style="colo">{{this.$route.query.price}}</p>
            <p>{{this.$route.query.jieshao2}}</p>
            <ul class="ul1">
                <li v-for="(item,index) in this.$route.query.Name" :key="index">
                    <span>{{item.name1}}</span>
                    <span>{{item.name2}}</span>
                    <span>{{item.name3}}</span>
                    <span>{{item.GG1}}</span>
                    <span>{{item.GG2}}</span>
                    <span>{{item.GG3}}</span>
                </li>
            </ul>
            <img :src="imgDate2" alt="" class="imgDate2">

            <Boo class="boo">
                
            </Boo>
    </div>
</template>

<script>
import Boo from "@/components/common/Boo"
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "swiper/js/swiper.min.js";
export default {
    name:"detail",
    components:{Boo},
    data(){
        return{
            imgDate:this.$route.query.imgOne,
            imgDate2:this.$route.query.imgTwo,
            hasCss:{
                fontSize:"18px"
            },
            colo:{color:"red"}
        }
    },
    //lunbo
    mounted(){
        var newswiper=new Swiper(".swiper-container",{
            autoplay:{
                delay:1500
            },
            loop:true,
            pagination:{
                el:".swiper-pagination"
            },
            navigation:{
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev"
            }
        });
        console.log(this.$route.query.Name)
    }
}
</script>

<style scoped>
.detail{
    width: 100%;
    height: 100%;
}
.ul1{
    width: 100%;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}
.ul1 li{
    width: 20%;
    height: 20px;
    border: 1px solid;
    margin: 10px;
    padding: 5px;
}
.imgDate2{
    width: 100%;
}
.boo{
    position: absolute;
    bottom: 0;
}
</style>