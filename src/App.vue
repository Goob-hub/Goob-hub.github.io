<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    
  </div>
</template>

<style lang="scss">
$clr-5: #262626;
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app{
  overflow: hidden;
  width: 100%;
  background: $clr-5;
}

.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}

.fade-leave-active{
  transition: all .3s ease;
}

</style>
