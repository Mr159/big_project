<template>
    <div class="shijing">
        <p>石静</p>
                    <ol>
                        <li v-for="(item,index) in routeDate" :key="index">
                            <img :src="item.img" class="img11"/>
                            <p>{{item.name}}</p>
                        </li>
                    </ol>
    </div>
</template>

<script>
export default {
    name:"shijing",
    data(){
        return{
            routeDate:[
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"},
                {img:"http://dummyimage.com/2000x2000/5169b4/FFF.png",name:"java"}
                
            ]
        }
    }
}
</script>

<style scoped>
ol,li{
    list-style: none;
}
.img11{
    width: 50px;
    height: 50px;
}
ol{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
ol li{
    width: 33.3%;
    text-align: center;
}
</style>