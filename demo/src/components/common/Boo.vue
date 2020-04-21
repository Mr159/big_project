<template>
    <div class="boo">
        <ul>
            <li>
                <p><i class="iconfont  icon-home1"></i></p>
            </li>
            <li>
                <p><i class="iconfont  icon-leimupinleifenleileibie"></i></p>
            </li>
            <li>
                <p>加入购物车</p>
            </li>
        </ul>
            
            
            
    </div>
</template>

<script>
export default {
    name:"boo",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.boo{
    width: 100%;
    height: 45px;
    background-color: red;
    
}
ul,li{
    list-style: none;
}
ul{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    line-height: 45px;
}
</style>