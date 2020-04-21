<template>
  <div class="home">
          <Headone centerTitle="电商联盟" :rightTitle="img" ></Headone>
        <section>

            <div class="swiper-container first">
                <div class="swiper-wrapper wrapper1">
                    <div class="swiper-slide" v-for="(item,index) in datalist" :key="index">
                        <img :src="item.img" alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
          </div>
          <ul class="nav">
            <li>
              <img src="../assets/small_img.png" alt="">
              <span>系统登陆</span>
            </li>
            <li>
              <img src="../assets/small_img.png" alt="">
              <span>系统登陆</span>
            </li>
            <li>
              <img src="../assets/small_img.png" alt="">
              <span>系统登陆</span>
            </li>
          </ul>
          <div class="nav-img">
              <p>section1</p>
              <ul>
                <li v-for="(item,index) in dateImg" :key="index" @click="goDetail(index)">
                        <img :src="item.img" alt="">
                </li>
              </ul>
          </div>
          <div class="nav3">
              <p>s1-bannar</p>
          </div>
          <div class="nav2">
          </div>


        </section>
        <Foot></Foot>


  </div>
</template>

<script>
import {swiper} from "@/mock.js"
import Foot from "@/components/common/Foot"
import Headone from "@/components/common/Headone"
import Swiper from "swiper"; 
import "swiper/css/swiper.min.css";
import "swiper/js/swiper.min.js";
export default {
  name: 'Home',
  components:{Foot,Headone},
  data(){
    return{
      banner:[],
      datalist:[],
      scrollY:0,
      img:'./static/jl_ico.png',
      dateImg:[
          {
              img:"http://dummyimage.com/400x400/b7ddf2/333.png",
              imgd:"http://dummyimage.com/600x600/5a9e6e/FFF.png",

              id:1,
              jieshao:"360手机 N5 全网通 移动 联通电信4G手机~~",
              price:"543元",
              jieshao2:"手误正杰",
              Name:[
                  {name1:"土豪金"},
                  {name2:"东北银"},
                  {name3:"喜庆红"},
                  {GG1:"128g"},
                  {GG2:"64g"},
                  {GG3:"32g"}
              ],
              
          },
          {
              img:"http://dummyimage.com/400x400/b7ddf2/333.png",
              id:2
          },
          {
              img:"http://dummyimage.com/400x400/b7ddf2/333.png",
              id:3
          },
          {
              img:"http://dummyimage.com/400x400/b7ddf2/333.png",
              id:4
          }
      ]
    }

  },
  methods:{
      goDetail(index){
          this.$router.push({
              name:"detail",
              query:{
                  imgOne:this.dateImg[index].img,
                  imgId:this.dateImg[index].id,
                  jieshao:this.dateImg[index].jieshao,
                  price:this.dateImg[index].price,
                  jieshao2:this.dateImg[index].jieshao2,
                  Name:this.dateImg[index].Name,
                  imgTwo:this.dateImg[index].imgd


              }
          })
      }
  },
  mounted(){
           //轮播图 
        var myswiper=new Swiper(".first",{
                autoplay:{
                            delay:1500
                        },
                loop:true,
                observer:true,
                observeParents:true,
                pagination:{
                            el:".swiper-pagination"
                        },
                navigation:{
                    nextEl:".swiper-button-next",
                    prevEl:".swiper-button-prev"
                }
        });

  },
  created(){
    this.$axios.get("/api/swiper").then(res=>{
      console.log(res)
      this.datalist=res.data.list
    });
  }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
section{
  width: 100%;
  height: 100%;
}
.first{
    width: 100%;
    height: 300px;
}
.wrapper1{
    width: 100%;
    height: 260px;
}
.wrapper1 img{
    width: 100%;
    height: 100%;
}
.nav{
  width: 100%;
  height: 40px;
  list-style: none;
  display: flex;
}
.nav li{
  height: 40px;
  width: 33.3%;
  text-align: center;
  line-height: 40px;
}
.nav li img{
  width: 20px;
  vertical-align: middle;
}
.nav li span{
  font-size: 16px;
  vertical-align: middle;
}
.nav-img{
  width: 100%;
  height: 430px;
}
.nav-img p{
  margin: 10px;
  text-align: center;
}
.nav-img ul{
  margin: 30px 10px 10px 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

}
.nav-img ul li{
  width: 50%;
  height: 50%;
  padding: 5px;
  box-sizing: border-box;
}
.nav-img ul li img{
  width: 100%;
  height: 100%;
}
.nav2{
  height: 100px;
}
.nav3{
  width: 100%;
  height: 80px;
  background: rgb(255, 174, 0);
  font-size: 40px;
  text-align: center;
  line-height: 80px;
  color: aliceblue;
}
.second{
  width: 100%;
  height: 150px;
  margin-top: 20px;
}
.second .wrapper2{
  width: 100%;
  height: 100px;
  display: flex;
}
.second .wrapper2 div{
   width: 100px;
  height: 100%;
      
}
</style>
