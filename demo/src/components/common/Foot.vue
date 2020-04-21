<template>
    <div class="foot">
        <ul>
            <li>
                <router-link to="/">
                <p><i class="iconfont  icon-home1"></i></p>
                <p>首页</p>
                </router-link>
            </li>
            <li>
                <p><i class="iconfont  icon-leimupinleifenleileibie"></i></p>
                <router-link to="/rank">分类</router-link>
            </li>
            <li>
                <p><i class="iconfont  icon-gouwuchekong"></i></p>
                <router-link to="/shop">购物车</router-link>
            </li>
            <li>
                <p><i class="iconfont  icon-daohanglan-05"></i></p>
                <router-link to="/me">我的</router-link>
            </li>
          </ul>
    </div>
</template>

<script>
export default {
    name:"foot",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.foot{
    width: 100%;
    z-index: 1000;
    position: fixed;
    bottom: 0;
}
.foot ul{
    padding-top: 10px;
    list-style: none;
    width: 100%;
    height: 50px;
    background: grey;
    display: flex;
}
.foot ul li{
    width: 25%;
    height: 100%;
    text-align: center;
}
a{
    text-decoration: none;
}
.router-link-active{
    color: red;
}
</style>