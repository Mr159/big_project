<template>
  <div id="app">
    <section>
        <transition :name="transitionName">
            <keep-alive>
              <router-view class="Router"/>
            </keep-alive>
        </transition>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        transitionName:"slide-left"
    }
  },
  watch:{
      '$route' (to, from) {
          console.log(to)
    　　　　　　if(to.name=='detail') {
    　　　　　　　　this.transitionName = 'slide-left'
    　　　　　　} else if(to.name=='Home'){
    　　　　　　       this.transitionName = 'slide-right'
    　　　　　  }
    　　}
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;

}
section{
  width: 100%;
  flex-grow: 1;
  overflow: auto;
}
.Router{
  position: absolute;
  width: 100%;
  transition: all 1s ease;
}
.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    transform: translate(-100%, 0);
}
</style>
